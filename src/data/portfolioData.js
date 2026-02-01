// Portfolio data - frontend only, no backend needed
// Edit this file to update your portfolio content
export const portfolioData = {
  profile: {
    name: "Pawan Pathariya",
    title: "Full Stack Developer (MERN)",
    tagline: "Building scalable web applications with React, Node.js & MongoDB",
    email: "pawanpathariys@gmail.com",
    phone: "+91 9098587598",
    location: "India",
    linkedin: "https://www.linkedin.com/in/pawan-pathariya-83203726a/",
    github: "https://github.com/Pawanpathariya",
    resumeUrl: "/resume.pdf",
    avatar: "https://github.com/Pawanpathariya.png"
  },
  about: {
    summary: "B.Tech CSE graduate with hands-on experience in full-stack development. Currently building the Pabbly product suite at Magnet Brains - email marketing (PEM), email verification (PEV), speech-to-text (Pabbly Flow, Pabbly STT), and productivity tools used by millions. Previously interned at Inteliostack.ai building SaaS-based ecommerce solutions. Passionate about creating impactful products using MERN stack.",
    highlights: [
      "Full-stack MERN developer with production experience",
      "Built Pabbly Email Marketing (PEM) and Pabbly Email Verification (PEV) at Magnet Brains",
      "Developed Speech-to-Text desktop app using OpenAI Whisper (WhisperFlow-like)",
      "SaaS ecommerce expertise from Inteliostack.ai internship",
      "BullMQ, Electron & Node.js experience"
    ]
  },
  experience: [
    {
      id: 1,
      company: "Magnet Brains",
      role: "Software Developer",
      period: "Jun 2025 - Present",
      location: "India (Remote)",
      description: "Building the Pabbly product suite at Magnet Brains - email marketing (PEM), email verification (PEV), speech-to-text (Pabbly Flow, Pabbly STT), and automation tools.",
      achievements: [
        "Created Pabbly Email Marketing (PEM) from scratch - supports PMTA credentials (self-setup) and other SMTP providers",
        "Developed Pabbly Email Verification (PEV) - email list cleaning and validation for 98% deliverability, bulk/single verification, duplicate removal, MTA validation",
        "Built Pabbly Flow - Speech-to-Text desktop application using OpenAI Whisper (similar to WhisperFlow)",
        "Developed Pabbly STT Service - FastAPI + faster-whisper backend for real-time transcription",
        "Electron-based cross-platform Pabbly Flow desktop app with global shortcuts"
      ],
      tech: ["React", "Electron", "Whisper", "Node.js"]
    },
    {
      id: 2,
      company: "Inteliostack.ai",
      role: "Full Stack Developer Intern",
      period: "3 months",
      location: "India",
      description: "Worked on SaaS-based ecommerce platform - building scalable backend APIs and modern frontend interfaces.",
      achievements: [
        "Developed full ecommerce backend with admin, cart, orders, payments",
        "Integrated ImageKit for media management",
        "Implemented JWT authentication & role-based access",
        "Built RESTful APIs for products, categories, and checkout flow"
      ],
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "ImageKit"]
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.Tech - Computer Science & Engineering",
      institute: "NRI Institute of Research and Technology",
      university: "RGPV University",
      year: "2025",
      grade: "Graduated"
    }
  ],
  skills: {
    frontend: ["React", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "Ant Design", "Vite"],
    backend: ["Node.js", "Express", "MongoDB", "Mongoose", "Prisma", "PostgreSQL"],
    tools: ["Git", "VS Code", "Postman", "Electron", "BullMQ", "Stripe"],
    languages: ["JavaScript", "C", "C++"]
  },
  projects: [
    {
      id: 1,
      name: "Pabbly Flow + STT",
      description: "Voice-to-text solution: Electron desktop app (Pabbly Flow) + speech-to-text service (Pabbly STT). Press global shortcut to record and transcribe speech. Includes FastAPI + faster-whisper backend for multiple audio formats, auto language detection, and translation. Deployable via Docker.",
      image: null,
      tech: ["Electron", "React", "Node.js", "FastAPI", "faster-whisper", "Docker", "Vite"],
      liveUrl: null,
      githubUrl: null,
      featured: true
    },
    {
      id: 2,
      name: "PEM - Pabbly Email Marketing",
      description: "Scalable email marketing system using BullMQ for queue processing. Supports PMTA credentials (self-setup) and other SMTP providers. Integrates Gmail API, handles throttling and retries. Built from scratch for Magnet Brains.",
      image: null,
      tech: ["BullMQ", "Node.js", "PMTA", "SMTP", "Gmail API", "Nodemailer"],
      liveUrl: null,
      githubUrl: null,
      featured: true
    },
    {
      id: 3,
      name: "PEV - Pabbly Email Verification",
      description: "Email list cleaning and validation service developed at Magnet Brains (Pabbly). Verifies single or bulk emails for 98% deliverability. Removes duplicates and invalid/inactive domains, provides MTA validations and detailed status codes. Upload CSV → verify → download cleaned list. Integrates with Pabbly Connect.",
      image: null,
      tech: ["Node.js", "React", "BullMQ", "MongoDB", "REST API"],
      liveUrl: null,
      githubUrl: null,
      featured: true
    },
    {
      id: 4,
      name: "RoleAction (Next.js)",
      description: "Role-based application with Prisma, CASL for authorization, NextAuth for authentication. Full-stack Next.js with PostgreSQL.",
      image: null,
      tech: ["Next.js", "Prisma", "CASL", "NextAuth", "PostgreSQL"],
      liveUrl: null,
      githubUrl: null,
      featured: false
    },
    {
      id: 5,
      name: "E-Banking App",
      description: "Banking application with JWT authentication, bcrypt password hashing, and nodemailer for notifications.",
      image: null,
      tech: ["MongoDB", "Express", "JWT", "Nodemailer", "bcrypt"],
      liveUrl: null,
      githubUrl: null,
      featured: false
    },
    {
      id: 6,
      name: "React E-commerce",
      description: "Frontend ecommerce with Redux, Ant Design, cart management, and responsive design.",
      image: null,
      tech: ["React", "Redux", "Vite", "Ant Design", "Bootstrap"],
      liveUrl: null,
      githubUrl: null,
      featured: false
    },
    {
      id: 7,
      name: "Stripe Payment Integration",
      description: "Backend integration for Stripe payments with order management and webhooks.",
      image: null,
      tech: ["Node.js", "Express", "Stripe", "MongoDB"],
      liveUrl: null,
      githubUrl: null,
      featured: false
    }
  ]
}
