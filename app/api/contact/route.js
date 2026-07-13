import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/content";

const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.start > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { start: now, count: 1 });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

function sanitize(value) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .trim();
}

function createTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function POST(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Too many requests. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const body = await request.json();

    if (body.website) {
      return Response.json({ success: true });
    }

    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const phone = sanitize(body.phone);
    const company = sanitize(body.company);
    const service = sanitize(body.service);
    const budget = sanitize(body.budget);
    const message = sanitize(body.message);

    if (!name || name.length < 2) {
      return Response.json({ error: "Please provide your name." }, { status: 400 });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!message || message.length < 10) {
      return Response.json(
        { error: "Please provide more details about your project." },
        { status: 400 }
      );
    }

    const transport = createTransport();

    if (!transport) {
      console.error("SMTP credentials are not configured.");
      return Response.json(
        { error: "Email service is temporarily unavailable. Please email us directly." },
        { status: 503 }
      );
    }

    const to = process.env.CONTACT_EMAIL || siteConfig.email;
    const from = process.env.SMTP_FROM || `"AEDEVS Contact" <${process.env.SMTP_USER}>`;

    const html = `
      <h2>New inquiry from ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      <p><strong>Service:</strong> ${service || "Not specified"}</p>
      <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    await transport.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[AEDEVS] New inquiry from ${name} — ${service || "General"}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone && `Phone: ${phone}`,
        company && `Company: ${company}`,
        `Service: ${service}`,
        `Budget: ${budget}`,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to send your message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
