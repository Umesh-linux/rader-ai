import React, { useState } from 'react';
import { Radio, Send, Check, MessageSquare, Shield, Activity, Globe, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenDemo }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#020408] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-radar-500/30 flex items-center justify-center text-radar-glow">
                <Radio className="w-4 h-4" />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                RADER<span className="text-radar-glow">.AI</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-6">
              Autonomous radar intelligence and observability platform for enterprise multi-agent foundation model fleets. Sub-millisecond defense with zero data egress.
            </p>

            {/* Operational Status Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-radar-500/30 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-radar-glow animate-pulse" />
              <span>All Systems Operational (99.999% SLA)</span>
            </div>
          </div>

          {/* Column 1: Products */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-mono text-xs uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#features" className="hover:text-radar-glow transition-colors">Neural Radar Guard</a></li>
              <li><a href="#features" className="hover:text-radar-glow transition-colors">Continuous Drift Radar</a></li>
              <li><a href="#features" className="hover:text-radar-glow transition-colors">Latency Micro-Tracing</a></li>
              <li><a href="#features" className="hover:text-radar-glow transition-colors">Autonomous Healer</a></li>
              <li><a href="#features" className="hover:text-radar-glow transition-colors">VPC &amp; Air-Gapped Vault</a></li>
            </ul>
          </div>

          {/* Column 2: Developers */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-mono text-xs uppercase tracking-wider mb-4">
              Developers
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#sdk" className="hover:text-radar-glow transition-colors">Python SDK</a></li>
              <li><a href="#sdk" className="hover:text-radar-glow transition-colors">TypeScript / Node.js</a></li>
              <li><a href="#sdk" className="hover:text-radar-glow transition-colors">Go Client</a></li>
              <li><a href="#sdk" className="hover:text-radar-glow transition-colors">OpenTelemetry Exporter</a></li>
              <li><a href="#sdk" className="hover:text-radar-glow transition-colors">eBPF Probe Guide</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-mono text-xs uppercase tracking-wider mb-3">
              AI Security Intelligence Brief
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Join 18,000+ AI engineers receiving our weekly breakdown of zero-day adversarial prompt injections, hallucination benchmarks, and model safety CVEs.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <input
                type="email"
                required
                placeholder="Enter work email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:border-radar-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-radar-glow hover:bg-radar-400 text-black font-bold text-xs transition-colors flex items-center gap-1 shrink-0"
              >
                {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-3.5 h-3.5" />}
                <span>{subscribed ? 'Subscribed' : 'Subscribe'}</span>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-slate-400 font-mono">
            &copy; {new Date().getFullYear()} Rader AI Inc. All rights reserved. Precision radar observability for artificial intelligence.
          </div>

          {/* Social Icons using SVGs */}
          <div className="flex items-center gap-5">
            {/* GitHub */}
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            {/* X / Twitter */}
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="X / Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Discord */}
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Discord">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
