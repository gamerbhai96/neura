import { NextRequest, NextResponse } from 'next/server';
import { verifyEmailOTP, generateToken, setAuthCookie, getUserByEmail } from '@/lib/auth';
import { rateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
    try {
        // Rate limiting - 10 attempts per 15 minutes per IP
        const ip = getClientIP(request);
        const { success: rateLimitOk, resetTime } = rateLimit(
            `verify-otp:${ip}`,
            RATE_LIMITS.OTP_VERIFY.limit,
            RATE_LIMITS.OTP_VERIFY.windowMs
        );

        if (!rateLimitOk) {
            const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);
            return NextResponse.json(
                { error: 'Too many verification attempts. Please try again later.' },
                {
                    status: 429,
                    headers: { 'Retry-After': String(retryAfter) }
                }
            );
        }

        const { email, otp } = await request.json();

        if (!email || !otp) {
            return NextResponse.json(
                { error: 'Email and OTP are required' },
                { status: 400 }
            );
        }

        const result = await verifyEmailOTP(email, otp);

        if (!result.success) {
            return NextResponse.json(
                { error: result.error },
                { status: 400 }
            );
        }

        // Get updated user and auto-login
        const user = await getUserByEmail(email);
        if (user) {
            const token = generateToken(user.id, user.email);
            await setAuthCookie(token);
        }

        return NextResponse.json({
            success: true,
            message: 'Email verified successfully!',
        });
    } catch (error) {
        console.error('Verify OTP error:', error);
        return NextResponse.json(
            { error: 'Failed to verify email' },
            { status: 500 }
        );
    }
}
