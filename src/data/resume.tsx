import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileText } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

type Link = {
  type: string;
  href: string;
  icon: React.ReactNode;
};

type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  win: string;
  links: Link[];
};

type Education = {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
};

type Project = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: Link[];
  image: string;
  video: string;
};

type ResumeData = {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: Array<{ name: string; icon: any }>;
  navbar: Array<{ href: string; icon: any; label: string }>;
  contact: {
    email: string;
    tel: string;
    social: Record<string, { name: string; url: string; icon: any; navbar: boolean }>;
  };
  work: Array<any>;
  education: Education[];
  projects: Project[];
  hackathons: Hackathon[];
};

export const DATA: ResumeData = {
  name: "Sahil Betal",
  initials: "SB",
  url: "https://sahilbetal.dev",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Backend-focused Computer Science student building scalable APIs, distributed systems, and security tools.",
  summary:
    "I'm a Backend Engineer passionate about building scalable systems and solving complex problems. Currently pursuing my Bachelor's in Computer Science at Vishwakarma Institute of Technology. Experienced in Python, FastAPI, Flask, and cloud-native backend development with emphasis on performance, observability, and system reliability. I've built production systems ranging from hybrid RAG architectures to multi-protocol honeypots for threat analysis.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "FastAPI", icon: null },
    { name: "Flask", icon: null },
    { name: "C/C++", icon: Csharp },
    { name: "SQL", icon: null },
    { name: "JavaScript", icon: null },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Linux", icon: null },
    { name: "AWS", icon: null },
    { name: "GCP", icon: null },
    { name: "Git", icon: null },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/resume", icon: FileText, label: "Resume" },
  ],
  contact: {
    email: "betal.sahil13@gmail.com",
    tel: "+91-9096188127",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Lucifer267",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sahil-betal",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [],
  education: [
    {
      school: "Vishwakarma Institute of Technology",
      href: "https://www.vit.edu/",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/vit.png",
      start: "Aug 2023",
      end: "May 2027",
    },
  ],
  projects: [
    {
      title: "Hybrid Graph RAG Medical QA System",
      href: "/case-studies/rag-medical-qa",
      dates: "2025",
      active: true,
      description:
        "Engineered a hybrid Retrieval-Augmented Generation architecture combining vector search and knowledge graph retrieval for medical question answering. Integrated FDA DailyMed drug labels and MedlinePlus datasets into a structured medical knowledge base. Implemented parallel QA pipelines (LLM-only, Vector RAG, Hybrid Graph RAG) with automated evaluation to select the most accurate response.",
      technologies: [
        "Python",
        "Flask",
        "Neo4j",
        "Chroma",
        "LLM Systems",
        "REST APIs",
        "RAG Architecture",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Lucifer267/RAG_Medical",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rag-medical-thumbnail.png",
      video: "",
    },
    {
      title: "Custom Honeypot for Multi-Protocol Threat Analysis",
      href: "/case-studies/honeypot-threat-analysis",
      dates: "2025",
      active: true,
      description:
        "Developed a lightweight multi-protocol honeypot emulating HTTP, SSH, FTP, and SMB services to monitor real-world malicious traffic. Captured and analyzed 150+ intrusion attempts from 30+ attacker IPs for behavioral threat analysis. Designed an event-driven logging pipeline and asynchronous network handlers for concurrent connection reliability.",
      technologies: [
        "Python",
        "FastAPI",
        "Networking",
        "Systems Engineering",
        "Async Programming",
        "Security Research",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Lucifer267/TrapHoneyPot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/honeypot-thumbnail.png",
      video: "",
    },
    {
      title: "AURA — Data Visualization & Analytics Platform",
      href: "/case-studies/aura-analytics",
      dates: "2025",
      active: true,
      description:
        "Developed a backend analytics platform enabling automated ingestion, statistical analysis, and visualization of CSV datasets. Implemented REST APIs for dataset processing and dynamic chart generation. Improved dashboard responsiveness through batching and caching within the data processing pipeline.",
      technologies: [
        "Flask",
        "Plotly",
        "Python",
        "REST APIs",
        "Data Processing",
        "Pandas",
        "NumPy",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Lucifer267/AURA",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/aura-thumbnail.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "InnoHack",
      dates: "2024",
      location: "India",
      description:
        "Ranked 13th among 110+ teams for backend architecture of CodeDebugger & Run. Demonstrated expertise in systems design, performance optimization, and scalable backend development under competitive conditions.",
      image: "",
      win: "Top 13 Finalist",
      links: [],
    },
  ],
} as const;
