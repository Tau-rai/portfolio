import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { contact, heroWords } from "@/data/profile";
import { useReducedMotion } from "@/hooks/use-motion";
import { NetworkCanvas } from "@/components/NetworkCanvas";

const RotatingWord = () => {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % heroWords.length), 2400);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <span className="rotating-word" aria-live="off">
      <span key={heroWords[index]} className="rotating-word__inner">{heroWords[index]}</span>
    </span>
  );
};

export const Hero = () => (
  <section className="hero" id="home">
    <NetworkCanvas />
    <div className="section-wrap hero__inner">
      <h1 className="hero__title reveal-load" style={{ "--delay": "80ms" } as React.CSSProperties}>
        I engineer <RotatingWord />
        <br />
        software that ships<span className="accent">.</span>
      </h1>

      <p className="hero__lead reveal-load" style={{ "--delay": "160ms" } as React.CSSProperties}>
        I'm <strong>Taurai Masaire</strong> — a full-stack developer and certified cloud engineer. I build
        backends in Go, Node.js and Python, frontends in React, Vue and Angular, and put AI to work in production.
      </p>

      <div className="hero__actions reveal-load" style={{ "--delay": "240ms" } as React.CSSProperties}>
        <a className="button button--primary" href="#work">
          See my work <ArrowDownRight size={17} />
        </a>
        <a className="button button--ghost" href={contact.resume} target="_blank" rel="noreferrer">
          Résumé <ArrowUpRight size={16} />
        </a>
        <span className="hero__location"><MapPin size={14} /> {contact.location}</span>
      </div>

    </div>
  </section>
);
