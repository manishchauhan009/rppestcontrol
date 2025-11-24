// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, location, service, message } = body;

    // Basic validation
    if (!name || !phone) {
      return new Response(
        JSON.stringify({ ok: false, error: "Name and phone are required." }),
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

    // Email content
    const html = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #111827;">
        <h2>New Pest Control Enquiry</h2>
        <p>A new enquiry has been submitted from the website.</p>
        <hr />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location / Area:</strong> ${location || "Not provided"}</p>
        <p><strong>Pest Problem:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong><br/>${message || "No additional message"}</p>
        <hr />
        <p style="font-size: 12px; color: #6b7280;">
          This email was generated from the R.P. Pest Control website contact form.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER,
      to: toEmail,
      subject: `New Pest Control Enquiry - ${name}`,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Something went wrong while sending your message.",
      }),
      { status: 500 }
    );
  }
}
