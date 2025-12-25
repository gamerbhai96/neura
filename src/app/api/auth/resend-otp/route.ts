import { NextRequest, NextResponse } from 'next/server';
import { resendVerificationOTP, getUserByEmail, sendVerificationOTP } from '@/lib/auth';

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Check if user exists and is not verified
        const user = await getUserByEmail(email);
        if (!user) {
            // Return success to prevent email enumeration
            return NextResponse.json({
                success: true,
                message: 'If an unverified account exists, a new code has been sent.',
            });
        }

        if (user.email_verified) {
            return NextResponse.json(
                { error: 'Email is already verified' },
                { status: 400 }
            );
        }

        // Generate new OTP and send
        const result = await resendVerificationOTP(email);
        if (result) {
            await sendVerificationOTP(email, user.name || '', result.otp);
        }

        return NextResponse.json({
            success: true,
            message: 'A new verification code has been sent to your email.',
        });
    } catch (error) {
        console.error('Resend OTP error:', error);
        return NextResponse.json(
            { error: 'Failed to resend code' },
            { status: 500 }
        );
    }
}
