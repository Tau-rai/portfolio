import { useEffect, useRef, useState, type ReactNode } from "react";
import { certifications, contact, projects, skillCategories, skills } from "@/data/profile";

type Line = { id: number; kind: "input" | "output"; content: ReactNode };

const prompt = "taurai@jhb:~$";

const commandList = ["help", "whoami", "skills", "projects", "resume", "certs", "contact", "clear"];

const responses: Record<string, () => ReactNode> = {
  help: () => (
    <>
      Available commands:{" "}
      {commandList.map((command) => <span key={command} className="term__cmd">{command} </span>)}
    </>
  ),
  whoami: () => "Taurai Masaire — full-stack developer & certified cloud engineer. Secure, scalable, intelligent systems.",
  skills: () =>
    skillCategories.map((category) => (
      <div key={category}>
        <span className="term__key">{category.padEnd(15, " ")}</span>
        {skills.filter((skill) => skill.category === category).map((skill) => skill.name).join(" · ")}
      </div>
    )),
  projects: () =>
    projects.map((project) => (
      <div key={project.slug}>
        <span className="term__key">{project.name.padEnd(20, " ")}</span>
        <a href={project.url} target="_blank" rel="noreferrer">{new URL(project.url).host}</a>
      </div>
    )),
  resume: () => (
    <>
      One-page résumé:{" "}
      <a href={contact.resume} target="_blank" rel="noreferrer">view</a> ·{" "}
      <a href={contact.resume} download>download PDF</a>
    </>
  ),
  certs: () => certifications.map((cert) => <div key={cert.name}>✓ {cert.name} <span className="term__dim">— {cert.issuer}</span></div>),
  contact: () => (
    <>
      <div><span className="term__key">email     </span><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
      <div><span className="term__key">linkedin  </span><a href={contact.linkedin} target="_blank" rel="noreferrer">in/taurai-masaire</a></div>
      <div><span className="term__key">github    </span><a href={contact.github} target="_blank" rel="noreferrer">tau-rai</a></div>
    </>
  ),
  "sudo hire taurai": () => <span className="term__ok">Permission granted ✓ — let's talk: {contact.email}</span>,
};

export const Terminal = () => {
  const [lines, setLines] = useState<Line[]>([
    { id: 0, kind: "output", content: <>Welcome! Type <span className="term__cmd">help</span> to explore — try <span className="term__cmd">skills</span> or <span className="term__cmd">projects</span>.</> },
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const nextId = useRef(1);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  const run = (raw: string) => {
    const command = raw.trim().toLowerCase();
    if (command === "clear") {
      setLines([]);
      return;
    }
    const respond = responses[command];
    const output = command === "" ? null : respond ? respond() : <>command not found: {raw.trim()} — try <span className="term__cmd">help</span></>;
    setLines((current) => [
      ...current,
      { id: nextId.current++, kind: "input", content: raw },
      ...(output ? [{ id: nextId.current++, kind: "output" as const, content: output }] : []),
    ]);
    if (command) setHistory((current) => [raw, ...current].slice(0, 20));
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      run(value);
      setValue("");
      setHistoryIndex(-1);
    } else if (event.key === "ArrowUp" && history.length) {
      event.preventDefault();
      const index = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(index);
      setValue(history[index]);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const index = Math.max(historyIndex - 1, -1);
      setHistoryIndex(index);
      setValue(index === -1 ? "" : history[index]);
    } else if (event.key === "Tab" && value) {
      const match = commandList.find((command) => command.startsWith(value.toLowerCase()));
      if (match) {
        event.preventDefault();
        setValue(match);
      }
    }
  };

  return (
    <div className="term" onClick={() => inputRef.current?.focus({ preventScroll: true })}>
      <div className="term__bar">
        <span /><span /><span />
        <b>zsh — taurai</b>
      </div>
      <div className="term__body" ref={bodyRef} aria-live="polite">
        {lines.map((line) =>
          line.kind === "input" ? (
            <div key={line.id} className="term__line"><span className="term__prompt">{prompt}</span> {line.content}</div>
          ) : (
            <div key={line.id} className="term__out">{line.content}</div>
          ),
        )}
        <label className="term__line term__input-row">
          <span className="term__prompt">{prompt}</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Terminal command"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </label>
      </div>
      <div className="term__quick">
        {commandList.slice(1, 7).map((command) => (
          <button type="button" key={command} onClick={(event) => { event.stopPropagation(); run(command); }}>
            {command}
          </button>
        ))}
      </div>
    </div>
  );
};
