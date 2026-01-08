import { NextRequest, NextResponse } from 'next/server';
import { createUser, getUserByEmail, sendVerificationOTP } from '@/lib/auth';
import { rateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
    try {
        // Rate limiting - 3 signups per hour per IP
        const ip = getClientIP(request);
        const { success: rateLimitOk, resetTime } = rateLimit(
            `signup:${ip}`,
            RATE_LIMITS.SIGNUP.limit,
            RATE_LIMITS.SIGNUP.windowMs
        );

        if (!rateLimitOk) {
            const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);
            return NextResponse.json(
                { error: 'Too many signup attempts. Please try again later.' },
                {
                    status: 429,
                    headers: { 'Retry-After': String(retryAfter) }
                }
            );
        }

        const { email, password, name } = await request.json();

        if (!email || !password || !name) {
            return NextResponse.json(
                { error: 'Email, password, and name are required' },
                { status: 400 }
            );
        }

        // Check if user already exists
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return NextResponse.json(
                { error: 'An account with this email already exists' },
                { status: 409 }
            );
        }

        // Create user with OTP
        const { user, otp } = await createUser(email, password, name);

        // Send verification OTP email
        await sendVerificationOTP(email, name, otp);

        return NextResponse.json({
            success: true,
            message: 'Account created! Please check your email for the verification code.',
            email: user.email,
        });
    } catch (error: unknown) {
        console.error('Signup error:', error);
        const message = error instanceof Error ? error.message : 'Failed to create account';
        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    }
}
