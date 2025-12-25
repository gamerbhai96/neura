import { NextRequest, NextResponse } from 'next/server';
import { setPasswordResetOTP, getUserByEmail, sendPasswordResetOTP } from '@/lib/auth';

export async function POST(request: NextRequest) {
    try {
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
