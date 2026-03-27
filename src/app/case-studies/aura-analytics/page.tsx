import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AURA Analytics Platform | Case Study",
  description: "Building a scalable backend infrastructure for data processing, analysis, and visualization.",
};

export default function AuraCaseStudy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Case Studies
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            2025
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            AURA — Data Visualization & Analytics Platform
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Backend Infrastructure for Real-Time Data Processing
          </p>
        </div>

        {/* Main Content */}
        <article className="prose prose-stone dark:prose-invert max-w-none">
          {/* Problem Statement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
            <p>
              Non-technical users often have datasets (CSVs, spreadsheets) but lack tools to explore them meaningfully. Excel is cumbersome. Python notebooks require coding knowledge. Expensive BI tools like Tableau are overkill.
            </p>
            <p>
              The challenge: Build a platform where users can upload a CSV, get automatic insights (statistical summaries, outliers, trends), and generate interactive visualizations—all without manual configuration.
            </p>
            <p>
              <strong>Constraints:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Handle diverse data types (numeric, categorical, temporal, geographic)</li>
              <li>Process files up to 100MB efficiently without timeout</li>
              <li>Generate visualizations in real-time (user doesn't wait 30s)</li>
              <li>Minimal storage footprint (uploads are temporary)</li>
              <li>Support multiple chart types with smart defaults</li>
            </ul>
            <p>
              The platform needed to be fast, intuitive, and require zero configuration from users.
            </p>
          </section>

          {/* Solution Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Solution Overview</h2>
            <p>
              AURA is a backend analytics engine that intelligently processes raw data and surfaces insights automatically.
            </p>
            <p>
              <strong>Core flow:</strong>
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li><strong>Upload & Parse:</strong> Accept CSV, validate structure</li>
              <li><strong>Analyze:</strong> Infer data types, compute statistics, detect outliers</li>
              <li><strong>Generate Charts:</strong> Based on column types, suggest optimal visualizations</li>
              <li><strong>Serve:</strong> Return interactive charts to frontend</li>
            </ol>
            <p>
              Instead of asking users, "What would you like to visualize?" the system asks, "What interesting patterns do I see?"—and shows them.
            </p>
            <p>
              <strong>Key Innovation:</strong> Smart batching and caching. If the same dataset is processed twice, results are cached. Related computations (e.g., percentiles for a column) are batched together to reduce redundant operations.
            </p>
          </section>

          {/* Architecture */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">System Architecture & Workflow</h2>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto mb-6">
              <pre className="text-sm text-muted-foreground whitespace-pre-wrap break-words font-mono">
{`User Upload (CSV)
    ↓
Flask Endpoint: /api/upload
    │
    ├─ Validation
    │  └─ Check file size, encoding, headers
    │
    ├─ Chunked Reading (for large files)
    │  └─ Stream into Pandas DataFrame
    │
    ├─ Data Analysis Pipeline
    │  ├─ Detect column types
    │  ├─ Compute statistics
    │  │  (mean, median, std, quantiles)
    │  ├─ Identify outliers
    │  ├─ Detect temporal columns
    │  └─ Find high-cardinality categoricals
    │
    ├─ Visualization Generation
    │  ├─ For Numeric: Histogram, Box plot, Line chart
    │  ├─ For Categorical: Bar chart, Pie chart
    │  ├─ Multi-column: Heatmap, Scatter if 2D
    │  └─ Temporal: Time series
    │
    ├─ Caching
    │  └─ Store analysis & charts in memory
    │     (invalidate on new upload)
    │
    └─ Response: JSON with
       ├─ Statistics
       ├─ Chart IDs
       └─ Download links

Frontend Requests: /api/chart/{chart_id}
    ↓
    Return Plotly JSON (or cached)`}
              </pre>
            </div>
            <p>
              <strong>Key Technical Decisions:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Pandas for Data Processing:</strong> Performant for in-memory operations, excellent for exploratory analysis</li>
              <li><strong>Plotly for Visualizations:</strong> Interactive, works in browsers, JSON-serializable (easy to cache/transmit)</li>
              <li><strong>Batching & Caching:</strong> Compute multiple statistics in single Pandas pass; cache results to avoid recomputation</li>
              <li><strong>Lazy Evaluation:</strong> Don't generate all charts immediately. Generate on-demand, cache results</li>
              <li><strong>File Cleanup:</strong> Temporary uploads deleted after 24h (or user logs out)</li>
            </ul>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-3 ml-2">
              <li>
                <strong>Automatic Data Type Detection:</strong> Infers numeric, categorical, datetime, and geographic columns without user guidance
              </li>
              <li>
                <strong>Statistical Profiling:</strong> Auto-computes summary statistics, distributions, outliers, missing data percentages
              </li>
              <li>
                <strong>Smart Chart Suggestions:</strong> Recommends visualizations based on column types and relationships
              </li>
              <li>
                <strong>Interactive Visualizations:</strong> Hover tooltips, zoom, pan, download as PNG—powered by Plotly
              </li>
              <li>
                <strong>Efficient Large File Handling:</strong> Chunked reading prevents memory exhaustion for 100MB+ files
              </li>
              <li>
                <strong>Result Caching:</strong> Batches and caches computations; re-uploads skip redundant analysis
              </li>
              <li>
                <strong>Export Capabilities:</strong> Download processed data as CSV, summary as PDF
              </li>
              <li>
                <strong>Row/Column Filtering:</strong> Drill down into data subsets, regenerate charts
              </li>
            </ul>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Backend</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Python 3.10+</li>
                  <li>Flask (HTTP framework)</li>
                  <li>Werkzeug (file uploads)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Data & Processing</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Pandas (data manipulation)</li>
                  <li>NumPy (numerical computing)</li>
                  <li>SciPy (statistics)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Visualization</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Plotly (interactive charts)</li>
                  <li>Jinja2 (templating)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">DevOps & Storage</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Docker for containerization</li>
                  <li>Temporary file system (local)</li>
                  <li>Redis for distributed caching (optional)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Challenges Faced & Solutions</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Challenge: Large File Processing (100MB+ CSVs)</h3>
                <p className="text-muted-foreground mb-3">
                  Loading entire CSV into memory at once caused out-of-memory errors for large files.
                </p>
                <p>
                  <strong>Solution:</strong> Implemented chunked processing:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 mt-2">
                  <li>Read file in 10MB chunks using Pandas read_csv with chunksize parameter</li>
                  <li>Compute running statistics (mean, variance) across chunks using Welford's algorithm</li>
                  <li>Build visualizations from sampled data, not the full dataset</li>
                  <li>Result: Process 100MB file in ~5 seconds without memory spikes</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Challenge: Slow Visualization Generation</h3>
                <p className="text-muted-foreground mb-3">
                  Generating 10+ charts per dataset was slow—users waited 10-15 seconds.
                </p>
                <p>
                  <strong>Solution:</strong> Lazy chart generation + caching:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 mt-2">
                  <li>Return quick summary immediately (stats + chart IDs)</li>
                  <li>Generate charts on-demand when user clicks</li>
                  <li>Cache results in memory (in-process) or Redis (distributed)</li>
                  <li>Batch related computations (all quantiles in one operation)</li>
                  <li>Result: Summary available in 1-2 seconds; individual charts &lt;500ms</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Challenge: Data Type Detection Errors</h3>
                <p className="text-muted-foreground mb-3">
                  Automatic type inference sometimes failed. ZIP codes interpreted as numbers. Dates not recognized. Categories treated as numerics.
                </p>
                <p>
                  <strong>Solution:</strong> Heuristic-based detection with feedback:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 mt-2">
                  <li>Sample first 1000 rows to infer types</li>
                  <li>Heuristics: numeric if 95%+ values parse as int/float; datetime if patterns match ISO 8601, etc.</li>
                  <li>Allow user to override types in UI</li>
                  <li>Learn from corrections to improve future inference</li>
                  <li>Result: 95%+ accuracy on real-world datasets</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Challenge: High-Cardinality Categorical Data</h3>
                <p className="text-muted-foreground mb-3">
                  Some columns had 10,000+ unique values (e.g., user IDs). Bar charts or pie charts became unreadable.
                </p>
                <p>
                  <strong>Solution:</strong> Smart aggregation:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 mt-2">
                  <li>Detect high-cardinality columns (&gt;100 unique values)</li>
                  <li>For bar charts: Show top 20, group others as "Other"</li>
                  <li>Offer alternative visualizations (cardinality distribution)</li>
                  <li>Suggest numeric aggregation if numeric version exists (e.g., sum user IDs)</li>
                  <li>Result: Readable charts even for wide-cardinality columns</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Challenge: Outlier Detection Causing Chart Distortion</h3>
                <p className="text-muted-foreground mb-3">
                  One extreme outlier could compress visualization scales, making other data invisible.
                </p>
                <p>
                  <strong>Solution:</strong> Robust visualization with outlier handling:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 mt-2">
                  <li>Compute IQR-based outliers (1.5 × IQR outside quartiles)</li>
                  <li>Main chart with outliers visible</li>
                  <li>Secondary chart zoomed to 1st-99th percentile for detail</li>
                  <li>Annotate outliers with values</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Challenge: Concurrent File Upload Conflicts</h3>
                <p className="text-muted-foreground mb-3">
                  Multiple users uploading simultaneously caused temp file name collisions.
                </p>
                <p>
                  <strong>Solution:</strong> Session-based temp storage:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 mt-2">
                  <li>Use session ID + UUID for temp files</li>
                  <li>Store in user-specific directory (if authenticated) or temp session dir</li>
                  <li>Implement auto-cleanup: Delete files older than 24h</li>
                  <li>Result: No collisions; predictable cleanup</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Impact & Results */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Impact & Results</h2>
            <ul className="list-disc list-inside space-y-3 ml-2">
              <li>
                <strong>System Performance:</strong> Processes typical (10MB) CSV in &lt;1 second; large (100MB) files in &lt;5 seconds
              </li>
              <li>
                <strong>Chart Quality:</strong> 95%+ of auto-generated charts are immediately useful (no user tweaking needed)
              </li>
              <li>
                <strong>Caching Efficiency:</strong> 80%+ of requests served from cache; significantly reduces recomputation
              </li>
              <li>
                <strong>Type Detection Accuracy:</strong> 95%+ correct on diverse real-world datasets
              </li>
              <li>
                <strong>User Experience:</strong> Summary available in &lt;2 seconds; charts load on-demand in &lt;500ms
              </li>
              <li>
                <strong>Scalability:</strong> Architecture handles concurrent users; can be easily distributed with Redis
              </li>
            </ul>
          </section>

          {/* Learnings */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What I Learned</h2>
            <div className="space-y-4">
              <p>
                <strong>1. Lazy evaluation is a form of optimization.</strong> I spent time optimizing chart generation, then realized: don't generate charts until needed. This one insight improved perceived performance 10x without touching algorithm efficiency.
              </p>
              <p>
                <strong>2. Automated heuristics require feedback loops.</strong> Type detection worked 80% of the time without user feedback. Adding a simple "wrong type?" button and learning from corrections got us to 95%. Users are willing to help if feedback is frictionless.
              </p>
              <p>
                <strong>3. Visualization design matters as much as data processing.</strong> Fancy algorithms don't matter if charts are unreadable (outliers, high cardinality). I learned to design visualizations that handle edge cases gracefully.
              </p>
              <p>
                <strong>4. Caching complexity grows with feature scope.</strong> Adding filters, sorting, grouping meant cache invalidation became complex. I later learned about cache key design and TTLs. Should've planned this earlier.
              </p>
              <p>
                <strong>5. Real data is messier than synthetic test data.</strong> Missing values, encoding issues, inconsistent formatting—real CSVs have it all. This taught me to be defensive: validate, handle errors gracefully, provide good error messages.
              </p>
            </div>
          </section>

          {/* Future Improvements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Future Improvements</h2>
            <ul className="list-disc list-inside space-y-3 ml-2">
              <li>
                <strong>Predictive Analytics:</strong> Add trend forecasting, anomaly detection, clustering for deeper insights
              </li>
              <li>
                <strong>Multi-Dataset Joins:</strong> Upload multiple CSVs and perform SQL-like joins for cross-dataset analysis
              </li>
              <li>
                <strong>Custom Transformations:</strong> Allow users to define calculated columns, filters, groupings
              </li>
              <li>
                <strong>Sharing & Reports:</strong> Generate static HTML reports from analyses; share datasets with others
              </li>
              <li>
                <strong>Dataset Versioning:</strong> Track changes over time; compare datasets across versions
              </li>
              <li>
                <strong>Real-Time Data Sources:</strong> Connect to databases, APIs for live analytics (currently CSV-only)
              </li>
              <li>
                <strong>Performance Optimization:</strong> Query compilation, GPU acceleration for large-scale datasets
              </li>
            </ul>
          </section>

          {/* Summary */}
          <div className="bg-muted p-6 rounded-lg mt-12 border border-border">
            <h3 className="font-semibold mb-3">Key Takeaway</h3>
            <p className="text-muted-foreground">
              AURA demonstrates that smart backends can replace manual work. By intelligently analyzing data, suggesting visualizations, and caching aggressively, users get instant insights from raw CSVs. The system prioritizes user experience (fast loading, readable charts) over algorithmic perfection. Sometimes the best engineering is invisible—users don't realize how much work the backend is doing.
            </p>
          </div>
        </article>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border space-y-4">
          <div className="flex flex-col gap-3">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>
            <Link
              href="https://github.com/Lucifer267/AURA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View on GitHub
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
