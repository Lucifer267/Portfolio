import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AURA Analytics Platform | Case Study",
  description: "Building a scalable backend infrastructure for data processing, analysis, and visualization.",
};

export default function AuraCaseStudy() {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      window.history.back();
    }
  };

  return (
    <main className="min-h-screen bg-background" onClick={handleBackgroundClick}>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8" onClick={(e) => e.stopPropagation()}>
        {/* Back Link */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Case Studies
        </Link>

          {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest leading-none">
            Project — 2025
          </p>
          <h1 className="mt-3 text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-slate-900 dark:text-white">
            AURA
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 italic opacity-90">
            Data Visualization & Analytics Platform
          </p>
          <p className="mt-4 text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-medium max-w-2xl border-l-4 border-primary pl-4">
            A high-performance backend analytics engine that transforms raw CSV uploads into automated insights and interactive visualizations.
          </p>
        </div>

        {/* System Architecture Visualization - IMPROVED CONTRAST */}
        <div className="mb-12 group">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
            System Architecture
          </h3>
          <div className="relative rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-sm overflow-hidden min-h-[400px] flex items-center justify-center">
            {/* Visual background element */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            <div className="relative w-full max-w-lg space-y-6">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-bold text-sm shadow-sm">
                  User Upload (CSV)
                </div>
                <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 my-1"></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="px-4 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-bold text-sm shadow-sm">
                  Chunked Reading (for large files)
                </div>
                <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 my-1"></div>
              </div>

              {/* Step 3 */}
              <div className="relative p-5 rounded-xl bg-slate-100 dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-md">
                <div className="absolute -top-3 left-4 px-2 py-0.5 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-[10px] font-black uppercase tracking-tighter text-slate-500">
                  Data Analysis Pipeline
                </div>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {["Detect Types", "Stats Engine", "Outlier Check", "Temporal Map"].map(item => (
                    <div key={item} className="px-2 py-1.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 h-6 w-px bg-slate-300 dark:bg-slate-700"></div>
              </div>

              {/* Step 4 */}
              <div className="mt-8 relative p-5 rounded-xl bg-slate-100 dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-md">
                <div className="absolute -top-3 left-4 px-2 py-0.5 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-[10px] font-black uppercase tracking-tighter text-slate-500">
                  Visualization Engine
                </div>
                <div className="flex flex-wrap gap-2 mt-2 justify-center">
                  {["Histogram", "Box Plot", "Heatmap", "Scatter"].map(item => (
                    <div key={item} className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-[10px] font-black text-indigo-600 dark:text-indigo-400">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 h-6 w-px bg-slate-300 dark:bg-slate-700"></div>
              </div>

              {/* Step 5 */}
              <div className="mt-8 flex flex-col items-center">
                <div className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-sm shadow-xl ring-4 ring-primary/20">
                  Caching + Response
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-4 gap-4 mb-12 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          <div>
            <p className="text-3xl font-black text-slate-900 dark:text-white">100MB</p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter mt-1">File Capacity</p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900 dark:text-white">&lt;5s</p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter mt-1">Processing Time</p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900 dark:text-white">95%</p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter mt-1">Type Accuracy</p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900 dark:text-white">80%</p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter mt-1">Cache Hit Rate</p>
          </div>
        </div>

        {/* Skills Demonstrated */}
        <div className="mb-12 p-6 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Skills Demonstrated</h3>
          <div className="flex flex-wrap gap-2">
            {["Python", "Flask", "Pandas/NumPy", "Data Processing", "Caching Strategies", "Performance Optimization", "Plotly Visualization", "Docker", "Large File Handling", "Statistical Analysis"].map((skill) => (
              <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <article className="space-y-10">
          {/* Problem & Context */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">The Challenge</h2>
            <p className="text-base leading-relaxed text-slate-900 dark:text-slate-100 mb-3">
              Non-technical users regularly work with datasets (CSVs, spreadsheets) but lack intuitive tools to explore and understand them. Excel is cumbersome, Python notebooks require coding expertise, and enterprise BI tools like Tableau are cost-prohibitive for casual analysis.
            </p>
            <div className="p-5 rounded-lg border border-border bg-slate-100 dark:bg-slate-800 my-5">
              <p className="font-semibold text-sm mb-3 text-slate-900 dark:text-slate-50">Requirements:</p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex gap-2"><span className="text-primary">•</span> Handle diverse data types without user configuration</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Process files up to 100MB without timeout or memory issues</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Generate visualizations in real-time (&lt;2 seconds)</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Automatic insight generation with zero user input</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Minimal infrastructure footprint with temporary storage</li>
              </ul>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">The Solution</h2>
            <p className="text-base leading-relaxed text-slate-900 dark:text-slate-100 mb-4">
              I built a backend analytics engine that inverts the traditional workflow: instead of asking users what they want to visualize, the system intelligently analyzes data and surfaces the most interesting patterns automatically.
            </p>
            <div className="space-y-4">
              <div className="pl-5 border-l-2 border-primary">
                <h3 className="font-semibold text-sm mb-2">Core Architecture</h3>
                <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li><span className="text-primary font-semibold">1.</span> <span className="font-medium">Upload & Parse</span> — Validate CSV structure, detect encoding</li>
                  <li><span className="text-primary font-semibold">2.</span> <span className="font-medium">Intelligent Analysis</span> — Infer data types, compute statistics, identify outliers</li>
                  <li><span className="text-primary font-semibold">3.</span> <span className="font-medium">Smart Visualization</span> — Auto-select chart types based on data characteristics</li>
                  <li><span className="text-primary font-semibold">4.</span> <span className="font-medium">Serve Results</span> — Return interactive visualizations with caching</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Technical Approach */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Technical Approach</h2>
            <div className="space-y-4 text-sm text-foreground">
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border">
                <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Large File Optimization</p>
                <p className="text-slate-700 dark:text-slate-300">Implemented chunked processing using Pandas streaming to handle 100MB+ files without memory exhaustion. Welford's algorithm computes running statistics across chunks.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border">
                <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Intelligent Type Detection</p>
                <p className="text-slate-700 dark:text-slate-300">Heuristic-based detection with user feedback loops. Samples first 1,000 rows with regex patterns for dates, numeric validation, and cardinality analysis. Achieves 95% accuracy on real-world datasets.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border">
                <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Performance & Caching</p>
                <p className="text-slate-700 dark:text-slate-300">Lazy chart generation combined with multi-tier caching (in-process + Redis). Batches related computations to reduce redundant operations. 80%+ cache hit rate on typical workloads.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border">
                <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Visualization Intelligence</p>
                <p className="text-slate-700 dark:text-slate-300">Dynamic chart selection based on column cardinality. Handles outliers with adaptive scaling and alternative views. Automatically aggregates high-cardinality data for readability.</p>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Backend</p>
                <p className="text-slate-700 dark:text-slate-300">Python 3.10+, Flask, Werkzeug</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Data Processing</p>
                <p className="text-slate-700 dark:text-slate-300">Pandas, NumPy, SciPy</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Visualization</p>
                <p className="text-slate-700 dark:text-slate-300">Plotly, Jinja2</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">DevOps</p>
                <p className="text-slate-700 dark:text-slate-300">Docker, Redis, Temporary FS</p>
              </div>
            </div>
          </section>

          {/* Results & Impact */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-lg border border-border bg-blue-50 dark:bg-blue-950">
                <p className="text-xs font-semibold text-blue-900 dark:text-blue-300 uppercase tracking-wider mb-2">Performance</p>
                <p className="text-blue-800 dark:text-blue-200">Typical 10MB CSV: &lt;1s. Large 100MB files: &lt;5s</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-blue-50 dark:bg-blue-950">
                <p className="text-xs font-semibold text-blue-900 dark:text-blue-300 uppercase tracking-wider mb-2">Quality</p>
                <p className="text-blue-800 dark:text-blue-200">95%+ charts immediately useful, no tweaking required</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-blue-50 dark:bg-blue-950">
                <p className="text-xs font-semibold text-blue-900 dark:text-blue-300 uppercase tracking-wider mb-2">Efficiency</p>
                <p className="text-blue-800 dark:text-blue-200">80%+ cache hit rate eliminates recomputation</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-blue-50 dark:bg-blue-950">
                <p className="text-xs font-semibold text-blue-900 dark:text-blue-300 uppercase tracking-wider mb-2">Accuracy</p>
                <p className="text-blue-800 dark:text-blue-200">95%+ type detection on real-world datasets</p>
              </div>
            </div>
          </section>

          {/* Engineering Insights */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Engineering Insights</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2 text-sm text-slate-900 dark:text-slate-100">Lazy Evaluation Beats Algorithm Optimization 10:1</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Realized that not generating charts until requested improved perceived performance dramatically—without touching the algorithm. This single insight outperformed months of optimization work.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2 text-sm text-slate-900 dark:text-slate-100">Heuristics Thrive With Feedback Loops</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Type detection started at 80% accuracy without user input. Adding a simple "incorrect?" button and learning from corrections achieved 95%. Users are willing to help when the feedback mechanism is frictionless.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2 text-sm text-slate-900 dark:text-slate-100">Real Data Is Messier Than Test Data</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Production data contains missing values, encoding issues, and inconsistent formatting that test suites never catch. Defensive programming and graceful error handling became critical.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2 text-sm text-slate-900 dark:text-slate-100">Visualization Design Is Infrastructure</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Sophisticated algorithms mean nothing if charts are unreadable. Handling outliers, high cardinality data, and edge cases requires as much engineering rigor as the core data pipeline.</p>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section>
            <div className="p-6 rounded-lg border border-primary/30 bg-slate-50 dark:bg-slate-900">
              <p className="text-slate-900 dark:text-slate-100 leading-relaxed">
                <span className="font-semibold">The Core Achievement:</span> AURA inverts the traditional analytics workflow. Rather than forcing users to articulate what they want to visualize, the system intelligently surfaces the most relevant patterns automatically. This shift from push-based (user asks a question) to pull-based (system finds answers) fundamentally changes the analytics experience—and demonstrates that smart engineering can be genuinely invisible to users.
              </p>
            </div>
          </section>
        </article>

        {/* CTA & Links */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="space-y-4 flex flex-col">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Case Studies
            </Link>
            <Link
              href="https://github.com/Lucifer267/AURA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View Source Code on GitHub
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

