// src/components/Footer.tsx

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t bg-background">
      <div className="container text-center text-sm text-muted-foreground">
        <p>© {currentYear} Taurai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;