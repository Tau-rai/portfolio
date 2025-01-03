import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from "./ThemeToggle";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const NavItems = () => (
    <>
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
        onClick={() => scrollToSection("contact")}
        className="text-sm hover:text-primary transition-colors"
      >
        Contact
      </button>
      <button
        onClick={() => scrollToSection("blog")}
        className="text-sm hover:text-primary transition-colors"
      >
        Blog
      </button>
      <ThemeToggle />
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Taurai Masaire</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavItems />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4 items-start">
              <NavItems />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};