import { NextRequest, NextResponse } from 'next/server';
import { createUser, getUserByEmail, sendVerificationOTP } from '@/lib/auth';

export async function POST(request: NextRequest) {
    try {
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
