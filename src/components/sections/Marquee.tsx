import { skills } from "@/data/profile";

export const Marquee = () => (
  <div className="marquee" aria-label="Technologies I work with">
    {[0, 1].map((copy) => (
      <ul className="marquee__track" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
        {skills.map((skill) => (
          <li key={skill.name}>
            {skill.name}
            <span aria-hidden="true">✦</span>
          </li>
        ))}
      </ul>
    ))}
  </div>
);
