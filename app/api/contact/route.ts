import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("ENV:", process.env.EMAIL_USER);
    console.log("BODY:", body);

    const name = body.name || "";
    const email = body.email || "";
    const message = body.message || "";
    const selectedPackage = body.package || "Not specified";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
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