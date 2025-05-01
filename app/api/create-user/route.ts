import { currentUser } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/mongoose";
import { User } from "@/models/User";

export async function POST() {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return new Response("Unauthorized", { status: 401 });
  }

  await connectDB();

  const existing = await User.findOne({ clerkId: clerkUser.id });

  if (!existing) {
    // Create user in MongoDB
    const newUser = await User.create({
      clerkId: clerkUser.id,
      email: clerkUser.emailAddresses[0].emailAddress,
      name: `${clerkUser.firstName} ${clerkUser.lastName}`,
    });

    // ✅ Send welcome email
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-welcome`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: newUser.email,
        name: newUser.name,
      }),
    });
  }

  return new Response("OK", { status: 200 });
}
