import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ValidationError } from "yup";
import { CONTACT_EMAIL } from "@/lib/utils/constants";
import { schema } from "@/app/contact-us/schema";

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.RESEND_TO_EMAIL ?? CONTACT_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json(
      {
        error:
          "Email service is not configured. Missing RESEND_API_KEY or RESEND_FROM_EMAIL.",
      },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(resendApiKey);
    const body = await request.json();
    const data = await schema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    const subject = `New contact request from ${data.name} (${data.company})`;
    const services = data.service.join(", ");
    const text = [
      "New contact form submission",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company}`,
      `Services: ${services}`,
      "",
      "Message:",
      data.message,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject,
      text,
    });

    if (error) {
      return NextResponse.json(
        {
          error: error.message ?? "Failed to send email via Resend.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json(
        { error: error.errors[0] ?? "Invalid form data." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Unexpected server error while sending email." },
      { status: 500 }
    );
  }
}
