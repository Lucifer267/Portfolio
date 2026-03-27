export function HoneypotThreatContent() {
  return (
    <>
      {/* Problem Statement */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Problem Statement</h3>
        <p>
          Understanding real-world attacker behavior is critical for cybersecurity professionals, but it's difficult to capture legitimate intrusion data without running actual services.
        </p>
        <p>
          Existing honeypots often focus on single protocols or require heavy infrastructure. I needed a lightweight, multi-protocol solution that could:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Emulate SSH, HTTP, FTP, SMB on a single machine</li>
          <li>Capture detailed attack attempts and payloads</li>
          <li>Analyze attack patterns in real-time</li>
          <li>Handle high-volume concurrent connections</li>
          <li>Operate reliably 24/7 with minimal maintenance</li>
        </ul>
      </section>

      {/* Solution Overview */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Solution Overview</h3>
        <p>
          I built a multi-protocol honeypot that listens on standard service ports and responds with protocol-appropriate emulation. The system captures connection metadata, payloads, behavioral patterns, and success indicators—all while running safely isolated.
        </p>
        <p>
          Instead of replicating exact vulnerabilities, the honeypot emulates service responses convincingly enough to fool automated scanners and exploit scripts, while safely logging everything.
        </p>
      </section>

      {/* Architecture */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">System Architecture</h3>
        <div className="bg-muted p-4 rounded-lg overflow-x-auto mb-6 text-xs">
          <pre className="whitespace-pre-wrap break-words">{`Honeypot Server (Single Machine)
  ├─ Port 22: SSH Emulator
  ├─ Port 80: HTTP Emulator  
  ├─ Port 21: FTP Emulator
  └─ Port 445: SMB Emulator
      ↓
  Event-Driven Logging Pipeline
  ├─ FastAPI async event handler
  ├─ Queue events
  └─ Analysis Engine → Reports & Alerts`}</pre>
        </div>
        <p>
          <strong>Architecture Decisions:</strong> Async I/O for concurrency, protocol emulation not implementation, event queue pattern for non-blocking logging, pluggable analysis.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-2 text-sm">
          <li><strong>Multi-Protocol Support:</strong> SSH, HTTP, FTP, SMB concurrent</li>
          <li><strong>High-Concurrency:</strong> Handles 10,000+ concurrent connections</li>
          <li><strong>Detailed Payload Capture:</strong> Raw bytes, hexdumps, metadata</li>
          <li><strong>Attack Classification:</strong> Detects SQL injection, RCE payloads, brute force</li>
          <li><strong>GeoIP Mapping:</strong> Identifies attacker locations</li>
          <li><strong>Real-Time Events:</strong> Event API for monitoring</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Core</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Python • FastAPI • asyncio</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Networking</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Socket programming • Protocol handlers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Storage</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>SQLite • GeoIP databases</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">DevOps</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Docker • SystemD • Hetzner Cloud</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Challenges & Solutions</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-1">Protocol Complexity</h4>
            <p className="text-sm text-muted-foreground">
              Implemented minimal handshakes instead of full protocols. SSH returns version → FTP returns banner. Fooled exploit scripts while keeping code simple.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-1">Resource Management</h4>
            <p className="text-sm text-muted-foreground">
              Migrated from threading to asyncio. Each connection is lightweight coroutine. Handled 100x more concurrent connections.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-1">Logging Performance</h4>
            <p className="text-sm text-muted-foreground">
              Event queue pattern: Network handler adds to in-memory queue, background thread batches writes to SQLite. Non-blocking.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Impact & Results</h3>
        <ul className="list-disc list-inside space-y-2 ml-2 text-sm">
          <li><strong>150+ intrusion attempts</strong> captured from 30+ attacker IPs</li>
          <li><strong>3 distinct attack patterns</strong> identified and analyzed</li>
          <li><strong>15+ threat signatures</strong> extracted for IDS improvements</li>
          <li><strong>99.8% uptime</strong> over 3-month deployment</li>
          <li><strong>$5/month infrastructure</strong> cost—highly efficient</li>
        </ul>
      </section>

      {/* Learnings */}
      <section>
        <h3 className="text-2xl font-bold mb-4">Key Learnings</h3>
        <ul className="list-disc list-inside space-y-2 ml-2 text-sm">
          <li>Minimalism through smart tradeoffs beats perfection</li>
          <li>Async is essential for I/O-heavy systems</li>
          <li>Observability compounds when flying blind</li>
          <li>Real attack data is messier than expected</li>
          <li>Understanding attackers shapes every decision</li>
        </ul>
      </section>
    </>
  );
}
