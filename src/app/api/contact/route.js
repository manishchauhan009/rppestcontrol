import nodemailer from "nodemailer";
import { google } from "googleapis";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, location, service, message } = body;

    if (!name || !phone) {
      return new Response(
        JSON.stringify({ ok: false, error: "Name and phone are required." }),
        { status: 400 }
      );
    }

    /* ---------------- EMAIL SETUP ---------------- */
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family: Arial, sans-serif">
        <h2>New Pest Control Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location || "Not provided"}</p>
        <p><strong>Pest Problem:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong><br/>${message || "No message"}</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
      subject: `New Pest Control Enquiry - ${name}`,
      html,
    });

    /* ---------------- GOOGLE SHEETS ---------------- */
    // const auth = new google.auth.GoogleAuth({
    //   keyFile: process.env.GOOGLE_KEY_FILE,
    //   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    // });

    // const authClient = await auth.getClient();
    // const sheets = google.sheets({ version: "v4", auth: authClient });
    const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const authClient = await auth.getClient();
const sheets = google.sheets({ version: "v4", auth: authClient });



    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toLocaleString(),
          name,
          phone,
          location || "",
          service || "",
          message || "",
          "Website"
        ]]
      }
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Something went wrong. Please try again.",
      }),
      { status: 500 }
    );
  }
}
