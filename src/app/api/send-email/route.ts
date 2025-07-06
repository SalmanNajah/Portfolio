import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { userEmail } = await req.json();

    if (!userEmail) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    try {
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'salmancodess@gmail.com',
            subject: 'New Contact via Portfolio',
            text: `New contact: ${userEmail}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}