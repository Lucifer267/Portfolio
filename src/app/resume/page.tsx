"use client";

import { ArrowLeft, Download, MapPin, Mail, Phone, Trophy, Award, Cpu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

// ─── Static data sourced directly from Sahil's PDF resume ───────────────────

const CONTACT = {
  name: "Sahil Betal",
  phone: "+91-9096188127",
  email: "betal.sahil13@gmail.com",
  location: "Pune, India",
  locationLink: "https://maps.google.com/?q=Pune,India", 
};

const SUMMARY =
  "Backend-focused Computer Science student experienced in building scalable APIs, distributed data systems, and security research tools. Skilled in Python, FastAPI, Flask, and cloud-native backend development with emphasis on performance, observability, and system reliability.";

const EDUCATION = [
  {
    school: "Vishwakarma Institute of Technology",
    degree: "Bachelor of Technology in Computer Science",
    start: "Aug 2023",
    end: "May 2027",
    location: "Pune, India",
    href: "https://vit.edu",
  },
];

const SKILLS = {
  Languages: ["Python", "C/C++", "SQL", "JavaScript"],
  "Backend Development": [
    "FastAPI",
    "Flask",
    "REST APIs",
    "Node.js",
    "Async Programming",
    "API Design",
  ],
  "Systems & DevOps": [
    "Linux",
    "Docker",
    "Kubernetes",
    "Nginx",
    "Git",
    "CI/CD",
    "Shell Scripting",
  ],
  "Cloud & Data": [
    "AWS",
    "GCP",
    "Vertex AI",
    "Cloud Run",
    "MySQL",
    "Pandas",
    "NumPy",
    "Plotly",
    "Matplotlib",
    "ETL Pipelines",
  ],
};

const PROJECTS = [
  {
    title: "Hybrid Graph RAG Medical QA System",
    dates: "2025",
    href: "#",
    description:
      "Engineered a hybrid Retrieval-Augmented Generation architecture combining vector search and knowledge graph retrieval for medical question answering.",
    bullets: [
      "Integrated FDA DailyMed drug labels and MedlinePlus datasets to build a structured medical knowledge base with entity-level relationship mapping.",
      "Implemented parallel QA pipelines (LLM-only, Vector RAG, Hybrid Graph RAG) with automated evaluation to select the most accurate response.",
      "Built a Flask backend exposing REST APIs and an interactive dashboard for query comparison and performance metrics.",
      "Optimized graph traversal queries in Neo4j to reduce retrieval latency, improving end-to-end response time across multi-hop reasoning chains.",
    ],
    technologies: ["Python", "Flask", "Neo4j", "Chroma", "LLM Systems"],
  },
  {
    title: "Custom Honeypot for Multi-Protocol Threat Analysis",
    dates: "2025",
    href: "#",
    description:
      "Developed a lightweight multi-protocol honeypot emulating HTTP, SSH, FTP, and SMB services to monitor real-world malicious traffic.",
    bullets: [
      "Captured and analyzed 150+ intrusion attempts originating from 30+ attacker IPs for behavioral threat analysis and attacker fingerprinting.",
      "Designed an event-driven logging pipeline and asynchronous network handlers to handle concurrent connections reliably under high load.",
      "Generated structured threat intelligence reports by correlating IP geolocation, attack vectors, and session payloads across captured sessions.",
    ],
    technologies: ["Python", "FastAPI", "Networking", "Systems Engineering"],
  },
  {
    title: "AURA — Data Visualization & Analytics Platform",
    dates: "2025",
    href: "#",
    description:
      "Developed a backend analytics platform enabling automated ingestion, statistical analysis, and visualization of CSV datasets.",
    bullets: [
      "Implemented REST APIs for dataset processing and dynamic chart generation used for exploratory data analysis workflows.",
      "Improved dashboard responsiveness through batching and caching within the data processing pipeline, reducing repeated computation overhead.",
      "Designed a modular chart-generation engine supporting multiple Plotly visualization types, configurable at runtime via API parameters.",
    ],
    technologies: ["Flask", "Plotly", "Backend Systems"],
  },
  {
    title: "MediaPipe Face Landmarker",
    dates: "2024",
    href: "#",
    description:
      "Built a real-time facial landmark detection system enabling avatar animation using MediaPipe's face mesh solution.",
    bullets: [
      "Integrated 52 facial blendshape parameters for accurate expression tracking and fine-grained avatar control.",
      "Implemented a low-latency rendering pipeline supporting 20+ animated avatars simultaneously with smooth frame synchronization.",
      "Optimized WebGL-based rendering to maintain consistent frame rates under multi-avatar load without degrading detection accuracy.",
    ],
    technologies: ["JavaScript", "MediaPipe", "Computer Vision"],
  },
];

const EXTRACURRICULARS = [
  {
    title: "TEDxVITPune — Web Developer",
    dates: "2025 – Present",
    organization: "Official TEDx Chapter, Vishwakarma Institute of Technology",
    location: "Pune, India",
    bullets: [
      "Designed and developed the official TEDxVITPune 2026 website, handling end-to-end frontend development and deployment.",
      "Collaborated with the core organizing team to align the website's design language with TEDx brand guidelines and event requirements.",
    ],
  },
  {
    title: "NGO Volunteer — Amazon Community Initiative",
    dates: "2024",
    organization: "Environmental & Community Outreach Program",
    location: "",
    bullets: [
      "Participated in Amazon-supported NGO volunteering activities focused on community welfare and environmental awareness.",
      "Contributed to on-ground outreach efforts alongside a cross-functional volunteer team to drive sustainable community impact.",
    ],
  },
];

const ACHIEVEMENTS = [
  {
    title: "ICAIN 2025 — Springer Proceedings",
    description:
      "Presented Facial Landmark Detection and Avatar Animation at ICAIN 2025 (Springer Proceedings).",
  },
  {
    title: "IJSRR Research Publication (Under Review)",
    description:
      "Research work on Beta-Carotene: Molecular Structure C40H56 currently under review in IJSRR (ISSN: 2279-543X).",
  },
  {
    title: "InnoHack — Ranked 13th / 110+ Teams",
    description:
      "Ranked 13th among 110+ teams at InnoHack for backend architecture of CodeDebugger & Run.",
  },
];

const CERTIFICATIONS = [
  {
    name: "Cloud Technology Consultant",
    issuer: "Coursera",
  },
  {
    name: "AWS Cloud Solutions Architect",
    issuer: "Coursera",
  },
  {
    name: "NVIDIA Deep Learning Certificate",
    issuer: "NVIDIA",
  },
  {
    name: "Machine Learning Operations (MLOps) for Generative AI",
    issuer: "Google",
  },
  {
    name: "Machine Learning Operations (MLOps) with Vertex AI: Model Evaluation",
    issuer: "Google",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ResumePage() {
  return (
    <main className="min-h-dvh flex flex-col gap-8 relative">
      {/* ── Top bar ── */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                aria-label="Go back"
              >
                <ArrowLeft className="size-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Resume</h1>
          </div>
          <a href="/resume.pdf" download="Sahil_Betal_Resume.pdf">
            <Button variant="default" size="sm" className="gap-2">
              <Download className="size-4" />
              Download PDF
            </Button>
          </a>
        </div>
      </BlurFade>

      <div className="space-y-8 max-w-3xl">
        {/* ── Header ── */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="space-y-4">
            <div>
              <h2 className="text-4xl font-bold">{CONTACT.name}</h2>
              <p className="text-muted-foreground text-lg mt-2">{SUMMARY}</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 hover:text-foreground text-muted-foreground transition-colors"
              >
                <Mail className="size-4" />
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-2 hover:text-foreground text-muted-foreground transition-colors"
              >
                <Phone className="size-4" />
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground text-muted-foreground transition-colors"
              >
                <MapPin className="size-4" />
                {CONTACT.location}
              </a>
            </div>
          </div>
        </BlurFade>

        <Separator className="my-4" />

        {/* ── Summary ── */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">About</h3>
            <p className="text-muted-foreground leading-relaxed">{SUMMARY}</p>
          </div>
        </BlurFade>

        {/* ── Skills ── */}
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Skills</h3>
            <div className="space-y-3">
              {Object.entries(SKILLS).map(([category, items]) => (
                <div key={category}>
                  <p className="text-sm font-medium text-muted-foreground mb-1.5">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* ── Education ── */}
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Education</h3>
            {EDUCATION.map((edu) => (
              <a
                key={edu.school}
                href={edu.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block space-y-2 group cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                    <p className="text-xs text-muted-foreground">{edu.location}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {edu.start} – {edu.end}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </BlurFade>

        {/* ── Projects ── */}
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Projects</h3>
            {PROJECTS.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block space-y-2 group cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.description}
                    </p>
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      {project.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {project.dates}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </BlurFade>

        {/* ── Extracurriculars & Volunteering ── */}
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Extracurriculars & Volunteering</h3>
            {EXTRACURRICULARS.map((item) => (
              <div key={item.title} className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.organization}
                      {item.location && ` · ${item.location}`}
                    </p>
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {item.dates}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* ── Achievements & Research ── */}
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Achievements & Research</h3>
            {ACHIEVEMENTS.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <Trophy className="size-4 mt-0.5 text-muted-foreground shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* ── Certifications ── */}
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Certifications</h3>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.name} className="flex items-start gap-3">
                  <Award className="size-4 mt-0.5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* ── Hackathons (from DATA, kept for compatibility) ── */}
        {DATA.hackathons && DATA.hackathons.length > 0 && (
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Hackathons</h3>
              {DATA.hackathons.map((hackathon) => (
                <div key={hackathon.title} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{hackathon.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {hackathon.description}
                      </p>
                    </div>
                    <div className="text-right ml-4">
                      <Badge variant="default" className="text-xs">
                        {hackathon.win}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-2">
                        {hackathon.dates}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>
        )}
      </div>
    </main>
  );
}