import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, contactNumber, message } = await req.json();

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
      to: "info@launchurplatform.com", // send to your own email
      replyTo: email || "info@launchurplatform.com", // fallback if no email provided
      subject: `[Website Contact] New Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email || "Not Provided"}
        Contact Number: ${contactNumber}
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
