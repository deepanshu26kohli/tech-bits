import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false, // true for 465
      auth: {
        user: "info@launchurplatform.com",
        pass: "Guneetk@404",
      },
    });

    await transporter.sendMail({
      from: `"${name}" <info@launchurplatform.com>`,
      to:  "info@launchurplatform.com", // send to your own email
      replyTo: email, // so you can reply directly to sender
      subject: `[Website Contact] ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
