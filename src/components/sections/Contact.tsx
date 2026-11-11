import { useEffect, useState } from "react";
import { ArrowUpRight, Copy, Download, Github, Linkedin } from "lucide-react";
import { contact } from "@/data/profile";
import { copyToClipboard } from "@/lib/clipboard";

const LocalTime = () => {
  const format = () =>
    new Intl.DateTimeFormat("en-ZA", { hour: "2-digit", minute: "2-digit", timeZone: contact.timeZone }).format(new Date());
  const [time, setTime] = useState(format);

  useEffect(() => {
    const timer = window.setInterval(() => setTime(format()), 15_000);
    return () => window.clearInterval(timer);
  }, []);

  return <time>{time} SAST</time>;
};

export const Contact = () => (
  <section className="contact" id="contact">
    <div className="section-wrap contact__inner" data-reveal>
      <p className="eyebrow"><span>04</span> Contact</p>
      <h2>
        Have something
        <br />
        worth building<span className="accent">?</span>
      </h2>
      <p className="contact__lead">
        I'm open to full-time roles, freelance builds and interesting problems — especially where cloud, security and AI meet.
      </p>

      <div className="contact__email-row">
        <a className="contact__email" href={`mailto:${contact.email}`}>
          {contact.email} <ArrowUpRight size={22} />
        </a>
        <button type="button" className="icon-button" onClick={() => copyToClipboard(contact.email, "Email")} aria-label="Copy email address" title="Copy email">
          <Copy size={17} />
        </button>
      </div>

      <div className="contact__links">
        <a className="button button--ghost" href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
        <a className="button button--ghost" href={contact.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
        <a className="button button--ghost" href={contact.resume} download><Download size={16} /> Résumé PDF</a>
      </div>
    </div>

    <footer className="footer">
      <div className="section-wrap footer__inner">
        <span>© {new Date().getFullYear()} {contact.name}</span>
        <span className="footer__time"><span className="status-dot" /> Johannesburg · <LocalTime /></span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  </section>
);
