import React, { useState } from 'react';
import { ArrowRight, Cpu, Layers, ShieldCheck, Zap, Server, Network, Terminal, CheckCircle } from 'lucide-react';

export default function Architecture({ onOpenDemo }) {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: '01',
      title: 'Universal Ingestion',
      subtitle: 'Zero-Proxy eBPF & OpenTelemetry',
      description: 'Captures raw prompt inputs, agent tool invocations, and vector embeddings at the kernel or SDK layer with zero latency penalties.',
      latency: '< 0.2ms',
      specs: [
        'Automatic auto-instrumentation for OpenAI, Anthropic, Gemini & vLLM',
        'eBPF kernel-level socket eavesdropping (zero-overhead)',
        'OTel-compliant telemetry exporter with compression',
      ],
      diagram: 'INGESTION ENGINE [eBPF + OTel SDK]',
    },
    {
      step: '02',
      title: 'Neural Radar Engine',
      subtitle: 'Vectorized Threat & Drift Classifier',
      description: 'Streaming inference runs parallel transformer-based classifiers on token streams to identify jailbreaks, toxic inputs, and semantic divergence.',
      latency: '< 0.9ms',
      specs: [
        'Sub-millisecond vectorized cosine distance tracking',
        'Multi-model ensemble voting for hallucination scoring',
        'Continuous baseline calibration on your production distribution',
      ],
      diagram: 'NEURAL RADAR CORE [Transformer Array]',
    },
    {
      step: '03',
      title: 'Threat Matrix & Policy',
      subtitle: 'Enterprise Guardrails & Rules',
      description: 'Enforces custom enterprise security policies, PII redaction rules, regulatory filters, and model safety constraints.',
      latency: '< 0.3ms',
      specs: [
        'SOC2 Type II and HIPAA automated compliance tags',
        'Dynamic regex + LLM-assisted PII masking',
        'Zero-trust token integrity verification',
      ],
      diagram: 'POLICY MATRIX [Custom Rules + Safety Vault]',
    },
    {
      step: '04',
      title: 'Autonomous Defense',
      subtitle: 'Self-Healing Failover & Quarantine',
      description: 'Automatically intercepts compromised tokens, reroutes traffic to fallback providers, and isolates malfunctioning autonomous agents.',
      latency: '< 0.4ms',
      specs: [
        'Instant circuit-breaker invocation for runaway agent loops',
        'Hot-swapping between model providers without dropping context',
        'Instant incident alerting to Slack, PagerDuty, and SIEM',
      ],
      diagram: 'AUTONOMOUS HEALER [Failover & Quarantine]',
    },
  ];

  return (
    <section id="architecture" className="py-24 bg-[#03060c] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-radar-500/10 border border-radar-500/25 text-xs font-mono text-radar-400 mb-3">
            <Network className="w-3.5 h-3.5" />
            PIPELINE ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Rader AI Protects Your AI Fleet
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            High-throughput, sub-millisecond pipeline designed for millions of concurrent LLM requests per second.
          </p>
        </div>

        {/* Step selector tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {steps.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`p-5 rounded-xl text-left border transition-all ${
                activeStep === idx
                  ? 'bg-slate-900 border-radar-500/50 shadow-[0_0_20px_rgba(0,255,136,0.15)] ring-1 ring-radar-500/30'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`font-mono text-xs px-2 py-0.5 rounded ${
                  activeStep === idx ? 'bg-radar-glow text-black font-bold' : 'bg-slate-800 text-slate-400'
                }`}>
                  STAGE {s.step}
                </span>
                <span className="text-[11px] font-mono text-radar-400">{s.latency}</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">{s.title}</h3>
              <p className="text-xs text-slate-400 truncate">{s.subtitle}</p>
            </button>
          ))}
        </div>

        {/* Deep Dive Panel */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-radar-glow font-mono text-xs uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-radar-glow animate-ping" />
                ACTIVE DEEP INSPECTION: STAGE {steps[activeStep].step}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {steps[activeStep].title} — <span className="text-radar-300 font-medium">{steps[activeStep].subtitle}</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                {steps[activeStep].specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-radar-glow shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={onOpenDemo}
                  className="px-5 py-2.5 rounded-lg bg-radar-glow hover:bg-radar-400 text-black font-bold text-xs transition-colors shadow-lg"
                >
                  Inspect Live Pipeline
                </button>
                <span className="text-xs font-mono text-slate-500">
                  TOTAL END-TO-END OVERHEAD: &lt; 1.8ms
                </span>
              </div>
            </div>

            {/* Architectural Visual Box */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-5 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-radar-glow" />
                    Pipeline Topology View
                  </span>
                  <span className="text-[10px] text-radar-400 bg-radar-500/10 px-2 py-0.5 rounded">
                    SYS.V4
                  </span>
                </div>

                {/* Animated Pipeline Graphic */}
                <div className="space-y-3 text-[11px]">
                  {steps.map((st, i) => (
                    <div
                      key={st.step}
                      className={`p-3 rounded-lg border transition-all flex items-center justify-between ${
                        activeStep === i
                          ? 'bg-radar-500/10 border-radar-500/50 text-white font-semibold'
                          : 'bg-black/30 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${activeStep === i ? 'bg-radar-glow animate-pulse' : 'bg-slate-600'}`} />
                        <span>[{st.step}] {st.diagram}</span>
                      </div>
                      <span className="text-[10px] text-radar-300">{st.latency}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-500 flex justify-between">
                  <span>PROTO: gRPC / eBPF Direct</span>
                  <span className="text-radar-400">STATUS: 0 PACKET DROP</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
