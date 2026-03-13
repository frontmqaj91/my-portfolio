import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, package: selectedPackage } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Project Request - ${selectedPackage || "General Inquiry"}`,
      html: `
        <h2>New Client Request</h2>
        <p><strong>Selected Package:</strong> ${selectedPackage || "Not specified"}
    </p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Email failed" }, { status: 500 });
  }
}