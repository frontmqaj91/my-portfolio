import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // ✅ تحقق من ENV
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("ENV NOT FOUND");
    return Response.json({ error: "ENV NOT FOUND" }, { status: 500 });
  }

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
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ إعداد SMTP الصحيح
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔥 أهم خطوة (تشخيص)
    await transporter.verify();
    console.log("SMTP READY");

    // ✅ إرسال الإيميل
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Project Request - ${selectedPackage}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Package:</strong> ${selectedPackage}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("EMAIL SENT");

    return Response.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("FINAL ERROR:", err);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}