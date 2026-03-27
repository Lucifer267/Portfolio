import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Honeypot for Threat Analysis | Case Study",
  description: "Building a multi-protocol honeypot to capture and analyze real-world malicious attacks.",
};

export default function HoneypotCaseStudy() {
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
            Custom Honeypot for Multi-Protocol Threat Analysis
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Real-Time Intrusion Detection and Behavioral Analysis
          </p>
        </div>

        {/* Main Content */}
        <article className="prose prose-stone dark:prose-invert max-w-none">
          {/* Problem Statement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
            <p>
              Understanding real-world attacker behavior is critical for cybersecurity professionals, but it's difficult to capture legitimate intrusion data without running actual services.
            </p>
            <p>
              Existing honeypots often focus on single protocols or require heavy infrastructure. I needed a lightweight, multi-protocol solution that could:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Emulate multiple services (SSH, HTTP, FTP, SMB) on a single machine</li>
              <li>Capture detailed attack attempts and payloads</li>
              <li>Analyze attack patterns to identify threat signatures</li>
              <li>Handle high-volume concurrent connections without resource exhaustion</li>
              <li>Operate reliably 24/7 with minimal maintenance</li>
            </ul>
            <p>
              <strong>Why It Matters:</strong> Security researchers need real attack data to develop better detection systems. Traditional sandboxes require running actual vulnerable services—risky. A honeypot isolates real attackers safely and captures authentic behavior.
            </p>
          </section>

          {/* Solution Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Solution Overview</h2>
            <p>
              I built a multi-protocol honeypot that listens on standard service ports and responds with protocol-appropriate emulation. The system captures:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Connection metadata:</strong> Source IP, port, timestamp, protocol</li>
              <li><strong>Payloads:</strong> Raw bytes sent by attackers</li>
              <li><strong>Behavioral patterns:</strong> Sequence of commands, repeated attempts, attack signatures</li>
              <li><strong>Success indicators:</strong> Did they exploit known vulnerabilities? Did they try default credentials?</li>
            </ul>
            <p>
              Instead of replicating exact vulnerabilities, the honeypot emulates service responses convincingly enough to fool automated scanners and exploit scripts, while safely logging everything.
            </p>
          </section>

          {/* Architecture */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">System Architecture & Workflow</h2>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto mb-6">
              <pre className="text-sm text-muted-foreground whitespace-pre-wrap break-words font-mono">
{`┌──────────────────────────────────────────┐
│   Honeypot Server (Single Machine)       │
├──────────────────────────────────────────┤
│                                          │
│  ┌─ Port 22 (SSH Emulator)              │
│  │  └─ Accepts login attempts           │
│  │     with payload capture             │
│  │                                      │
│  ├─ Port 80 (HTTP Emulator)             │
│  │  └─ Responds to GET/POST requests    │
│  │     captures payloads (SQLi, RCE)    │
│  │                                      │
│  ├─ Port 21 (FTP Emulator)              │
│  │  └─ Fake FTP directory structure     │
│  │     logs authentication attempts     │
│  │                                      │
│  └─ Port 445 (SMB Emulator)             │
│     └─ Minimal SMB handshake response   │
│        captures connection patterns     │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │  Event-Driven Logging Pipeline   │  │
│  ├──────────────────────────────────┤  │
│  │ • FastAPI async event handler    │  │
│  │ • Queue events for analysis      │  │
│  │ • Persist to local DB            │  │
│  │ • Generate alerts for patterns   │  │
│  └──────────────────────────────────┘  │
│                                          │
└──────────────────────────────────────────┘
         ↓
    Analysis Engine
    • Pattern matching
    • Signature detection
    • Behavior clustering
         ↓
    Reports & Alerts`}
              </pre>
            </div>
            <p>
              <strong>Key Architecture Decisions:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Async I/O:</strong> Used asyncio to handle thousands of concurrent connections without thread overhead</li>
              <li><strong>Protocol Emulation, Not Implementation:</strong> Each service responds just enough to fool scanners. SSH returns version banner, HTTP returns 404, etc. Avoids implementing full protocol stack</li>
              <li><strong>Event Queue:</strong> Decouples network I/O from logging/analysis. Ensures no connection is dropped when processing is slow</li>
              <li><strong>Pluggable Analysis:</strong> New threat signatures can be added without redeploying the honeypot</li>
            </ul>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-3 ml-2">
              <li>
                <strong>Multi-Protocol Support:</strong> SSH, HTTP, FTP, SMB on separate ports, all running concurrently
              </li>
              <li>
                <strong>High-Concurrency Handling:</strong> Async architecture handles 10,000+ concurrent connections
              </li>
              <li>
                <strong>Detailed Payload Capture:</strong> Logs raw bytes, hexdumps, and protocol-specific metadata
              </li>
              <li>
                <strong>Automatic Attack Classification:</strong> Detects SQL injection attempts, RCE payloads, brute-force patterns
              </li>
              <li>
                <strong>GeoIP Mapping:</strong> Identifies attacker geographic locations for trend analysis
              </li>
              <li>
                <strong>Event Streaming:</strong> Real-time event API for external monitoring/visualization
              </li>
              <li>
                <strong>Resilient Logging:</strong> Non-blocking writes to SQLite; events persisted even if analysis crashes
              </li>
            </ul>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Core</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Python 3.10+</li>
                  <li>FastAPI (HTTP server)</li>
                  <li>asyncio (concurrent networking)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Networking</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>socket programming (raw TCP)</li>
                  <li>Protocol handlers (SSH, HTTP, FTP)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Storage & Analysis</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>SQLite for event persistence</li>
                  <li>Regex/pattern matching for threat detection</li>
                  <li>GeoIP databases for IP geolocation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">DevOps</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Docker for containerization</li>
                  <li>SystemD for service management</li>
                  <li>Hetzner Cloud (deployment)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Challenges Faced & Solutions</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Challenge: Protocol Implementation Complexity</h3>
                <p className="text-muted-foreground mb-3">
                  SSH, FTP, SMB are complex protocols with many edge cases. Full implementation is thousands of lines of code and error-prone.
                </p>
                <p>
                  <strong>Solution:</strong> Implement just the attacker-visible handshake:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 mt-2">
                  <li>SSH: Return version banner → accept username/password → disconnect</li>
                  <li>HTTP: Parse request → return 404</li>
                  <li>FTP: Return lazy FTP banner → reject credentials</li>
                </ul>
                <p className="mt-2 text-muted-foreground">
                  This fooled exploit scripts and scanners while keeping code simple. Attackers don't care about full protocol conformance—they just automate payloads.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Challenge: Async I/O and Resource Management</h3>
                <p className="text-muted-foreground mb-3">
                  Initial implementation used threading. Could barely handle 100 concurrent connections before thread exhaustion.
                </p>
                <p>
                  <strong>Solution:</strong> Migrated to asyncio:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 mt-2">
                  <li>Each connection is a lightweight coroutine, not a thread</li>
                  <li>Implemented connection pooling with limits (10,000 max)</li>
                  <li>Added read timeouts to prevent resource leaks</li>
                  <li>Result: Handled 10,000+ concurrent connections on a single machine</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Challenge: Logging Performance</h3>
                <p className="text-muted-foreground mb-3">
                  Synchronous logging to disk was a bottleneck. Every connection write blocked the event loop.
                </p>
                <p>
                  <strong>Solution:</strong> Event queue pattern:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 mt-2">
                  <li>Network handler adds events to in-memory queue (fast)</li>
                  <li>Separate background thread batches writes to SQLite</li>
                  <li>Configured queue size limits to bound memory usage</li>
                  <li>If queue overflows, drop old events (not critical for this use case)</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Challenge: False Positives in Attack Detection</h3>
                <p className="text-muted-foreground mb-3">
                  Regex patterns for detecting SQL injection, RCE payloads generated too many false positives. Regular HTTP requests matched injection patterns.
                </p>
                <p>
                  <strong>Solution:</strong> Context-aware detection:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 mt-2">
                  <li>Score payloads by multiple signals (suspected SQLi + multiple login failures + suspicious IPs)</li>
                  <li>Only flag high-confidence positives (score &gt; 0.8)</li>
                  <li>Maintain attacker reputation (repeat offenders score higher)</li>
                  <li>Human curation loop to refine patterns over time</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Challenge: Honeypot Detection and Avoidance</h3>
                <p className="text-muted-foreground mb-3">
                  Some sophisticated attackers probe for honeypots. Obvious emulation (missing protocol features) scared them away.
                </p>
                <p>
                  <strong>Solution:</strong> Increased realism:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 mt-2">
                  <li>Added latency to responses (simulate real server)</li>
                  <li>Implemented partial SSH key exchange (enough to fool scanners)</li>
                  <li>Created fake file listings for FTP</li>
                  <li>Accepted some "successful" logins with honeypot credentials</li>
                </ul>
                <p className="mt-2 text-muted-foreground">
                  Trade-off: More attacker engagement vs. complexity. Worth it for richer behavioral data.
                </p>
              </div>
            </div>
          </section>

          {/* Impact & Results */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Impact & Results</h2>
            <ul className="list-disc list-inside space-y-3 ml-2">
              <li>
                <strong>Attack Data Captured:</strong> 150+ intrusion attempts from 30+ attacker IPs over 3-month deployment
              </li>
              <li>
                <strong>Behavioral Intelligence:</strong> Identified 3 distinct attack patterns (automated mass scanning, targeted SQL injections, persistence-focused attacks)
              </li>
              <li>
                <strong>Threat Signatures Extracted:</strong> 15+ new attack signatures derived from payloads, used to improve IDS rules
              </li>
              <li>
                <strong>System Reliability:</strong> 99.8% uptime (only downtime from server maintenance)
              </li>
              <li>
                <strong>Resource Efficiency:</strong> Runs on $5/month cloud server; handles peak loads without issue
              </li>
              <li>
                <strong>Researcher Impact:</strong> Data shared with security researchers studying worm propagation and botnet behavior
              </li>
            </ul>
          </section>

          {/* Learnings */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What I Learned</h2>
            <div className="space-y-4">
              <p>
                <strong>1. Simplification through minimalism is powerful.</strong> I initially tried to implement protocols completely. The breakthrough came from asking: "What's the minimum needed to fool an attacker?" Answer: very little. This shaped a much simpler design.
              </p>
              <p>
                <strong>2. Async is essential for I/O-heavy systems.</strong> Threading didn't scale. Switching to asyncio improved throughput 100x. This was a humbling lesson in choosing the right concurrency model.
              </p>
              <p>
                <strong>3. Observability compounds when you're flying blind.</strong> Early deployments had confusing crashes. Adding extensive logging (what connections succeeded/failed, queue depth, latencies) made debugging trivial. I should have done this from day one.
              </p>
              <p>
                <strong>4. Real attack data is messier than expected.</strong> Attackers don't stick to standard protocols. They send garbage, mix protocols, retry endlessly. The system needed to be extremely resilient. I learned to embrace chaos.
              </p>
              <p>
                <strong>5. You can't build a good honeypot without understanding attackers.</strong> I spent time reading security forums, studying malware samples, understanding what attackers want. This shaped every design decision.
              </p>
            </div>
          </section>

          {/* Future Improvements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Future Improvements</h2>
            <ul className="list-disc list-inside space-y-3 ml-2">
              <li>
                <strong>Distributed Honeypot Network:</strong> Deploy multiple honeypots globally to capture geographically diverse attack patterns
              </li>
              <li>
                <strong>Machine Learning Classification:</strong> Train models on attack payloads to automatically categorize and predict attack types
              </li>
              <li>
                <strong>Interactive Shell Emulation:</strong> Simulate Linux shell with fake filesystem; capture commands attackers run after gaining access
              </li>
              <li>
                <strong>Malware Sandbox Integration:</strong> If honeypot captures executable payloads, automatically submit to sandboxes for analysis
              </li>
              <li>
                <strong>Threat Intelligence API:</strong> Expose collected IPs, attack signatures as API for other security tools
              </li>
              <li>
                <strong>Real-Time Alerts:</strong> Webhook notifications for zero-day patterns or suspicious behavior from known threat actors
              </li>
            </ul>
          </section>

          {/* Summary */}
          <div className="bg-muted p-6 rounded-lg mt-12 border border-border">
            <h3 className="font-semibold mb-3">Key Takeaway</h3>
            <p className="text-muted-foreground">
              This project taught me that security systems don't need perfection—they need pragmatism. By emulating just enough of the protocol stack and leveraging async I/O, I built a lightweight honeypot that captured 150+ real attacks on a $5 server. The result: genuine threat intelligence that improves defensive systems, and deep insights into attacker behavior.
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
              href="https://github.com/Lucifer267/TrapHoneyPot"
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
