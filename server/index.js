import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  CONTACT_TO,
  CORS_ORIGIN = "https://sulemanpatras.github.io/portfolio/",
  PORT = 4000,
} = process.env;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
  console.error(
    "Missing SMTP config. Copy server/.env.example to server/.env and fill it in."
  );
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: Number(SMTP_PORT) === 465, // true for 465, false for 587/25 (STARTTLS)
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

const app = express();
app.use(express.json());
app.use(cors({ origin: CORS_ORIGIN.split(",").map((o) => o.trim()) }));

// Very small in-memory rate limiter: max 5 submissions / 10 min / IP
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const entry = hits.get(ip) ?? [];
  const recent = entry.filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

app.post("/api/contact", async (req, res) => {
  const ip = req.ip;
  if (rateLimited(ip)) {
    return res.status(429).json({ error: "Too many requests, try again later." });
  }

  const { name, email, message } = req.body ?? {};

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return res.status(400).json({ error: "Please provide a valid name, email, and message." });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
      html: `<p>${message.replace(/\n/g, "<br/>")}</p><p>— ${name} (${email})</p>`,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    res.status(502).json({ error: "Failed to send message. Please try again shortly." });
  }
});

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Contact mail server running on http://localhost:${PORT}`);
});
