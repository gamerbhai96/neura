const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'noreply@neura.com';
const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || 'Neura';

interface SendEmailParams {
    to: string;
    toName?: string;
    subject: string;
    htmlContent: string;
}

async function sendEmail({ to, toName, subject, htmlContent }: SendEmailParams): Promise<boolean> {
    if (!BREVO_API_KEY) {
        console.error('BREVO_API_KEY is not configured');
        return false;
    }

    try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': BREVO_API_KEY,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                sender: {
                    name: BREVO_SENDER_NAME,
                    email: BREVO_SENDER_EMAIL,
                },
                to: [{ email: to, name: toName || to }],
                subject,
                htmlContent,
            }),
        });

        if (!response.ok) {
            const error = await response.text();
            console.error('Brevo email error:', error);
            return false;
        }

        return true;
    } catch (error) {
        console.error('Failed to send email:', error);
        return false;
    }
}

export async function sendVerificationOTP(email: string, name: string, otp: string): Promise<boolean> {
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #09090b; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="100%" style="max-width: 500px; background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 40px;">
                    <tr>
                        <td align="center" style="padding-bottom: 30px;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">
                                Verify Your Email
                            </h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="color: #a1a1aa; font-size: 16px; line-height: 1.6; padding-bottom: 30px;">
                            Hi ${name || 'there'},<br><br>
                            Thanks for signing up for <strong style="color: #ffffff;">Neura</strong>! Use this code to verify your email:
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding-bottom: 30px;">
                            <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 3px; border-radius: 16px; display: inline-block;">
                                <div style="background: #09090b; padding: 20px 40px; border-radius: 14px;">
                                    <span style="font-size: 36px; font-weight: 700; color: #ffffff; letter-spacing: 8px;">${otp}</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="color: #71717a; font-size: 14px; line-height: 1.5; text-align: center;">
                            This code expires in <strong style="color: #a1a1aa;">10 minutes</strong>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 40px;">
                            <p style="color: #52525b; font-size: 12px; margin: 0;">
                                If you didn't create an account with Neura, you can safely ignore this email.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `;

    return sendEmail({
        to: email,
        toName: name,
        subject: `${otp} is your Neura verification code`,
        htmlContent,
    });
}

export async function sendPasswordResetOTP(email: string, name: string, otp: string): Promise<boolean> {
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #09090b; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="100%" style="max-width: 500px; background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 40px;">
                    <tr>
                        <td align="center" style="padding-bottom: 30px;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">
                                Reset Your Password
                            </h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="color: #a1a1aa; font-size: 16px; line-height: 1.6; padding-bottom: 30px;">
                            Hi ${name || 'there'},<br><br>
                            We received a request to reset your password. Use this code to continue:
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding-bottom: 30px;">
                            <div style="background: linear-gradient(135deg, #ef4444, #f97316); padding: 3px; border-radius: 16px; display: inline-block;">
                                <div style="background: #09090b; padding: 20px 40px; border-radius: 14px;">
                                    <span style="font-size: 36px; font-weight: 700; color: #ffffff; letter-spacing: 8px;">${otp}</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="color: #71717a; font-size: 14px; line-height: 1.5; text-align: center;">
                            This code expires in <strong style="color: #a1a1aa;">10 minutes</strong>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 40px;">
                            <p style="color: #52525b; font-size: 12px; margin: 0;">
                                If you didn't request a password reset, you can safely ignore this email. Your password will not change.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `;

    return sendEmail({
        to: email,
        toName: name,
        subject: `${otp} is your Neura password reset code`,
        htmlContent,
    });
}
