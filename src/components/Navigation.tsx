import { useEffect, useState } from "react";
import { Command, Menu, X } from "lucide-react";
import { sections } from "@/data/profile";
import { useActiveSection } from "@/hooks/use-motion";
import ThemeToggle from "./ThemeToggle";

const sectionIds = sections.map((section) => section.id);
const links = sections.filter((section) => section.id !== "home");

export const Navigation = ({ onOpenPalette }: { onOpenPalette: () => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll-progress", String(max > 0 ? window.scrollY / max : 0));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-nav${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="site-nav__inner">
        <a className="site-nav__brand" href="#home" aria-label="Taurai Masaire, home" onClick={closeMenu}>
          <span className="site-nav__monogram">TM</span>
          <span className="site-nav__name">Taurai Masaire</span>
        </a>

        <nav id="primary-navigation" className="site-nav__links" aria-label="Main navigation">
          {links.map((link) => (
            <a
              href={`#${link.id}`}
              key={link.id}
              onClick={closeMenu}
              className={active === link.id ? "is-active" : undefined}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-nav__actions">
          <button type="button" className="palette-trigger" onClick={onOpenPalette} aria-label="Open command menu" aria-keyshortcuts="Meta+K Control+K">
            <Command size={14} />
            <span>K</span>
          </button>
          <ThemeToggle />
          <a className="button button--primary button--small site-nav__cta" href="#contact">Let's work together</a>
          <button
            className="icon-button site-nav__menu"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};
