import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { CommandPalette } from "@/components/CommandPalette";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Work } from "@/components/sections/Work";
import { Resume } from "@/components/sections/Resume";
import { Stack } from "@/components/sections/Stack";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";
import { useRevealOnScroll } from "@/hooks/use-motion";

const Index = () => {
  const [paletteOpen, setPaletteOpen] = useState(false);
  useRevealOnScroll();

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
      <main id="main">
        <Hero />
        <Marquee />
        <Stack />
        <Work />
        <Resume />
        <Credentials />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
