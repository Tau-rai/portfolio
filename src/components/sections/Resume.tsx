import { ArrowUpRight, Download } from "lucide-react";
import { contact } from "@/data/profile";

export const Resume = () => (
  <section className="section section-wrap" id="resume">
    <div className="resume-cta" data-reveal>
      <div>
        <p className="eyebrow"><span>✦</span> Résumé</p>
        <h2>The full story, <em>on one page.</em></h2>
        <p>Experience, skills, certifications and education — everything in a single, printable PDF.</p>
      </div>
      <div className="resume-cta__actions">
        <a className="button button--primary" href={contact.resume} target="_blank" rel="noreferrer">
          View résumé <ArrowUpRight size={16} />
        </a>
        <a className="button button--ghost" href={contact.resume} download>
          <Download size={16} /> Download PDF
        </a>
      </div>
    </div>
  </section>
);
