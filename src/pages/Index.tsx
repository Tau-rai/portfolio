import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";


const Index = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { toast } = useToast();
    toast({
      id: "contact-toast",
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
       {/* Hero Section */}
       <section className="min-h-screen flex items-center justify-center px-4 pt-16 md:pt-0 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transforming Ideas into Scalable Solutions</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Hi, I'm Taurai — a Software Developer passionate about building robust infrastructure and elegant APIs.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            With expertise in Full Stack Development, DevOps and distributed systems, I help companies scale their applications and automate their workflows.
          </p>
          <Button 
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} 
            className="bg-primary hover:bg-primary/90"
          >
            View My Work
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 animate-fade-in">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              As a Software Engineer with a focus on backend systems, I specialize in designing and implementing 
              high-performance APIs and microservices. My experience spans from startups to enterprise solutions,
              always prioritizing scalability, security, and code quality.
            </p>
            <p>
              I leverage modern technologies like Django, Node.js, and Docker to build robust systems, 
              while implementing best practices in CI/CD with Jenkins and GitHub Actions. My expertise extends to 
              database optimization across MySQL, PostgreSQL, and MongoDB, ensuring efficient data management at scale.
            </p>
            <p>
              Beyond coding, I'm an avid chess player and outdoor enthusiast. I bring the same strategic thinking 
              and problem-solving approach from chess to my software engineering projects.</p>
          </div>
        </div>
      </section>


       {/* Projects Section */}
       <section id="projects" className="py-20 bg-muted/50 animate-fade-in">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">ByteSerenity</h3>
              <p className="text-muted-foreground mb-4">
                A full-stack blogging platform built using Python Flask, Jinja Templates, MySQL 
                with Javascript & JQuery, TailwindCSS on the frontend.
              </p>
              <Button variant="outline" onClick={() => window.open('https://www.byteserenity.social', '_blank')}>
                View Project
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">PennyPillar</h3>
              <p className="text-muted-foreground mb-4">
                A personal finance management tool built with Django, MySQL and React for tracking 
                income, expenses, and goals.
              </p>
              <Button variant="outline" onClick={() => window.open('https://pennypillar.taurai.tech', '_blank')}>
                View Project
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">PennyPillarAPI</h3>
              <p className="text-muted-foreground mb-4">
                The backend API built with Django REST Framework, featuring user authentication, 
                transaction management, and analytics.
              </p>
              <Button variant="outline" onClick={() => window.open('https://taurai.tech/swagger', '_blank')}>
                View Project
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Equipped Solutions</h3>
              <p className="text-muted-foreground mb-4">
                A modern WordPress website featuring responsive design, custom themes, and integrated
                booking system for a professional services company.
              </p>
              <Button variant="outline" onClick={() => window.open('https://equippedsolutions.co.za', '_blank')}>
                View Project
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 bg-muted/30 animate-fade-in">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Tech Stack</h2>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-8 items-center justify-center">
            <img src="https://skillicons.dev/icons?i=python" alt="Python" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=django" alt="Django" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=flask" alt="Flask" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=express" alt="Express" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=html" alt="HTML" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=css" alt="CSS" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=tailwindcss" alt="Tailwind CSS" className="w-12 h-12" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-8 items-center justify-center mt-8">
            <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=postgres" alt="PostgreSQL" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=docker" alt="Docker" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=nginx" alt="Nginx" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=bash" alt="Bash" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=git" alt="Git" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=linux" alt="Linux" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=vim" alt="Vim" className="w-12 h-12" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center mt-8">
            <img src="https://skillicons.dev/icons?i=vscode" alt="VS Code" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=redis" alt="Redis" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=wordpress" alt="WordPress" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="w-12 h-12" />
            <img src="https://skillicons.dev/icons?i=heroku" alt="Heroku" className="w-12 h-12" />
          </div>
        </div>
      </section>


      {/* Blog Section */}
      <section id="blog" className="py-20 animate-fade-in">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-2">Backend Development</p>
              <h3 className="text-xl font-bold mb-2">Building Scalable APIs with Django</h3>
              <p className="text-muted-foreground mb-4">
                Exploring best practices for building performant and maintainable APIs using Django REST Framework.
              </p>
              <Button 
                variant="link" 
                className="p-0"
                onClick={() => window.open('https://medium.com/@taumasaire/building-scalable-apis-with-django-rest-framework-d1fb6d7dd8d0', '_blank')}
              >
                Read More →
              </Button>
            </Card>
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-2">Full Stack Development</p>
              <h3 className="text-xl font-bold mb-2">Building PennyPillar: A Smarter Finance Tracker</h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive guide to building a personal finance management application with modern technologies.
              </p>
              <Button 
                variant="link" 
                className="p-0"
                onClick={() => window.open('https://medium.com/@taumasaire/building-pennypillar-a-smarter-finance-tracker-894ab150ad2b', '_blank')}
              >
                Read More →
              </Button>
            </Card>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50 animate-fade-in">
        <div className="container max-w-xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="icon" onClick={() => window.open('https://twitter.com/tau_rai', '_blank')}>
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => window.open('https://linkedin.com/m/taurai-masaire', '_blank')}>
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => window.open('mailto:taumasaire@gmail.com', '_blank')}>
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => window.open('https://github.com/tau-rai', '_blank')}>
              <Github className="h-5 w-5" />
            </Button>
          </div>
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" className="min-h-[150px]" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
