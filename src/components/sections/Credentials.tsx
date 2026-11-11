import { BadgeCheck, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/profile";

export const Credentials = () => (
  <section className="section section-wrap" id="credentials">
    <header className="section-head" data-reveal>
      <p className="eyebrow"><span>03</span> Credentials</p>
      <h2>Certified, <em>and still learning.</em></h2>
    </header>

    <div className="credentials">
      {certifications.map((cert, index) => (
        <article
          key={cert.name}
          className="credential credential--featured card"
          data-reveal
          style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
        >
          <BadgeCheck size={26} className="credential__icon" />
          <p className="credential__issuer">{cert.issuer}</p>
          <h3>{cert.name}</h3>
        </article>
      ))}

      <article className="credential card" data-reveal>
        <GraduationCap size={26} className="credential__icon" />
        <p className="credential__issuer">Education</p>
        <ul className="credential__list">
          {education.map((item) => (
            <li key={item.school}>
              <b>{item.course}</b>
              <span>{item.school} · {item.period}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);
