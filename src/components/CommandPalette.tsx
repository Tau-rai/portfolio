import { useEffect, useMemo, useRef, useState, type ComponentType } from "react";
import { ArrowUpRight, CornerDownLeft, Copy, Download, FileText, Github, Hash, Linkedin, Moon, Search } from "lucide-react";
import { contact, projects, sections } from "@/data/profile";
import { copyToClipboard } from "@/lib/clipboard";
import { useTheme } from "@/hooks/use-theme";

type Command = {
  id: string;
  label: string;
  group: string;
  icon: ComponentType<{ size?: number }>;
  run: () => void;
};

const openExternal = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

type Props = { open: boolean; onOpenChange: (open: boolean) => void };

export const CommandPalette = ({ open, onOpenChange }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const { toggleTheme } = useTheme();

  const commands = useMemo<Command[]>(
    () => [
      ...sections.map((section) => ({
        id: `go-${section.id}`,
        label: `Go to ${section.label}`,
        group: "Navigate",
        icon: Hash,
        run: () => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" }),
      })),
      ...projects.map((project) => ({
        id: `project-${project.slug}`,
        label: `Open ${project.name}`,
        group: "Projects",
        icon: ArrowUpRight,
        run: () => openExternal(project.url),
      })),
      { id: "copy-email", label: "Copy email address", group: "Contact", icon: Copy, run: () => copyToClipboard(contact.email, "Email") },
      { id: "linkedin", label: "Open LinkedIn", group: "Contact", icon: Linkedin, run: () => openExternal(contact.linkedin) },
      { id: "github", label: "Open GitHub", group: "Contact", icon: Github, run: () => openExternal(contact.github) },
      { id: "resume", label: "View resume", group: "Contact", icon: FileText, run: () => openExternal(contact.resume) },
      {
        id: "download",
        label: "Download resume (PDF)",
        group: "Contact",
        icon: Download,
        run: () => {
          const link = document.createElement("a");
          link.href = contact.resume;
          link.download = "";
          link.click();
        },
      },
      { id: "theme", label: "Toggle light / dark theme", group: "Preferences", icon: Moon, run: toggleTheme },
    ],
    [toggleTheme],
  );

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    return term ? commands.filter((command) => `${command.label} ${command.group}`.toLowerCase().includes(term)) : commands;
  }, [commands, query]);

  useEffect(() => {
    const dialog = dialogRef.current!;
    if (open && !dialog.open) {
      setQuery("");
      setSelected(0);
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  useEffect(() => {
    document.getElementById(`cmd-${results[selected]?.id}`)?.scrollIntoView({ block: "nearest" });
  }, [selected, results]);

  const execute = (command: Command | undefined) => {
    if (!command) return;
    onOpenChange(false);
    command.run();
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelected((index) => (index + 1) % Math.max(results.length, 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelected((index) => (index - 1 + results.length) % Math.max(results.length, 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      execute(results[selected]);
    }
  };

  let lastGroup = "";

  return (
    <dialog
      ref={dialogRef}
      className="palette"
      aria-label="Command menu"
      onClose={() => onOpenChange(false)}
      onClick={(event) => event.target === dialogRef.current && onOpenChange(false)}
    >
      <div className="palette__panel">
        <div className="palette__search">
          <Search size={17} />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelected(0);
            }}
            onKeyDown={onInputKeyDown}
            placeholder="Type a command or search…"
            aria-label="Search commands"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[selected] ? `cmd-${results[selected].id}` : undefined}
          />
          <kbd>esc</kbd>
        </div>
        <ul className="palette__list" id="palette-list" role="listbox">
          {results.length === 0 && <li className="palette__empty">No results for “{query}”</li>}
          {results.map((command, index) => {
            const showGroup = command.group !== lastGroup;
            lastGroup = command.group;
            const Icon = command.icon;
            return (
              <li key={command.id} role="presentation">
                {showGroup && <p className="palette__group">{command.group}</p>}
                <div
                  id={`cmd-${command.id}`}
                  role="option"
                  aria-selected={index === selected}
                  className="palette__item"
                  onPointerMove={() => setSelected(index)}
                  onClick={() => execute(command)}
                >
                  <Icon size={16} />
                  <span>{command.label}</span>
                  {index === selected && <CornerDownLeft size={14} className="palette__enter" />}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="palette__footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> select</span>
          <span><kbd>⌘</kbd><kbd>K</kbd> toggle</span>
        </div>
      </div>
    </dialog>
  );
};
