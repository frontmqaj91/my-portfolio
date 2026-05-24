import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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

    try {
      const adminEmail = await transporter.sendMail({
        from: `"FrontCraft" <${process.env.EMAIL_USER}>`,
        to: "contact.frontcraft.dev@gmail.com",
        replyTo: email,
        subject: `New - ${selectedPackage} Request from ${name}`,
        html: `
          <h2>New Client Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Package:</strong> ${selectedPackage}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      console.log("ADMIN SENT:", adminEmail.messageId);
    } catch (error) {
      console.error("ADMIN ERROR:", error);
    }

    try {
      const clientEmail = await transporter.sendMail({
        from: `"FrontCraft" <${process.env.EMAIL_USER}>`,
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
        </div>
        `,
      });

      console.log("CLIENT SENT:", clientEmail.messageId);
    } catch (error) {
      console.error("CLIENT ERROR:", error);
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("ERROR:", error);
    return Response.json(
      { error: "Something went wrong" },
    );
  }
}
