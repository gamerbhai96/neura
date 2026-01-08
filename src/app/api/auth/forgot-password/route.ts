import { NextRequest, NextResponse } from 'next/server';
import { setPasswordResetOTP, getUserByEmail, sendPasswordResetOTP } from '@/lib/auth';
import { rateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
    try {
        // Rate limiting - 3 attempts per 15 minutes per IP
        const ip = getClientIP(request);
        const { success: rateLimitOk, resetTime } = rateLimit(
            `forgot-password:${ip}`,
            RATE_LIMITS.PASSWORD_RESET.limit,
            RATE_LIMITS.PASSWORD_RESET.windowMs
        );

        if (!rateLimitOk) {
            const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);
            return NextResponse.json(
                { error: 'Too many password reset attempts. Please try again later.' },
                {
                    status: 429,
                    headers: { 'Retry-After': String(retryAfter) }
                }
            );
        }

        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Always return success to prevent email enumeration
        const user = await getUserByEmail(email);
        if (user) {
            const result = await setPasswordResetOTP(email);
            if (result) {
                await sendPasswordResetOTP(email, user.name || '', result.otp);
            }
        }

        return NextResponse.json({
            success: true,
            message: 'If an account exists with this email, we\'ve sent a reset code.',
            email: email, // Return email for the next step
        });
    } catch (error) {
        console.error('Forgot password error:', error);
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
