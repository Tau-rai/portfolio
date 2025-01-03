import ThemeToggle from "./ThemeToggle";

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Taurai Masaire</div>
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className="text-sm hover:text-primary transition-colors"
          >
            Blog
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm hover:text-primary transition-colors"
          >
            Contact
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};