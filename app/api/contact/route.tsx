import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message, company } = body;

    // Honeypot (مهم ضد السبام)
    if (company) {
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.OUTLOOK_EMAIL,
        pass: process.env.OUTLOOK_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.OUTLOOK_EMAIL}>`,
      to: process.env.OUTLOOK_EMAIL,
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Message from Website</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
