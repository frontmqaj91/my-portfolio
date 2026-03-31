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
    from: "FrontCraft <contact@frontcraftdev.com>",
    to: "contact.frontcraft.dev@gmail.com",
    replyTo: email,
    subject: `New Project Request - ${selectedPackage}`,
    html: `
      <h2>New Client Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Package:</strong> ${selectedPackage}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  await resend.emails.send({
    from: "FrontCraft <contact@frontcraftdev.com>",
    to: email,
    subject: "We received your request ✅",
    html: `
    <div style="font-family: Arial;">
      <h2>Thank you for reaching out!</h2>
      <p>Hi ${name}, 👋</p>
      <p>Thanks for contacting <strong>FrontCraft</strong>.</p>
      <p>We received your message and will reply within 24 hours.</p>

      <hr/>

      <p><strong>Your message:</strong></p>
      <p>${message}</p>

      <hr/>

      <p>Best regards,<br/>FrontCraft Team</p>
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
