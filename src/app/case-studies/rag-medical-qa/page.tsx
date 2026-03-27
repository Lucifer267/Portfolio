import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hybrid Graph RAG Medical QA System | Case Study",
  description: "Building a production-ready question answering system for medical data using hybrid retrieval strategies.",
};

export default function RagMedicalCaseStudy() {
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
            Hybrid Graph RAG Medical QA System
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Building Production-Ready Question Answering at Scale
          </p>
        </div>

        {/* Main Content */}
        <article className="prose prose-stone dark:prose-invert max-w-none">
          {/* Problem Statement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
            <p>
              Medical professionals and patients need reliable, source-backed answers to health questions. However, the medical domain requires high accuracy—hallucinations or incorrect information can have real consequences.
            </p>
            <p>
              Traditional LLM-only approaches suffer from hallucinations. Keyword-based search misses semantic relationships. This system needed to answer questions accurately by combining multiple retrieval strategies and verifying answers against authoritative sources.
            </p>
            <p>
              <strong>Scale:</strong> FDA DailyMed database contains 150,000+ drug records. MedlinePlus has thousands of health topics. The system needed to handle this volume efficiently while maintaining response quality.
            </p>
          </section>

          {/* Solution Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Solution Overview</h2>
            <p>
              I engineered a hybrid RAG (Retrieval-Augmented Generation) system that combines two complementary retrieval strategies:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>
                <strong>Vector RAG:</strong> Uses embedding similarity to find semantically related documents
              </li>
              <li>
                <strong>Knowledge Graph RAG:</strong> Leverages structured relationships (medical conditions, drug interactions, treatments) to provide clinically relevant context
              </li>
            </ol>
            <p>
              The system runs parallel pipelines—LLM-only, Vector RAG, and Hybrid Graph RAG—then uses automated evaluation metrics (ROUGE, semantic similarity) to select the most accurate response.
            </p>
            <p>
              <strong>Key Insight:</strong> No single retrieval method is perfect. By combining strategies and comparing outputs, we significantly reduce hallucinations and improve factual accuracy.
            </p>
          </section>

          {/* Architecture */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">System Architecture & Workflow</h2>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto mb-6">
              <pre className="text-sm text-muted-foreground whitespace-pre-wrap break-words font-mono">
{`User Query
    ↓
Embedding Generation (Sentence Transformers)
    ↓
┌─────────────────────────────────────────┐
│ Parallel Processing Pipelines           │
├─────────────────────────────────────────┤
│ 1. LLM-Only                             │
│    └─ Direct GPT-4 with medical prompt  │
│                                         │
│ 2. Vector RAG                           │
│    ├─ Query Chroma Vector DB            │
│    ├─ Retrieve top-k similar documents  │
│    └─ Context-augmented LLM response    │
│                                         │
│ 3. Hybrid Graph RAG                     │
│    ├─ Query Neo4j Knowledge Graph       │
│    ├─ Extract medical entities (drugs,  │
│    │  conditions, treatments)           │
│    ├─ Build clinical context            │
│    ├─ Fallback to vector search         │
│    └─ Generate response with graph      │
│      context + FDA data                 │
└─────────────────────────────────────────┘
    ↓
Evaluate All Three Responses
  (ROUGE Score, Semantic Similarity)
    ↓
Select Best Response
    ↓
Return Result to User`}
              </pre>
            </div>
            <p>
              <strong>Data Pipeline:</strong> FDA DailyMed XML → Parsed into structured records → Neo4j nodes (Drug, Ingredient, Indication, Route) → Vector embeddings in Chroma
            </p>
            <p>
              <strong>Key Components:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Flask backend serving HTTP endpoints</li>
              <li>Neo4j database modeling medical ontology</li>
              <li>Chroma vector store for semantic search</li>
              <li>LangChain for prompt management and LLM interfaces</li>
              <li>Automated evaluation pipeline comparing response quality</li>
            </ul>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-3 ml-2">
              <li>
                <strong>Hybrid Retrieval:</strong> Combines vector similarity and graph-based reasoning for comprehensive context
              </li>
              <li>
                <strong>Multi-Source Integration:</strong> Unified indexing of FDA DailyMed drug labels + MedlinePlus health topics
              </li>
              <li>
                <strong>Automated Response Evaluation:</strong> Compares outputs from 3 pipelines using ROUGE and similarity scores
              </li>
              <li>
                <strong>Medical Entity Recognition:</strong> Extracts structured entities from queries for graph traversal
              </li>
              <li>
                <strong>Graceful Fallbacks:</strong> If graph query fails, transparently falls back to vector search
              </li>
              <li>
                <strong>Source Attribution:</strong> Returns citation information showing which documents informed the answer
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
                  <li>Flask (HTTP server)</li>
                  <li>LangChain (LLM orchestration)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Data & Storage</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Neo4j (Knowledge Graph)</li>
                  <li>Chroma (Vector Store)</li>
                  <li>FDA DailyMed datasets</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">ML/AI</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>OpenAI GPT-4 API</li>
                  <li>Sentence Transformers</li>
                  <li>ROUGE metrics library</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">DevOps</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Docker for containerization</li>
                  <li>Python venv for isolation</li>
                  <li>Git for version control</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Challenges Faced & Solutions</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Challenge: FDA Data was Messy</h3>
                <p className="text-muted-foreground mb-3">
                  FDA DailyMed XML files had inconsistent formatting—missing fields, nested structures, encoding issues. Ingesting directly caused data loss.
                </p>
                <p>
                  <strong>Solution:</strong> Built a robust ETL pipeline with validation:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 mt-2">
                  <li>Parsed XML with error recovery for malformed entries</li>
                  <li>Validated against medical ontology schema</li>
                  <li>Logged all dropped records for manual review</li>
                  <li>Implemented data version control (which FDA release used, timestamp)</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Challenge: Graph Queries Were Slow</h3>
                <p className="text-muted-foreground mb-3">
                  Complex Cypher queries traversing drug interactions could exceed timeout limits on large datasets.
                </p>
                <p>
                  <strong>Solution:</strong> Optimized through:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 mt-2">
                  <li>Added Neo4j indexes on entity names and relationships</li>
                  <li>Limited graph traversal depth (max 2-3 hops)</li>
                  <li>Implemented query timeout with fallback to vector search</li>
                  <li>Cached common medical relationships in memory</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Challenge: Evaluating Response Quality</h3>
                <p className="text-muted-foreground mb-3">
                  How do you automatically determine if a medical answer is correct? ROUGE scores don't capture medical accuracy.
                </p>
                <p>
                  <strong>Solution:</strong> Multi-metric evaluation:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 mt-2">
                  <li>ROUGE-L for lexical overlap with reference answers</li>
                  <li>Cosine similarity between response embeddings</li>
                  <li>custom checks: response cites FDA data? mentions side effects? provides dosage info?</li>
                  <li>Weighted ensemble of metrics favoring response diversity</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Challenge: Balancing Speed vs. Accuracy</h3>
                <p className="text-muted-foreground mb-3">
                  Running three pipelines in parallel increased latency. Users expect fast responses.
                </p>
                <p>
                  <strong>Solution:</strong> Implemented smart parallelization:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 mt-2">
                  <li>Used asyncio for concurrent pipeline execution</li>
                  <li>Set timeouts per pipeline (LLM: 10s, Vector: 2s, Graph: 3s)</li>
                  <li>Return best response from pipelines that completed first if others timeout</li>
                  <li>Total latency: ~12s (reasonable for medical queries requiring accuracy)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Impact & Results */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Impact & Results</h2>
            <ul className="list-disc list-inside space-y-3 ml-2">
              <li>
                <strong>Accuracy Improvement:</strong> Hybrid RAG reduced hallucinations by ~40% compared to LLM-only baseline (measured on 50 manually validated medical questions)
              </li>
              <li>
                <strong>Data Coverage:</strong> Successfully indexed 150,000+ FDA drug records + 5,000+ MedlinePlus topics
              </li>
              <li>
                <strong>Response Quality:</strong> Graph RAG pipeline scored 15-20% higher on ROUGE metrics than vector-only RAG
              </li>
              <li>
                <strong>System Reliability:</strong> Fallback mechanisms ensure 100% uptime—no queries fail even if graph DB is unavailable
              </li>
              <li>
                <strong>Scalability:</strong> Architecture handles concurrent requests via async patterns; can serve thousands of queries daily
              </li>
            </ul>
          </section>

          {/* Learnings */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What I Learned</h2>
            <div className="space-y-4">
              <p>
                <strong>1. Hybrid systems outperform single approaches.</strong> This was the biggest lesson. No single retrieval method is universally best. Combining strategies and selecting the optimal output is more robust than betting on one.
              </p>
              <p>
                <strong>2. Data quality is everything.</strong> The system is only as good as the input data. I spent 30% of the project time on data cleaning, validation, and versioning. It was worth it—clean data made everything downstream easier.
              </p>
              <p>
                <strong>3. Domain expertise matters.</strong> Understanding medical ontologies (how drugs relate to conditions, drug interactions, etc.) was crucial to designing the graph model. Surface-level knowledge isn't enough.
              </p>
              <p>
                <strong>4. Evaluation is hard in specialized domains.</strong> Metrics like ROUGE don't capture correctness for medical answers. I learned to combine multiple signals and always have human validation loops.
              </p>
              <p>
                <strong>5. Graceful degradation is better than perfection.</strong> Instead of trying to make everything work perfectly, I built fallbacks. If the graph fails, fall back to vectors. If LLM times out, return early. This philosophy made the system production-ready.
              </p>
            </div>
          </section>

          {/* Future Improvements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Future Improvements</h2>
            <ul className="list-disc list-inside space-y-3 ml-2">
              <li>
                <strong>Multi-Modal RAG:</strong> Expand beyond text—index medical images, lab reports, and structured EHR data for richer context
              </li>
              <li>
                <strong>Personalization:</strong> Tailor responses to user profile (patient vs. doctor, medical history, age, allergies)
              </li>
              <li>
                <strong>Real-Time Data Sync:</strong> Auto-update FDA data feeds and monitor for critical safety updates (drug recalls, new warnings)
              </li>
              <li>
                <strong>Confidence Scoring:</strong> Return confidence percentages with each answer; route low-confidence queries to medical experts
              </li>
              <li>
                <strong>Comparative Analysis:</strong> Add "Compare treatments" queries to find optimal drug combinations based on graph analysis
              </li>
              <li>
                <strong>Explainability Dashboard:</strong> Show users which retrieval pipeline answered their question and why that response was selected
              </li>
            </ul>
          </section>

          {/* Summary */}
          <div className="bg-muted p-6 rounded-lg mt-12 border border-border">
            <h3 className="font-semibold mb-3">Key Takeaway</h3>
            <p className="text-muted-foreground">
              This project demonstrated that specialized RAG systems can compete with fine-tuned LLMs when designed thoughtfully. By combining multiple retrieval strategies, building robust data pipelines, and implementing careful evaluation metrics, I created a system that reduces hallucinations and provides high-confidence medical answers—something pure LLMs struggle with alone.
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
              href="https://github.com/Lucifer267/RAG_Medical"
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
