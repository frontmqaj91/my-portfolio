import nodemailer from "nodemailer";

export async function POST(req:Request) {
  try {
    let body;

    try {

      body = await req.json();

    } catch (err) {
      console.error("JSON ERROR:", err);
      return Response.json({ error: "Invalid JSON" }, { status: 400 });

      }

      console.log("BODY:", body);

      const name = body.name || "";
      const email = body.email || "";
      const message = body.message || "";
      const selectedPackage = body.package || "Not specified";

   if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 456,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Project Request - ${selectedPackage}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong>
     ${email}</p><p><strong>Package:</strong>
     ${selectedPackage}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    return Response.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (err) {
    console.error("ERROR:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}