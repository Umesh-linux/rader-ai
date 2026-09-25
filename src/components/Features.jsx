import React, { useState } from 'react';
import { Shield, Activity, Zap, Cpu, Lock, GitBranch, ArrowUpRight, Check, Eye, Compass, Workflow, Server } from 'lucide-react';

export default function Features({ onOpenDemo }) {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Neural Radar Guard',
      tag: 'SECURITY & FIREWALL',
      icon: Shield,
      description: 'Zero-latency interception of prompt injection, jailbreak payloads, PII leakage, and indirect poisoning attacks before models execute.',
      metric: '0.9ms Intercept Delay',
      color: 'from-emerald-500/20 to-radar-500/10',
      badge: 'PROACTIVE DEFENSE',
      details: ['Autonomous regex & semantic embeddings parser', 'Custom enterprise safety policy enforcement', 'Zero payload egress architecture'],
    },
    {
      title: 'Continuous Drift Radar',
      tag: 'MODEL RELIABILITY',
      icon: Compass,
      description: 'Monitors embedding distribution shifts, semantic divergence, and hallucinations across multi-turn agent conversations in real time.',
      metric: '99.4% Drift Sensitivity',
      color: 'from-cyan-500/20 to-blue-500/10',
      badge: 'SEMANTIC HEALTH',
      details: ['Multi-turn coherence scoring', 'Real-time embedding distance tracking', 'Automated prompt tuning suggestions'],
    },
    {
      title: 'Distributed Latency Radar',
      tag: 'OBSERVABILITY',
      icon: Activity,
      description: 'Deep micro-tracing for multi-agent loops. Instant breakdown of TTFT (Time To First Token), tool executions, and vector DB lookups.',
      metric: '< 1.8ms Overhead',
      color: 'from-radar-500/20 to-teal-500/10',
      badge: 'eBPF TRACING',
      details: ['Flamegraphs for autonomous agents', 'Token generation speed heatmaps', 'Bottleneck isolation across multi-clouds'],
    },
    {
      title: 'Autonomous Model Healer',
      tag: 'FAILOVER ENGINE',
      icon: Workflow,
      description: 'Intelligent compute arbitrage. Automatically fails over from saturated or degrading LLM providers to redundant models with zero downtime.',
      metric: '99.999% SLA Uptime',
      color: 'from-purple-500/20 to-indigo-500/10',
      badge: 'SELF-HEALING',
      details: ['Dynamic token cost arbitrage', 'Context-preserving model hot-swap', 'Circuit breaker pattern for AI agents'],
    },
    {
      title: 'Zero-Egress Privacy Vault',
      tag: 'ENTERPRISE READY',
      icon: Lock,
      description: 'Deploy Rader AI inside your own AWS, GCP, Azure VPC, or air-gapped on-premise Kubernetes cluster. Your customer data never leaves your perimeter.',
      metric: 'Air-Gapped & VPC',
      color: 'from-slate-700/30 to-slate-800/20',
      badge: 'SOVEREIGN AI',
      details: ['SOC2 Type II, HIPAA, ISO 27001 compliant', 'Role-Based Access Control & Audit Trails', 'Bring-Your-Own-KMS Encryption'],
    },
    {
      title: 'Multi-Agent Mesh Radar',
      tag: 'ORCHESTRATION',
      icon: Server,
      description: 'Full graph visualization of autonomous agent communication, tool-calling cascades, infinite loops, and consensus validation.',
      metric: 'Graph Topology v2',
      color: 'from-emerald-600/20 to-cyan-600/10',
      badge: 'AGENTIC MESH',
      details: ['Deadlock and recursion prevention', 'Inter-agent communication forensics', 'Cost-per-agent allocation telemetry'],
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#04070d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-radar-500/10 border border-radar-500/25 text-xs font-mono text-radar-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            RADAR RADIAL SUITE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Full-Spectrum Observability for Modern AI Systems
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Built from the ground up to eliminate the blind spots of black-box foundation models and complex multi-agent architectures.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 hover:border-radar-500/40 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,255,136,0.12)] hover:-translate-y-1"
              >
                {/* Subtle top gradient glow */}
                <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${feature.color} rounded-t-2xl opacity-40 group-hover:opacity-80 transition-opacity pointer-events-none`} />

                <div className="relative z-10">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-radar-500/30 flex items-center justify-center text-radar-glow shadow-inner group-hover:scale-105 group-hover:border-radar-400 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-radar-glow transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Feature checklist */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/70">
                    {feature.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-radar-glow shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Metric */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="font-mono text-radar-300 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-radar-glow" />
                    {feature.metric}
                  </div>
                  <button
                    onClick={onOpenDemo}
                    className="text-slate-400 hover:text-white flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-radar-glow" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
