export function AuraAnalyticsContent() {
  return (
    <>
      {/* Problem Statement */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Problem Statement</h3>
        <p>
          Non-technical users often have datasets (CSVs, spreadsheets) but lack tools to explore them meaningfully. Excel is cumbersome. Python notebooks require coding knowledge. Expensive BI tools are overkill.
        </p>
        <p>
          The challenge: Build a platform where users upload a CSV, get automatic insights, and generate interactive visualizations—all without manual configuration.
        </p>
        <p>
          <strong>Constraints:</strong> Handle diverse data types • Process large files efficiently • Generate visualizations in real-time • Support multiple chart types with smart defaults • Minimal storage footprint
        </p>
      </section>

      {/* Solution Overview */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Solution Overview</h3>
        <p>
          AURA is a backend analytics engine that intelligently processes raw data and surfaces insights automatically.
        </p>
        <p>
          <strong>Core flow:</strong> Upload & Parse → Analyze → Generate Charts → Serve
        </p>
        <p>
          Instead of asking "What would you like to visualize?" the system asks "What interesting patterns do I see?"—and shows them automatically.
        </p>
        <p>
          <strong>Key Innovation:</strong> Smart batching and caching. If the same dataset is processed twice, results are cached. Related computations are batched to reduce redundant operations.
        </p>
      </section>

      {/* Architecture */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">System Architecture</h3>
        <div className="bg-muted p-4 rounded-lg overflow-x-auto mb-6 text-xs">
          <pre className="whitespace-pre-wrap break-words">{`User Upload (CSV)
  ↓
Chunked Reading (for large files)
  ↓
Data Analysis Pipeline
  ├─ Detect column types
  ├─ Compute statistics
  ├─ Identify outliers
  └─ Detect temporal columns
  ↓
Visualization Generation
  ├─ For Numeric: Histogram, Box plot
  ├─ For Categorical: Bar chart
  └─ Multi-column: Heatmap, Scatter
  ↓
Caching + Response`}</pre>
        </div>
        <p>
          <strong>Key Technical Decisions:</strong> Pandas for data processing • Plotly for visualizations • Batching & caching for performance • Lazy evaluation for speed • File cleanup after 24h
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-2 text-sm">
          <li><strong>Automatic Type Detection:</strong> Infers numeric, categorical, datetime, geographic columns</li>
          <li><strong>Statistical Profiling:</strong> Auto-computes summaries, distributions, outliers</li>
          <li><strong>Smart Chart Suggestions:</strong> Recommends visualizations by data type</li>
          <li><strong>Large File Handling:</strong> Chunked reading for 100MB+ files</li>
          <li><strong>Result Caching:</strong> Batches and caches computations</li>
          <li><strong>Export Capabilities:</strong> Download processed data as CSV</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Backend</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Python • Flask • Werkzeug</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Data Processing</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Pandas • NumPy • SciPy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Visualization</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Plotly • Jinja2</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">DevOps</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Docker • Temp file system</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Challenges & Solutions</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-1">Large File Processing</h4>
            <p className="text-sm text-muted-foreground">
              Chunked reading using Pandas with chunksize parameter. Welford's algorithm for running statistics. Processed 100MB in &lt;5 seconds.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-1">Slow Visualization Generation</h4>
            <p className="text-sm text-muted-foreground">
              Lazy chart generation + caching. Summary available in 1-2s; individual charts &lt;500ms on demand.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-1">Data Type Detection Errors</h4>
            <p className="text-sm text-muted-foreground">
              Heuristic-based detection with user feedback loop. ZIP codes preserved, dates recognized. 95%+ accuracy achieved.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Impact & Results</h3>
        <ul className="list-disc list-inside space-y-2 ml-2 text-sm">
          <li><strong>&lt;1 second</strong> for typical (10MB) CSV</li>
          <li><strong>&lt;5 seconds</strong> for large (100MB) files</li>
          <li><strong>95%+</strong> of auto-generated charts immediately useful</li>
          <li><strong>80%+</strong> of requests served from cache</li>
          <li><strong>95%+</strong> type detection accuracy on real datasets</li>
        </ul>
      </section>

      {/* Learnings */}
      <section>
        <h3 className="text-2xl font-bold mb-4">Key Learnings</h3>
        <ul className="list-disc list-inside space-y-2 ml-2 text-sm">
          <li>Lazy evaluation is powerful optimization—don't generate until needed</li>
          <li>Automated heuristics need feedback loops to improve</li>
          <li>Visualization design as important as data processing</li>
          <li>Cache invalidation strategy matters at scale</li>
          <li>Real data is messier than synthetic test data</li>
        </ul>
      </section>
    </>
  );
}
