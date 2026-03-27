export function RagMedicalQAContent() {
  return (
    <>
      {/* Problem Statement */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Problem Statement</h3>
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
        <h3 className="text-2xl font-bold mb-4">Solution Overview</h3>
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
        <h3 className="text-2xl font-bold mb-4">System Architecture & Workflow</h3>
        <div className="bg-muted p-4 rounded-lg overflow-x-auto mb-6 text-xs">
          <pre className="whitespace-pre-wrap break-words">{`User Query → Embedding Generation → Parallel Processing
  1. LLM-Only: Direct response
  2. Vector RAG: Semantic search
  3. Hybrid Graph RAG: Graph context + FDA data
    ↓
Evaluate All Three → Select Best Response → Return`}</pre>
        </div>
        <p>
          <strong>Data Pipeline:</strong> FDA DailyMed XML → Parsed into structured records → Neo4j nodes → Vector embeddings in Chroma
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Key Features</h3>
        <ul className="list-disc list-inside space-y-3 ml-2">
          <li><strong>Hybrid Retrieval:</strong> Combines vector similarity and graph-based reasoning</li>
          <li><strong>Multi-Source Integration:</strong> FDA DailyMed + MedlinePlus unified indexing</li>
          <li><strong>Automated Response Evaluation:</strong> Compares 3 pipelines using ROUGE and similarity scores</li>
          <li><strong>Medical Entity Recognition:</strong> Extracts entities from queries for graph traversal</li>
          <li><strong>Source Attribution:</strong> Returns citations showing source documents</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Backend</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Python • Flask • LangChain</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Storage</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Neo4j • Chroma • FDA Data</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">ML/AI</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>OpenAI GPT-4 • Sentence Transformers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">DevOps</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Docker • Python venv • Git</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Challenges Faced & Solutions</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-1">FDA Data was Messy</h4>
            <p className="text-sm text-muted-foreground">
              Built robust ETL with validation, error recovery, and data versioning. Logged all dropped records for review.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-1">Graph Queries Were Slow</h4>
            <p className="text-sm text-muted-foreground">
              Added Neo4j indexes, limited traversal depth, implemented query timeouts with fallback to vector search, and cached common relationships.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-1">Response Evaluation</h4>
            <p className="text-sm text-muted-foreground">
              Implemented multi-metric evaluation combining ROUGE, semantic similarity, and custom checks (mentions FDA data, side effects, dosage).
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Impact & Results</h3>
        <ul className="list-disc list-inside space-y-2 ml-2 text-sm">
          <li><strong>40% reduction</strong> in hallucinations vs LLM-only baseline</li>
          <li><strong>150,000+</strong> FDA drug records indexed</li>
          <li><strong>15-20% higher</strong> ROUGE scores for graph RAG vs vector-only</li>
          <li><strong>100% uptime</strong> with fallback mechanisms</li>
        </ul>
      </section>

      {/* Learnings */}
      <section>
        <h3 className="text-2xl font-bold mb-4">Key Learnings</h3>
        <ul className="list-disc list-inside space-y-2 ml-2 text-sm">
          <li>Hybrid systems outperform single approaches</li>
          <li>Data quality is everything—spent 30% of project time on cleaning</li>
          <li>Domain expertise shapes architecture decisions</li>
          <li>Graceful degradation trumps perfection</li>
        </ul>
      </section>
    </>
  );
}
