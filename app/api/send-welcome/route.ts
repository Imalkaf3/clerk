// app/api/send-welcome/route.ts
import { NextResponse } from "next/server";
import { resend } from "@/lib/resend"; // <- you must create this file

export async function POST(req: Request) {
  const body = await req.json();
  const { email, name } = body;

  try {
    await resend.emails.send({
      from: "MyApp <onboarding@resend.dev>",
      to: email,
      subject: "🎉 Welcome to Our service!",
      html: `<h1>Hello ${name || "there"} 👋</h1><p>Thanks for signing up!</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
