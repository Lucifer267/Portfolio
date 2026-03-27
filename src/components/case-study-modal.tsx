"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CaseStudyModalProps {
  id: string;
  title: string;
  subtitle: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  githubUrl: string;
}

export function CaseStudyModal({
  title,
  subtitle,
  isOpen,
  onClose,
  children,
  githubUrl,
}: CaseStudyModalProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  if (!isOpen) return null;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    setIsScrolled(element.scrollTop > 0);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-hidden flex items-start justify-center pt-8">
        <div className="bg-background rounded-lg shadow-xl border border-border w-full max-w-4xl max-h-[90vh] flex flex-col mx-4">
          {/* Header */}
          <div
            className={`sticky top-0 z-10 px-6 py-4 border-b border-border flex items-start justify-between transition-shadow ${
              isScrolled ? "shadow-sm" : ""
            }`}
          >
            <div className="flex-1 pr-4">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Case Study
              </p>
              <h2 className="mt-1 text-xl font-bold tracking-tight">{title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div
            className="flex-1 overflow-y-auto px-6 py-6 prose prose-stone dark:prose-invert max-w-none"
            onScroll={handleScroll}
          >
            {children}
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 border-t border-border bg-background px-6 py-4 flex justify-between items-center">
            <button
              onClick={onClose}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </button>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2">
                View on GitHub
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
