import nodeMailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const { name, email, phone, message } = await req.json();

    try {
        const transporter = nodeMailer.createTransport({
            service : "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Contact Message",
            html: `
                <h3>New Contact Form Submission</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>Message:</b> ${message}</p>
            `,
        });
        return NextResponse.json({ success: true });
    } catch(error) {
        return NextResponse.json({ success:false })
    }
}