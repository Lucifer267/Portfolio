import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Honeypot for Threat Analysis | Case Study",
  description: "Building a multi-protocol honeypot to capture and analyze real-world malicious attacks.",
};

export default function HoneypotCaseStudy() {
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
            Honeypot
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 italic opacity-90">
            Multi-Protocol Threat Intelligence System
          </p>
          <p className="mt-4 text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-medium max-w-2xl border-l-4 border-primary pl-4">
            A production-ready security research tool capturing real-world attack patterns and threat signatures through high-concurrency service emulation.
          </p>
        </div>

        {/* System Architecture Visualization - IMPROVED CONTRAST */}
        <div className="mb-12 group">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
            Attack Capture Architecture
          </h3>
          <div className="relative rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-sm overflow-hidden min-h-[450px] flex items-center justify-center">
            {/* Visual background element */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            <div className="relative w-full max-w-xl">
              {/* Attacker Layer */}
              <div className="flex justify-around mb-12">
                {["Botnet Scanner", "Exploit Script", "Manual Attacker"].map((attacker, i) => (
                  <div key={attacker} className="flex flex-col items-center animate-bounce" style={{ animationDelay: `${i * 0.2}s`, animationDuration: "3s" }}>
                    <div className="px-3 py-1.5 rounded bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-[10px] font-black text-red-600 dark:text-red-400 uppercase tracking-tighter">
                      {attacker}
                    </div>
                    <div className="h-6 w-px bg-red-300 dark:bg-red-800 mt-2 dashed"></div>
                  </div>
                ))}
              </div>

              {/* Emulation Layer */}
              <div className="bg-slate-900 border-4 border-slate-800 rounded-2xl p-6 shadow-2xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                  TrapHoneypot Console
                </div>
                
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {["SSH:22", "HTTP:80", "FTP:21", "SMB:445"].map(port => (
                    <div key={port} className="p-2 rounded bg-slate-800 border border-slate-700 text-center">
                      <div className="text-[10px] font-mono text-emerald-400">{port}</div>
                      <div className="text-[8px] text-slate-500 font-bold uppercase mt-1 leading-none">Listening</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1 h-full bg-blue-500"></div>
                    <div className="text-[10px] font-mono text-blue-400 mb-1">AsyncIO Event Loop</div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="w-2 h-2 rounded-full bg-blue-500/30 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500"></div>
                    <div className="text-[10px] font-mono text-emerald-400 mb-1">Payload Capture Pipeline</div>
                    <div className="text-[9px] font-mono text-slate-400 truncate">LOG: SSH LOGIN ATTEMPT: user=admin pass=123456 ip=192.168.1.1</div>
                  </div>
                </div>
              </div>

              {/* Analysis Layer */}
              <div className="flex justify-center mt-12 gap-8">
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-lg group-hover:scale-110 transition-transform">
                    <div className="text-[10px] font-black text-slate-600 dark:text-slate-300">GeoIP</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-lg group-hover:scale-110 transition-transform">
                    <div className="text-[10px] font-black text-slate-600 dark:text-slate-300">SQLite</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-lg group-hover:scale-110 transition-transform">
                    <div className="text-[10px] font-black text-slate-600 dark:text-slate-300">Patterns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-4 gap-4 mb-12 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          <div>
            <p className="text-3xl font-black text-slate-900 dark:text-white">10K+</p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter mt-1">Concurrency</p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900 dark:text-white">150+</p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter mt-1">Attacks Logged</p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900 dark:text-white">15+</p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter mt-1">Signatures</p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900 dark:text-white">99.8%</p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter mt-1">System Uptime</p>
          </div>
        </div>

        {/* Skills Demonstrated */}
        <div className="mb-12 p-6 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Skills Demonstrated</h3>
          <div className="flex flex-wrap gap-2">
            {["Python", "AsyncIO", "Networking", "Protocol Design", "Security", "Threat Detection", "FastAPI", "SQLite", "GeoIP Analysis", "Event-Driven Architecture"].map((skill) => (
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
              Security researchers and DevSecOps teams struggle to understand real-world attack behavior. Lab environments and synthetic test data don't capture how actual attackers operate. Running real vulnerable services is risky and legally problematic. There's a critical gap between theoretical threats and genuine attack intelligence.
            </p>
            <div className="p-5 rounded-lg border border-border bg-slate-100 dark:bg-slate-800 my-5">
              <p className="font-semibold text-sm mb-3 text-slate-900 dark:text-slate-50">Requirements:</p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex gap-2"><span className="text-primary">•</span> Emulate multiple services (SSH, HTTP, FTP, SMB) concurrently</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Handle 10,000+ concurrent connections on minimal infrastructure</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Capture detailed attack payloads and behavioral patterns</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Operate reliably 24/7 with zero maintenance</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Identify and classify attack signatures automatically</li>
              </ul>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">The Solution</h2>
            <p className="text-base leading-relaxed text-slate-900 dark:text-slate-100 mb-4">
              I built a production-grade honeypot that emulates vulnerable services convincingly enough to fool automated attack tools and sophisticated attackers, while safely capturing every interaction for analysis.
            </p>
            <div className="space-y-4">
              <div className="pl-5 border-l-2 border-primary">
                <h3 className="font-semibold text-sm mb-2">Core Strategy</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">Rather than implementing full protocol stacks (thousands of lines, error-prone), I focused on minimal protocol surfaces—just enough to fool attackers. SSH returns a version banner. HTTP returns 404. FTP shows a fake directory listing. This pragmatic approach is 100x simpler while remaining effective.</p>
              </div>
              <div className="pl-5 border-l-2 border-primary">
                <h3 className="font-semibold text-sm mb-2">Technical Innovation</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">Async I/O (asyncio) instead of threading enables handling 10,000+ connections on commodity hardware. Event queue architecture decouples network I/O from logging, ensuring no attack data is lost.</p>
              </div>
            </div>
          </section>

          {/* Technical Approach */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Technical Implementation</h2>
            <div className="space-y-4 text-sm text-foreground">
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border">
                <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Async Architecture</p>
                <p className="text-slate-700 dark:text-slate-300">AsyncIO-based event loop handles thousands of lightweight coroutines instead of heavyweight threads. Result: 100x throughput improvement vs. threaded implementation.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border">
                <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Multi-Protocol Emulation</p>
                <p className="text-slate-700 dark:text-slate-300">Minimal protocol handlers for SSH, HTTP, FTP, SMB fool both automated scanners and manual probes. Protocol complexity is kept to &lt;500 lines per protocol.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border">
                <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Non-Blocking Logging</p>
                <p className="text-slate-700 dark:text-slate-300">Event queue + background thread batches writes to SQLite. Network handlers add events to queue (microseconds) rather than blocking on disk I/O.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border">
                <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Threat Intelligence Pipeline</p>
                <p className="text-slate-700 dark:text-slate-300">Automatic attack classification with scoring algorithm. Context-aware detection reduces false positives by correlating multiple signals (payload analysis + IP reputation + login failure patterns).</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border">
                <p className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Attacker Realism</p>
                <p className="text-slate-700 dark:text-slate-300">Simulated latencies, partial protocol compliance, and fake credentials create believable responses that engage sophisticated attackers for longer and richer behavioral data collection.</p>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Backend & Concurrency</p>
                <p className="text-slate-700 dark:text-slate-300">Python 3.10+, FastAPI, AsyncIO</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Networking</p>
                <p className="text-slate-700 dark:text-slate-300">Raw socket programming, Protocol handlers</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Storage & Analysis</p>
                <p className="text-slate-700 dark:text-slate-300">SQLite, GeoIP databases, Regex pattern matching</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">DevOps</p>
                <p className="text-slate-700 dark:text-slate-300">Docker, SystemD, Hetzner Cloud</p>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Key Achievements</h2>
            <div className="grid gap-4 text-sm">
              <div className="p-4 rounded-lg border border-border bg-emerald-50 dark:bg-emerald-950">
                <p className="text-xs font-semibold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider mb-2">Attack Data</p>
                <p className="text-emerald-800 dark:text-emerald-200">Captured 150+ intrusion attempts from 30+ attacker IPs over 3-month deployment</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-emerald-50 dark:bg-emerald-950">
                <p className="text-xs font-semibold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider mb-2">Behavioral Intelligence</p>
                <p className="text-emerald-800 dark:text-emerald-200">Identified 3 distinct attack patterns: mass automated scanning, targeted SQL injections, persistence-focused attacks</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-emerald-50 dark:bg-emerald-950">
                <p className="text-xs font-semibold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider mb-2">Threat Extraction</p>
                <p className="text-emerald-800 dark:text-emerald-200">Derived 15+ new attack signatures that improved production IDS rules</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-emerald-50 dark:bg-emerald-950">
                <p className="text-xs font-semibold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider mb-2">Reliability</p>
                <p className="text-emerald-800 dark:text-emerald-200">99.8% uptime on $5/month cloud infrastructure—handles peak loads without scaling issues</p>
              </div>
            </div>
          </section>

          {/* Engineering Insights */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Engineering Insights</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2 text-sm text-slate-900 dark:text-slate-100">Minimalism Breeds Simplicity & Resilience</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">The breakthrough came from asking "what's the minimum needed to fool attackers?" Full protocol implementation was a trap. Emulating just 100 lines per protocol was 100x more effective.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2 text-sm text-slate-900 dark:text-slate-100">AsyncIO &gt; Threading for I/O-Heavy Systems</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Threading implementation couldn't sustain 500 concurrent connections. AsyncIO achieved 10,000+. Understanding concurrency models is critical for systems engineers.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2 text-sm text-slate-900 dark:text-slate-100">Understanding Your Adversary Drives Design</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">I spent time researching attack tools, malware, forums. This context shaped every decision and made the system actually effective rather than theoretically sound.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2 text-sm text-slate-900 dark:text-slate-100">Observability Is Non-Negotiable</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Extensive logging (connection metrics, queue depth, latencies) transformed debugging from guesswork to forensics. Should have done this from day one.</p>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section>
            <div className="p-6 rounded-lg border border-primary/30 bg-slate-50 dark:bg-slate-900">
              <p className="text-slate-900 dark:text-slate-100 leading-relaxed">
                <span className="font-semibold">The Core Achievement:</span> Created a production honeypot that costs $5/month to operate while capturing genuine threat intelligence used by security researchers and DevSecOps teams. The system processes millions of connection attempts, classifies attacks automatically, and generates 15+ actionable threat signatures that improve defensive systems. Pragmatism and async I/O turned a complex security problem into an elegant, scalable solution.
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
              href="https://github.com/Lucifer267/TrapHoneyPot"
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