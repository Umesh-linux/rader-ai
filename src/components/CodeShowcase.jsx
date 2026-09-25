import React, { useState } from 'react';
import { Terminal, Copy, Check, Code2, Sparkles, BookOpen } from 'lucide-react';

export default function CodeShowcase({ onOpenDemo }) {
  const [activeLang, setActiveLang] = useState('python');
  const [copied, setCopied] = useState(false);

  const snippets = {
    python: `# Install: pip install rader-ai
import rader
from openai import OpenAI

# Initialize Rader AI radar beacon
rader.init(
    api_key="rdr_live_99x81a...",
    project="enterprise-ai-fleet",
    enforce_guardrails=True
)

client = OpenAI()

# Automatic 360° radar sweep & threat interception
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Analyze quarterly vector trends."}]
)

print(response.choices[0].message.content)
# Rader AI intercepted 0 threats | Latency overhead: 1.2ms`,

    typescript: `// Install: npm install @rader-ai/sdk openai
import { RaderAI } from "@rader-ai/sdk";
import OpenAI from "openai";

const rader = new RaderAI({
  apiKey: process.env.RADER_API_KEY,
  autoMitigate: true,
  maxLatencyEnvelopeMs: 50
});

const openai = new OpenAI();
// Wrap standard client with zero-proxy radar telemetry
const client = rader.wrap(openai);

const completion = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Query financial data" }]
});

console.log("Telemetry Beacon ID:", completion.raderBeaconId);`,

    curl: `# Direct REST / Edge Interception Proxy
curl -X POST https://api.rader.ai/v1/radar/sweep \\
  -H "Authorization: Bearer rdr_live_99x81a..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "claude-3-5-sonnet-20241022",
    "prompt": "Evaluate agent transaction security",
    "guardrails": ["prompt_injection", "pii_redact", "drift_alert"]
  }'`,

    go: `// Install: go get github.com/rader-ai/rader-go
package main

import (
    "context"
    "fmt"
    "github.com/rader-ai/rader-go"
)

func main() {
    client := rader.NewClient("rdr_live_99x81a...")
    
    // Execute real-time telemetry scan
    report, err := client.Sweep(context.Background(), rader.SweepParams{
        Payload: "Summarize agent memory buffer",
    })
    if err != nil {
        panic(err)
    }
    fmt.Printf("Radar Status: %s (Latency: %dms)\\n", report.Status, report.LatencyMs)
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sdk" className="py-24 bg-[#04070d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-radar-500/10 border border-radar-500/25 text-xs font-mono text-radar-400 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            3-LINE INTEGRATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Developer-First AI Telemetry SDK
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Wrap your existing OpenAI, Anthropic, LangChain, or custom vLLM instances in 3 lines of code. No rewrites or complex proxy changes required.
          </p>
        </div>

        {/* Code Showcase Terminal */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Header Bar */}
          <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            
            {/* Language Selector tabs */}
            <div className="flex items-center gap-2">
              {['python', 'typescript', 'curl', 'go'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-colors uppercase ${
                    activeLang === lang
                      ? 'bg-radar-500/20 text-radar-glow border border-radar-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-radar-glow" />
                  <span className="text-radar-glow">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Code Content Window */}
          <div className="p-6 bg-[#020509] overflow-x-auto text-sm font-mono leading-relaxed text-slate-300">
            <pre className="selection:bg-radar-500/30">
              <code>{snippets[activeLang]}</code>
            </pre>
          </div>

          {/* Footer stats bar */}
          <div className="px-6 py-3 bg-slate-900/60 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-4">
              <span>● ZERO-DEPENDENCY</span>
              <span>● ASYNC BACKGROUND BATCHING</span>
              <span>● OPEN-TELEMETRY NATIVE</span>
            </div>
            <button
              onClick={onOpenDemo}
              className="text-radar-glow hover:underline flex items-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Full API Reference Docs →</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
