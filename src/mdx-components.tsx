import { CodeBlock } from "@/components/mdx/code-block";
import { MediaContainer } from "@/components/mdx/media-container";
import type { ComponentProps, ReactNode } from "react";

type CodeProps = ComponentProps<"code"> & {
  "data-language"?: string;
};

// Custom MDX Components for Essay Styling
function StatRow({ children }: { children: ReactNode }) {
  return (
    <div className="essay-stat-row full-bleed" style={{ maxWidth: "var(--essay-wide)", marginLeft: "auto", marginRight: "auto" }}>
      {children}
    </div>
  );
}

function StatCell({ number, label }: { number: string; label: string }) {
  return (
    <div className="essay-stat-cell">
      <div className="essay-stat-number">
        {number}
      </div>
      <p className="essay-stat-label">
        {label}
      </p>
    </div>
  );
}

function PullQuote({ children, attribution }: { children: ReactNode; attribution?: string }) {
  return (
    <blockquote className="essay-pull-quote">
      <p>{children}</p>
      {attribution && (
        <cite>{attribution}</cite>
      )}
    </blockquote>
  );
}

function Callout({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="essay-callout">
      {label && (
        <div className="essay-callout-label">
          {label}
        </div>
      )}
      <p>{children}</p>
    </div>
  );
}

function CaseStudy({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <div className="essay-case-study">
      {title && (
        <>
          <span className="essay-case-study-tag">Case in Point</span>
          <h3>{title}</h3>
        </>
      )}
      <p>{children}</p>
    </div>
  );
}

export const mdxComponents = {
  MediaContainer,
  StatRow,
  StatCell,
  PullQuote,
  Callout,
  CaseStudy,
  pre: (props: ComponentProps<"pre">) => <CodeBlock {...props} />,
  hr: (props: ComponentProps<"hr">) => (
    <div className="essay-divider my-10 w-full items-center" {...props}>
      <span className="essay-divider-glyph">&#9670;</span>
    </div>
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="my-6 border border-border rounded-xl overflow-hidden">
      <div className="w-full overflow-x-auto">
        <table
          className="m-0! w-full min-w-full border-separate border-spacing-0"
          {...props}
        />
      </div>
    </div>
  ),
  code: ({ children, ...props }: CodeProps) => {
    if (props["data-language"]) {
      return <code {...props}>{children}</code>;
    }
    return (
      <code
        className="px-1.5 py-0.5 rounded-md bg-muted/60 dark:bg-muted/40 text-sm font-mono text-foreground/90"
        {...props}
      >
        {children}
      </code>
    );
  },
} as const;

