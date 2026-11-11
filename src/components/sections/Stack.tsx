import { useState } from "react";
import { BrainCircuit, Cloud, LayoutTemplate, Server } from "lucide-react";
import { capabilities, skillCategories, skills, type SkillCategory } from "@/data/profile";
import { Terminal } from "@/components/Terminal";

const capabilityIcons = [Server, Cloud, BrainCircuit, LayoutTemplate];

export const Stack = () => {
  const [filter, setFilter] = useState<SkillCategory | "All">("All");

  return (
    <section className="section section-wrap" id="stack">
      <header className="section-head" data-reveal>
        <p className="eyebrow"><span>01</span> Stack & capabilities</p>
        <h2>The right tool, <em>every layer.</em></h2>
        <p className="section-head__note">From API design to the cloud it runs on, and the AI built into it.</p>
      </header>

      <div className="capabilities">
        {capabilities.map((capability, index) => {
          const Icon = capabilityIcons[index];
          return (
            <article
              key={capability.title}
              className="capability card"
              data-reveal
              style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}
            >
              <span className="capability__icon"><Icon size={20} /></span>
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
            </article>
          );
        })}
      </div>

      <div className="stack-explorer" data-reveal>
        <div className="stack-explorer__skills">
          <div className="filters" role="group" aria-label="Filter skills">
            {(["All", ...skillCategories] as const).map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={filter === category}
                className="filter"
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <ul className="skill-cloud">
            {skills.map((skill) => (
              <li key={skill.name} className={filter === "All" || filter === skill.category ? "is-match" : "is-dim"}>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <Terminal />
      </div>
    </section>
  );
};
