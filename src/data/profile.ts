export const contact = {
  name: "Taurai Masaire",
  email: "taumasaire@gmail.com",
  linkedin: "https://www.linkedin.com/in/taurai-masaire",
  github: "https://github.com/tau-rai",
  location: "Johannesburg, South Africa",
  timeZone: "Africa/Johannesburg",
  resume: "/taurai-masaire-resume.pdf",
};

export const heroWords = ["secure", "scalable", "intelligent", "cloud-native"];

export type Project = {
  slug: string;
  name: string;
  category: string;
  region: string;
  summary: string;
  highlights: string[];
  stack: string[];
  url: string;
  image: string;
  brand: string;
};

export const projects: Project[] = [
  {
    slug: "jamii",
    name: "Jamii Events",
    category: "Event ticketing marketplace",
    region: "South Africa & Zimbabwe",
    summary:
      "A marketplace to discover, create and sell tickets for concerts, festivals, sport and the arts — with search, categories and a full checkout flow.",
    highlights: ["Ticket sales", "Event creation", "Cart & checkout", "Search"],
    stack: ["Go (Gin)", "MySQL", "Redis", "React", "TypeScript", "PWA", "Expo staff app", "Yoco & Paynow", "Docker", "Nginx", "Google Cloud"],
    url: "https://jamiievents.co.za/",
    image: "/projects/jamii.webp",
    brand: "#ff6a33",
  },
  {
    slug: "verifiedcare",
    name: "VerifiedCare",
    category: "AI compliance platform",
    region: "United Kingdom",
    summary:
      "An AI policy assistant that turns a care provider's policies into instant, cited answers and keeps teams CQC-ready — installable as a PWA.",
    highlights: ["AI assistant", "Cited answers", "Compliance scoring", "PWA"],
    stack: ["Python (FastAPI)", "PostgreSQL + pgvector", "RAG (Gemini)", "Vue 3", "PWA + Web Push", "Expo mobile", "Stripe", "Nginx", "Oracle Cloud"],
    url: "https://verifiedcaresolutions.co.uk/",
    image: "/projects/verifiedcare.webp",
    brand: "#d4b24c",
  },
  {
    slug: "equipped",
    name: "Equipped Solutions",
    category: "Digital agency",
    region: "South Africa",
    summary:
      "A full revamp of the agency's site — faster, sharper and SEO-ready — which I also host and maintain for high availability.",
    highlights: ["Site revamp", "Hosting & uptime", "SEO", "Performance"],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "React Query", "Apache"],
    url: "https://equippedsolutions.co.za/",
    image: "/projects/equipped.webp",
    brand: "#facc15",
  },
  {
    slug: "dmu",
    name: "Dr Malinga-Ubomba",
    category: "Specialist healthcare",
    region: "South Africa",
    summary:
      "A warm, considered home online for a specialist obstetrician & gynaecologist, built around making it easy to request a consultation.",
    highlights: ["Consultation requests", "Services", "Responsive", "Accessible"],
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Prerendering + sitemap", "PHP API", "LiteSpeed"],
    url: "https://drmalingaubomba.co.za/",
    image: "/projects/dmu.webp",
    brand: "#c9a545",
  },
];

export type SkillCategory = "Backend" | "Frontend" | "Cloud & DevOps" | "AI" | "Data";

export const skillCategories: SkillCategory[] = ["Backend", "Frontend", "Cloud & DevOps", "AI", "Data"];

export const skills: { name: string; category: SkillCategory }[] = [
  { name: "Go", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Microservices", category: "Backend" },
  { name: "Payments", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "PWA", category: "Frontend" },
  { name: "AWS", category: "Cloud & DevOps" },
  { name: "Google Cloud", category: "Cloud & DevOps" },
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "CI/CD", category: "Cloud & DevOps" },
  { name: "Nginx", category: "Cloud & DevOps" },
  { name: "Linux", category: "Cloud & DevOps" },
  { name: "Cloud Security", category: "Cloud & DevOps" },
  { name: "Agentic AI", category: "AI" },
  { name: "MCP tools", category: "AI" },
  { name: "AI integration", category: "AI" },
  { name: "PostgreSQL", category: "Data" },
  { name: "MySQL", category: "Data" },
  { name: "MongoDB", category: "Data" },
  { name: "Data analysis", category: "Data" },
];

export const capabilities = [
  {
    title: "Backend & architecture",
    body: "Microservices, RESTful API design and high-performance systems in Go, Node.js and Python.",
  },
  {
    title: "Cloud-native delivery",
    body: "AWS, GCP, Docker and CI/CD pipelines for seamless deployment and scale — secure by default.",
  },
  {
    title: "Agentic AI & MCP",
    body: "Agentic workflows and MCP tool integrations that let AI act on real systems — plus production features like cited policy assistants.",
  },
  {
    title: "Product frontends",
    body: "Responsive, accessible interfaces in React, Vue and Angular that people enjoy using.",
  },
];

export const certifications = [
  { name: "Associate Cloud Engineer", issuer: "Google Cloud" },
  { name: "Data Analyst Associate", issuer: "Microsoft Certified" },
];

export const education = [
  { school: "ALX Africa · Holberton School", course: "Software Engineering", period: "2023 — 2024" },
  { school: "National University of Science & Technology", course: "BCom, Business Management", period: "2010 — 2014" },
];


export const sections = [
  { id: "home", label: "Home" },
  { id: "stack", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "resume", label: "Résumé" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];
