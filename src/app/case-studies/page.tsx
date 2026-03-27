import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Deep dives into projects I've built and problems I've solved.",
};

const caseStudies = [
  {
    slug: "rag-medical-qa",
    title: "Hybrid Graph RAG Medical QA System",
    subtitle: "Building Production-Ready Question Answering at Scale",
    date: "2025",
    excerpt:
      "Engineered a hybrid RAG system combining vector search and knowledge graphs to answer medical questions with high accuracy. Integrated FDA datasets and implemented parallel evaluation pipelines.",
    technologies: ["Python", "Flask", "Neo4j", "Chroma", "LLM Systems"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    slug: "honeypot-threat-analysis",
    title: "Custom Honeypot for Multi-Protocol Threat Analysis",
    subtitle: "Real-Time Intrusion Detection and Behavioral Analysis",
    date: "2025",
    excerpt:
      "Developed a multi-protocol honeypot to capture and analyze malicious traffic patterns. Processed 150+ intrusion attempts to identify attacker behavior and threat signatures.",
    technologies: [
      "Python",
      "FastAPI",
      "Networking",
      "Security Research",
      "Async Programming",
    ],
    color: "from-red-500 to-pink-500",
  },
  {
    slug: "aura-analytics",
    title: "AURA — Data Visualization & Analytics Platform",
    subtitle: "Backend Infrastructure for Real-Time Data Processing",
    date: "2025",
    excerpt:
      "Built a scalable analytics backend for processing CSV datasets, generating dynamic visualizations, and serving results through optimized REST APIs.",
    technologies: [
      "Flask",
      "Python",
      "Pandas",
      "Plotly",
      "Data Engineering",
    ],
    color: "from-purple-500 to-indigo-500",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Case Studies
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Detailed breakdowns of projects I've built, problems I've solved, and lessons learned along the way.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-all hover:border-primary hover:bg-accent hover:shadow-lg"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10 bg-gradient-to-br pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {study.date}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold group-hover:text-primary transition-colors">
                      {study.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {study.subtitle}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary ml-4 flex-shrink-0 mt-1" />
                </div>

                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  {study.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
