import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/profile";
import { useReducedMotion } from "@/hooks/use-motion";

const maxTilt = 6;

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const reducedMotion = useReducedMotion();
  const host = new URL(project.url).host;

  const onPointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--rx", `${(-y * maxTilt).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--ry", `${(x * maxTilt).toFixed(2)}deg`);
  };

  const onPointerLeave = (event: React.PointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      className={`project project--${index === 0 ? "featured" : "standard"}`}
      data-reveal
      style={{ "--brand": project.brand, "--delay": `${index * 80}ms` } as React.CSSProperties}
    >
      <a
        className="project__link"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        aria-label={`${project.name} — ${project.category}. Opens ${host} in a new tab`}
      >
        <div className="project__frame">
          <div className="project__chrome" aria-hidden="true">
            <span /><span /><span />
            <b>{host}</b>
          </div>
          <img src={project.image} alt={`Home page of ${project.name}`} loading="lazy" decoding="async" width={1200} height={750} />
        </div>
        <div className="project__body">
          <div className="project__meta">
            <span className="project__index">0{index + 1}</span>
            <span>{project.category}</span>
            <span className="project__region">{project.region}</span>
          </div>
          <div className="project__title-row">
            <h3>{project.name}</h3>
            <span className="project__arrow" aria-hidden="true"><ArrowUpRight size={20} /></span>
          </div>
          <p>{project.summary}</p>
          <ul className="project__tags">
            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          <div className="project__stack">
            <span>Stack</span>
            <p>{project.stack.join(" · ")}</p>
          </div>
          <div className="project__ownership" aria-label="Designed, built, deployed and maintained end to end">
            <span>Design</span><span>Build</span><span>Deploy</span><span>Maintain</span>
          </div>
        </div>
      </a>
    </article>
  );
};

export const Work = () => (
  <section className="section section-wrap" id="work">
    <header className="section-head" data-reveal>
      <p className="eyebrow"><span>02</span> Selected work</p>
      <h2>Live products, <em>real users.</em></h2>
      <p className="section-head__note">
        A selection of live products I've taken from idea to production — designed, built, deployed and
        maintained end to end.
      </p>
    </header>
    <div className="projects">
      {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
    </div>
  </section>
);
