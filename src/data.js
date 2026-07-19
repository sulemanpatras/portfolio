export const profile = {
  name: "Suleman Patras Khan",
  role: "Full-Stack Developer — Backend Focused",
  location: "Karachi, Pakistan",
  email: "sulemanpatras2@gmail.com",
  phone: "+92 322 1130670",
  status: "available_for_hire",
  stack: ["Laravel", "React", "Next.js", "Node.js", "Python"],
  focus: "AI-powered web applications",
  tagline:
    "I design and build backend systems, then wire them up to AI — chatbots, document auto-fill, smart suggestions — using the Claude, Gemini and GPT APIs.",
  about:
    "I'm a backend-focused full-stack developer working across PHP, Laravel, React.js, Next.js, Node.js and Python. Most of my recent work sits at the intersection of solid backend engineering and applied AI — building chatbots, customer support bots, document upload-to-autofill pipelines, and suggestion engines on top of the Anthropic Claude, Google Gemini and OpenAI APIs. I care about clean APIs, sane database design, and shipping features that actually get used.",
  resumeUrl: "/Suleman_Patras_Khan_Resume.pdf",
  photo: "/suleman.jpg",
};

export const socials = {
  github: "https://github.com/sulemanpatras",
  linkedin: "https://www.linkedin.com/in/suleman-patras-3ab34429b/",
  facebook: "https://www.facebook.com/suleman.patras.605823",
  instagram: "https://www.instagram.com/sulemanpatras02/",
};

export const experience = [
  {
    version: "v3",
    company: "Digital Graphiks",
    role: "Mid-Level Full-Stack Developer (Backend Focused)",
    date: "Dec 2024 — Present",
    status: "deployed",
    live: true,
    points: [
      "Specialized in PHP and Laravel for backend, with React.js and Next.js for frontend applications.",
      "Built scalable, secure web applications with robust APIs, database management, and responsive UIs.",
      "Integrated Claude, Gemini and ChatGPT APIs using Node.js and Python for AI-powered features.",
      "Developed AI chatbots and customer support bots deployed across client web applications.",
      "Built document upload-to-autofill features where file data is parsed and mapped into form inputs via AI.",
      "Implemented AI-powered suggestion engines for improved UX and productivity.",
    ],
  },
  {
    version: "v2",
    company: "Alisons Technology",
    role: "Junior Developer",
    date: "Jul 2024 — Nov 2024",
    status: "completed",
    live: false,
    points: [
      "Built dynamic, scalable applications using HTML, CSS, JavaScript, PHP, and Laravel.",
      "Integrated seamless front-end and back-end solutions across multiple client projects.",
    ],
  },
  {
    version: "v1",
    company: "Virtual Internship",
    role: "Web Development Intern",
    date: "Dec 2023 — Feb 2024",
    status: "completed",
    live: false,
    points: [
      "Gained hands-on experience building projects with the MERN stack.",
      "Implemented REST APIs for smooth data integration between client and server.",
    ],
  },
];

export const education = [
  {
    school: "Iqra University, Gulshan Campus",
    degree: "Bachelor of Computer Science",
    date: "2025 — Present",
  },
  {
    school: "Govt Degree College North Karachi",
    degree: "Intermediate — Computer Science",
    date: "2024",
  },
  {
    school: "St Jude's High School",
    degree: "Matriculation — Computer Science",
    date: "2022",
  },
];

export const skillGroups = [
  {
    label: "backend",
    skills: [
      { name: "Laravel (PHP)", value: 92 },
      { name: "Node.js", value: 85 },
      { name: "Python", value: 80 },
      { name: "REST API Design", value: 88 },
      { name: "MySQL / Databases", value: 85 },
    ],
  },
  {
    label: "frontend",
    skills: [
      { name: "React.js", value: 88 },
      { name: "Next.js", value: 84 },
      { name: "JavaScript & jQuery", value: 85 },
      { name: "HTML, CSS & Bootstrap", value: 92 },
    ],
  },
  {
    label: "ai_integrations",
    skills: [
      { name: "Anthropic Claude API", value: 88 },
      { name: "OpenAI (ChatGPT) API", value: 85 },
      { name: "Google Gemini API", value: 82 },
      { name: "Prompt Engineering", value: 85 },
    ],
  },
  {
    label: "tooling",
    skills: [
      { name: "Git & GitHub", value: 85 },
      { name: "React Native", value: 70 },
      { name: "Ajax", value: 85 },
    ],
  },
];

export const projects = [
  {
    path: "/projects/gms",
    name: "GMS PLC",
    description:
      "Enterprise web platform built and maintained with Laravel and a modern frontend stack.",
    tags: ["Laravel", "JavaScript"],
    img: "/projects/gms.png",
    link: "https://www.gmsplc.com/",
    featured: true,
  },
  {
    path: "/projects/tutorbugs",
    name: "TutorBugs",
    description:
      "Online tutoring platform built with Laravel and React for a seamless learning experience.",
    tags: ["Laravel", "React"],
    img: "/projects/tutorbugs.png",
    link: "https://tutorbugs.com/",
    featured: true,
  },
  {
    path: "/projects/tower-plaza",
    name: "Tower Plaza",
    description:
      "Business management web app built with Laravel, jQuery, HTML, CSS and JavaScript.",
    tags: ["Laravel", "jQuery"],
    img: "/projects/towerplaza.png",
    link: "https://www.thetowerplazahotel.com/",
    featured: false,
  },
  {
    path: "/projects/grandeur",
    name: "Grandeur",
    description: "E-commerce website built with Laravel, jQuery, HTML, CSS and JavaScript.",
    tags: ["Laravel", "E-commerce"],
    img: "/projects/grandeur.png",
    link: "https://www.grandeuruae.ae/",
    featured: false,
  },
  {
    path: "/projects/quarter-master",
    name: "Quarter Master",
    description: "Full-stack application developed with React and Laravel.",
    tags: ["React", "Laravel"],
    img: "/projects/quartermaster.png",
    link: "https://qmastercdn.alisonstech-dev.com/",
    featured: false,
  },
  {
    path: "/projects/eclinic",
    name: "E-Clinic",
    description: "Healthcare management platform developed with React and Laravel.",
    tags: ["React", "Laravel"],
    img: "/projects/eclinic.png",
    link: "https://eclinic.alisonstech-dev.com/dashboard",
    featured: false,
  },
];

export const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Laravel on the backend, React.js / Next.js on the frontend — scalable applications with robust APIs and clean data models.",
  },
  {
    title: "AI-Powered Features & Chatbots",
    description:
      "Claude, Gemini and GPT integrations: chatbots, support bots, document auto-fill, and smart suggestion systems.",
  },
  {
    title: "API Development",
    description:
      "Designing and building RESTful APIs for reliable communication between client, server and third-party services.",
  },
  {
    title: "UI/UX Implementation",
    description:
      "Modern, responsive interfaces with React, Next.js and Bootstrap — built to be fast and easy to use.",
  },
];
