import { allPosts } from "content-collections";
import { formatDate } from "@/lib/utils";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import "./essay.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "The Work That Remains Distinctly Human",
  openGraph: {
    title: "The Work That Remains Distinctly Human",
    description: "A thoughtful examination of what AI genuinely cannot do — and why the future belongs to those who understand the difference.",
    type: "article",
    url: `${DATA.url}/blog`,
  },
  twitter: {
    card: "summary_large_image",
    title: "The Work That Remains Distinctly Human",
    description: "A thoughtful examination of what AI genuinely cannot do — and why the future belongs to those who understand the difference.",
  },
};

export default async function BlogPage() {
  const posts = allPosts;
  
  if (!posts || posts.length === 0) {
    notFound();
  }

  // Display the first (and only) post
  const post = posts[0];
  const slug = post._meta.path.replace(/\.mdx$/, "");

  const jsonLdContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    description: post.summary,
    url: `${DATA.url}/blog`,
    author: {
      "@type": "Person",
      name: post.author || DATA.name,
    },
  }).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: jsonLdContent,
        }}
      />
      <div className="essay-progress" id="progress"></div>

      <div style={{ backgroundColor: "var(--essay-paper)", color: "var(--essay-ink)", minHeight: "100vh", width: "100%" }}>
        <div style={{ maxWidth: "68ch", margin: "0 auto", padding: "2rem" }}>
          <Link 
            href="/" 
            className="inline-flex items-center gap-1 text-sm transition-colors group"
            style={{ color: "var(--essay-ink-muted)", marginBottom: "2rem" }}
            aria-label="Back to Home"
          >
            <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
            Back to Home
          </Link>

          <h1 className="essay-h1" style={{ marginBottom: "1.5rem" }}>
            {post.title}
          </h1>
          <div style={{ 
            paddingBottom: "2rem",
            borderBottom: "1px solid var(--essay-paper-rule)",
            marginBottom: "2rem"
          }}>
            <p style={{ fontFamily: "var(--essay-mono)", fontSize: "0.7rem", letterSpacing: "0.08em", margin: 0, color: "var(--essay-ink-muted)" }}>
              {formatDate(post.publishedAt)}
              {post.author && (
                <>
                  <span style={{ color: "var(--essay-gold)" }}> · </span>
                  {post.author}
                </>
              )}
            </p>
          </div>

          <article style={{ width: "100%" }}>
            <MDXContent code={post.mdx} components={mdxComponents} />
          </article>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            const bar = document.getElementById('progress');
            window.addEventListener('scroll', () => {
              const h = document.documentElement;
              const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
              bar.style.width = pct + '%';
            });
          `,
        }}
      />
    </>
  );
}
