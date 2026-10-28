// Placeholder content: replace every TODO with your real details.
// `stack` / `skills` entries are keys of the icon map in components/TechIcon.astro.
export const site = {
  name: "Giridhar S",
  role: "Software developer", // TODO
  location: "India", // TODO: city, country
  email: "giridhar200402@gmail.com",
  // Words wrapped in [brackets] are highlighted.
  intro:
    "I build web applications end to end, from database to interface, and care about the small details that make software feel right. Currently working with [TypeScript], [React] and [Node.js].", // TODO
  status: "Open to opportunities", // TODO or set to ""
  socials: {
    github: "#", // TODO
    linkedin: "#", // TODO
    x: "", // optional
  },
  experience: [
    {
      role: "Software Developer", // TODO
      company: "Company name",
      period: "2025 — Present",
      meta: "Remote, Full-time",
      current: true,
      summary: "One sentence on what the team does and what you own.",
      points: [
        "A concrete result, ideally with a number.",
        "Something you designed or shipped.",
      ],
      stack: ["typescript", "react", "nodejs"],
    },
    {
      role: "Software Developer Intern", // TODO
      company: "Company name",
      period: "2024 — 2025",
      meta: "On-site, Internship",
      current: false,
      summary: "One sentence on what you worked on.",
      points: ["A concrete result or responsibility."],
      stack: ["python", "postgresql"],
    },
  ],
  skills: [
    "typescript", "javascript", "python", "java",
    "react", "nextjs", "astro", "tailwind", "html", "css",
    "nodejs", "fastapi", "postgresql", "mongodb", "mysql",
    "docker", "git", "github", "linux", "figma",
  ], // TODO
  projects: [
    {
      title: "Project one", // TODO
      summary: "One or two sentences on the problem it solves and the result.",
      href: "#",
      repo: "#",
      image: "", // e.g. "/projects/one.png" in public/
      stack: ["nextjs", "react", "tailwind"],
    },
    {
      title: "Project two", // TODO
      summary: "One or two sentences on the problem it solves and the result.",
      href: "#",
      repo: "#",
      image: "",
      stack: ["python", "fastapi", "postgresql"],
    },
  ],
};
