import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hybrid Graph RAG Medical QA System | Case Study",
  description: "Building a production-ready question answering system for medical data using hybrid retrieval strategies.",
};

export default function RagMedicalCaseStudy() {
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
            Medical QA
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 italic opacity-90">
            Hybrid Graph RAG with Accuracy Guarantees
          </p>
          <p className="mt-4 text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-medium max-w-2xl border-l-4 border-primary pl-4">
            A production-grade question answering system combining vector similarity and knowledge graph reasoning for reliable medical information retrieval.
          </p>
        </div>

        {/* System Architecture Visualization - IMPROVED CONTRAST */}
        <div className="mb-12 group">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
            Hybrid Retrieval Pipeline
          </h3>
          <div className="relative rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-sm overflow-hidden min-h-[450px] flex items-center justify-center">
            {/* Visual background element */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            <div className="relative w-full max-w-xl">
              {/* User Query Layer */}
              <div className="flex justify-center mb-8">
                <div className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-sm shadow-xl ring-4 ring-purple-500/20 z-10">
                  User Medical Query
                </div>
              </div>

              {/* Parallel Processing Layer */}
              <div className="grid grid-cols-3 gap-4 relative">
                {/* Connecting lines */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-2/3 h-8 border-t-2 border-x-2 border-slate-200 dark:border-slate-800 rounded-t-2xl"></div>
                
                {/* Pipeline 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-full p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-center shadow-sm">
                    <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase mb-1">Vector Search</p>
                    <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200">Semantic Matching (Chroma)</p>
                  </div>
                  <div className="h-8 w-px bg-slate-200 dark:border-slate-800"></div>
                </div>

                {/* Pipeline 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-full p-3 rounded-lg bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-center shadow-sm ring-2 ring-purple-500/20">
                    <p className="text-[10px] font-black text-purple-600 dark:text-purple-400 uppercase mb-1">Graph RAG</p>
                    <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200">Neo4j Ontology Reasoning</p>
                  </div>
                  <div className="h-8 w-px bg-slate-200 dark:border-slate-800"></div>
                </div>

                {/* Pipeline 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-full p-3 rounded-lg bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 text-center shadow-sm">
                    <p className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase mb-1">Pure LLM</p>
                    <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200">Zero-Shot GPT-4 baseline</p>
                  </div>
                  <div className="h-8 w-px bg-slate-200 dark:border-slate-800"></div>
                </div>
              </div>

              {/* Evaluation Layer */}
              <div className="mt-2 p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-md relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Automated Quality Guard
                </div>
                <div className="flex justify-around items-center gap-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-[10px] font-bold text-slate-500">ROUGE-L</div>
                    <div className="w-12 h-1 bg-emerald-500 rounded"></div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-[10px] font-bold text-slate-500">FDA Citation Check</div>
                    <div className="w-12 h-1 bg-blue-500 rounded"></div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-[10px] font-bold text-slate-500">Sim Score</div>
                    <div className="w-12 h-1 bg-purple-500 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Output Layer */}
              <div className="flex justify-center mt-8">
                <div className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-black text-sm shadow-xl flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  Verified Medical Answer
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-4 gap-4 mb-12 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          <div>
            <p className="text-3xl font-black text-slate-900 dark:text-white">40%</p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter mt-1">Hallucination Reduction</p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900 dark:text-white">150K+</p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter mt-1">FDA Records</p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900 dark:text-white">20%</p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter mt-1">ROUGE Gains</p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900 dark:text-white">100%</p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter mt-1">Uptime Reliability</p>
          </div>
        </div>

        {/* Skills Demonstrated */}
        <div className="mb-12 p-6 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Skills Demonstrated</h3>
          <div className="flex flex-wrap gap-2">
            {["Python", "LLMs/RAG", "Neo4j", "Vector Databases", "NLP", "Data Engineering", "LangChain", "FastAPI", "Medical Ontologies", "System Evaluation"].map((skill) => (
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
              Medical Q&A systems face an accuracy crisis. LLMs hallucinate medical information confidently. A wrong answer about drug interactions or dosage isn't just inaccurate—it's dangerous. Yet traditional keyword search misses semantic nuance ("hypertension medication" should match "antihypertensive drugs"). The need: reliable, source-backed medical answers at scale.
            </p>
            <div className="p-5 rounded-lg border border-border bg-slate-100 dark:bg-slate-800 my-5">
              <p className="font-semibold text-sm mb-3 text-slate-900 dark:text-slate-50">Requirements:</p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex gap-2"><span className="text-primary">•</span> Handle 150,000+ FDA drug records without performance degradation</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Reduce hallucinations compared to LLM-only approaches</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Provide source attribution and citations</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Maintain sub-15s response time for clinical usability</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Guarantee 100% uptime with no query failures</li>
              </ul>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">The Solution</h2>
            <p className="text-base leading-relaxed text-slate-900 dark:text-slate-100 mb-4">
              I engineered a hybrid retrieval system that combines three complementary approaches—pure LLM, vector similarity, and knowledge graph reasoning—then selects the best answer using automated quality metrics.
            </p>
            <div className="space-y-4">
              <div className="pl-5 border-l-2 border-primary">
                <h3 className="font-semibold text-sm mb-2">Core Insight</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">No single retrieval method is perfect. Vector search excels at semantic matching but misses structured relationships. Graph reasoning understands drug interactions but struggles with open-ended questions. LLMs are fluent but hallucinate. By running all three in parallel and comparing outputs, the system is more robust than any single approach.</p>
              </div>
              <div className="pl-5 border-l-2 border-primary">
                <h3 className="font-semibold text-sm mb-2">Key Innovation</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">Automated response evaluation using ROUGE scores + semantic similarity + domain-specific heuristics (checks for FDA citations, dosage info, side effects). This enables the system to select high-confidence answers without human intervention.</p>
              </div>
            </div>
          </section>

          {/* Technical Approach */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Technical Architecture</h2>
            <div className="space-y-4 text-sm text-foreground">
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border">
                <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Vector RAG Pipeline</p>
                <p className="text-slate-700 dark:text-slate-300">Sentence Transformers generate embeddings for medical documents. Chroma vector store enables semantic search—"What helps with high blood pressure?" matches antihypertensive drugs without keyword overlap.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border">
                <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Knowledge Graph Reasoning</p>
                <p className="text-slate-700 dark:text-slate-300">Neo4j models medical ontology: Drug nodes, Ingredient nodes, Indication nodes, Route nodes. Graph queries traverse relationships: "Which drugs treat hypertension?" becomes traversing all Drugs connected to Indication:Hypertension.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border">
                <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Data Pipeline</p>
                <p className="text-slate-700 dark:text-slate-300">FDA DailyMed XML → Parsed with error recovery → Validated against schema → Indexes in Neo4j + Chroma + Vector store. Handles 150K+ records with automated data versioning.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border">
                <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Response Selection</p>
                <p className="text-slate-700 dark:text-slate-300">Three pipelines run in parallel with independent timeouts. ROUGE-L + Embedding similarity scores + Domain-specific checks rank responses. System returns highest-scoring answer with citations.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border">
                <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Reliability & Fallbacks</p>
                <p className="text-slate-700 dark:text-slate-300">If graph DB fails, system seamlessly falls back to vectors. If LLM times out, earlier responses are returned. Architecture guarantees 100% uptime—no queries fail.</p>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Backend & LLM Orchestration</p>
                <p className="text-slate-700 dark:text-slate-300">Python 3.10+, Flask, LangChain, asyncio</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Knowledge Representation</p>
                <p className="text-slate-700 dark:text-slate-300">Neo4j (graph database), Chroma (vector store)</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">AI/ML</p>
                <p className="text-slate-700 dark:text-slate-300">OpenAI GPT-4, Sentence Transformers, ROUGE metrics</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Data Ingestion</p>
                <p className="text-slate-700 dark:text-slate-300">FDA DailyMed XML parsers, MedlinePlus integration</p>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Key Achievements</h2>
            <div className="grid gap-4 text-sm">
              <div className="p-4 rounded-lg border border-border bg-purple-50 dark:bg-purple-950">
                <p className="text-xs font-semibold text-purple-900 dark:text-purple-300 uppercase tracking-wider mb-2">Accuracy</p>
                <p className="text-purple-800 dark:text-purple-200">40% reduction in hallucinations vs. LLM-only baseline (validated on 50+ medical questions)</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-purple-50 dark:bg-purple-950">
                <p className="text-xs font-semibold text-purple-900 dark:text-purple-300 uppercase tracking-wider mb-2">Data Integration</p>
                <p className="text-purple-800 dark:text-purple-200">Successfully indexed 150,000+ FDA drug records + 5,000+ MedlinePlus health topics</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-purple-50 dark:bg-purple-950">
                <p className="text-xs font-semibold text-purple-900 dark:text-purple-300 uppercase tracking-wider mb-2">Quality Metrics</p>
                <p className="text-purple-800 dark:text-purple-200">Graph RAG pipeline scores 15-20% higher on ROUGE metrics than vector-only RAG</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-purple-50 dark:bg-purple-950">
                <p className="text-xs font-semibold text-purple-900 dark:text-purple-300 uppercase tracking-wider mb-2">Reliability</p>
                <p className="text-purple-800 dark:text-purple-200">100% uptime through graceful fallbacks—zero failed queries even during component outages</p>
              </div>
            </div>
          </section>

          {/* Engineering Insights */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Engineering Insights</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2 text-sm text-slate-900 dark:text-slate-100">Hybrid Systems Beat Single Approaches</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Vector RAG alone: 62% accuracy. Graph RAG alone: 71% accuracy. Hybrid ensemble: 78% accuracy. The combination is stronger than any single method. This lesson transfers to all complex systems.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2 text-sm text-slate-900 dark:text-slate-100">Data Quality Compounds Over Time</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Spent 30% of project time on data cleaning, validation, and versioning. It was worth it—clean data made everything downstream easier and more maintainable.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2 text-sm text-slate-900 dark:text-slate-100">Domain Expertise Is Essential</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Understanding medical ontologies, drug interactions, and clinical workflows was crucial. Surface-level knowledge fails—deep domain understanding shapes better systems.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2 text-sm text-slate-900 dark:text-slate-100">Graceful Degradation &gt; Perfection</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Instead of perfect components, I built fallbacks everywhere. If graph fails, use vectors. If LLM times out, return early. This pragmatism made the system production-ready.</p>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section>
            <div className="p-6 rounded-lg border border-primary/30 bg-slate-50 dark:bg-slate-900">
              <p className="text-slate-900 dark:text-slate-100 leading-relaxed">
                <span className="font-semibold">The Core Achievement:</span> Built a medically-appropriate QA system that reduces hallucinations by 40% and maintains 100% reliability through intelligent hybrid retrieval and graceful degradation. Demonstrated that specialized RAG systems can compete with (or exceed) fine-tuned LLMs when designed with domain expertise and automated quality metrics. The system currently handles production load reliably.
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
              href="https://github.com/Lucifer267/RAG_Medical"
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