import { error } from "console";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

try {
  const body = await req.json();

  const name = body.name || "";
  const email = body.email || "";
  const message = body.message || "";
  const selectedPackage = body.package || "Not specified";

  if (!name || !email || !message) {
    return Response.json(
      { error: "Missing required fields" },
      { status: 400 }

    );
  }

  await resend.emails.send({
    from: "contact@frontcraftdev.com",
    to: "contact.frontcraft.dev@gmail.com",
    subject: `New Project Request - ${selectedPackage}`,
    html: `
      <h2>New Client Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Package:</strong> ${selectedPackage}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  return Response.json({ success: true});
} catch (error) {
  console.error("ERROR:", error);
  return Response.json(
    { error: "Something went wrong"},

  );
}
}
