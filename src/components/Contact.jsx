import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Send, CheckCircle2, XCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "./BrandIcons";
import { profile, socials } from "../data";
import Reveal from "./Reveal";

const SOCIAL_LINKS = [
  { key: "github", icon: GithubIcon, url: socials.github },
  { key: "linkedin", icon: LinkedinIcon, url: socials.linkedin },
  { key: "facebook", icon: FacebookIcon, url: socials.facebook },
  { key: "instagram", icon: InstagramIcon, url: socials.instagram },
];

// EmailJS credentials — see the setup steps shared alongside this file.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [toast, setToast] = useState(null); // { type: "success" | "error", message: string }

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  // Auto-dismiss the toast after a few seconds.
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 4500);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error(
        "Missing EmailJS env vars. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY."
      );
      setStatus("error");
      setToast({ type: "error", message: "Contact form isn't configured yet. Please try again later." });
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: profile.email, // sulemanpatras2@gmail.com
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setToast({ type: "success", message: "Message sent — I'll reply soon." });
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
      setToast({
        type: "error",
        message: "Something went wrong sending your message. Please try again shortly.",
      });
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <div className="eyebrow">
            <span className="method">POST</span> /contact
          </div>
          <h2 className="section-title">
            Send a request, <span>get a real reply.</span>
          </h2>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-form-panel" delay={80}>
            <div className="hero-panel-bar">
              <div className="hero-panel-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="mono hero-panel-label">request body</span>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="mono">
                name
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                />
              </label>
              <label className="mono">
                email
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                />
              </label>
              <label className="mono">
                message
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="What are you building?"
                />
              </label>
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : "Send message"}
                {status !== "sending" && status !== "sent" && <Send size={14} />}
              </button>
            </form>
          </Reveal>

          <Reveal className="contact-info-panel" delay={150}>
            <div className="hero-panel-bar">
              <div className="hero-panel-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="mono hero-panel-label">response — 200 OK</span>
            </div>
            <div className="contact-info-body">
              <a className="contact-info-row" href={`mailto:${profile.email}`}>
                <Mail size={16} />
                <span>{profile.email}</span>
              </a>
              <a className="contact-info-row" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <Phone size={16} />
                <span>{profile.phone}</span>
              </a>

              <div className="contact-socials">
                {SOCIAL_LINKS.map(({ key, icon: Icon, url }) => (
                  <a key={key} href={url} target="_blank" rel="noreferrer" aria-label={key}>
                    <Icon size={17} />
                  </a>
                ))}
              </div>

              <div className="contact-status mono">
                <span className="status-dot pulse" />
                status: {profile.status}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {toast && (
        <div className={`contact-toast contact-toast--${toast.type}`} role="status">
          {toast.type === "success" ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
          <span>{toast.message}</span>
        </div>
      )}
    </section>
  );
}
