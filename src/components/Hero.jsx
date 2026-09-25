import React, { useState } from 'react';
import { ArrowRight, Terminal, Copy, Check, Shield, Zap, Sparkles, Activity, Play } from 'lucide-react';
import RadarCanvas from './RadarCanvas';

export default function Hero({ onOpenDemo, onScrollToRadar }) {
  const [copied, setCopied] = useState(false);
  const command = 'npx rader-ai init --cluster prod-ai-fleet';

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-glow">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radar-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyanGlow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-radar-500/10 border border-radar-500/30 mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-radar-glow animate-pulse" />
              <span className="text-xs font-mono font-medium text-radar-300">
                RADER AI 2.4 IS LIVE
              </span>
              <span className="text-slate-400 text-xs">|</span>
              <span className="text-xs text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer">
                Autonomous Interception <ArrowRight className="w-3 h-3" />
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
              Autonomous{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-radar-glow via-emerald-300 to-cyanGlow">
                Radar Intelligence
              </span>{' '}
              for Enterprise AI.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              Continuous 360° observability, neural drift scanning, and real-time hallucination interception. Track, debug, and guard multi-agent LLM systems with sub-millisecond precision.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenDemo}
                className="relative group px-6 py-3.5 rounded-xl font-bold text-sm text-black bg-radar-glow hover:bg-radar-400 transition-all shadow-[0_0_30px_rgba(0,255,136,0.35)] flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                <span>Deploy Free Radar Node</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToRadar}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-radar-500/50 hover:text-white transition-all flex items-center justify-center gap-2 w-full sm:w-auto backdrop-blur-sm"
              >
                <Play className="w-4 h-4 text-radar-glow fill-radar-glow/20" />
                <span>Launch Live Radar HUD</span>
              </button>
            </div>

            {/* Interactive CLI Install command */}
            <div className="w-full max-w-lg bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 font-mono text-xs flex items-center justify-between shadow-2xl backdrop-blur-md mb-8">
              <div className="flex items-center gap-2 overflow-x-auto text-slate-300">
                <span className="text-radar-glow font-bold select-none">$</span>
                <span className="text-slate-200 whitespace-nowrap">{command}</span>
              </div>
              <button
                onClick={handleCopy}
                className="ml-3 p-1.5 rounded-lg bg-slate-900 border border-slate-700/70 hover:border-radar-500/40 text-slate-400 hover:text-white transition-colors flex items-center gap-1 shrink-0"
                title="Copy Command"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-radar-glow" />
                    <span className="text-[10px] text-radar-glow">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[10px]">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Key Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-4 border-t border-slate-800/80">
              <div>
                <div className="text-xl sm:text-2xl font-black font-mono text-white">&lt; 1.8ms</div>
                <div className="text-xs text-slate-400 font-mono">Radar Telemetry</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-mono text-radar-glow">99.998%</div>
                <div className="text-xs text-slate-400 font-mono">Threat Detection</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-mono text-white">14.2B+</div>
                <div className="text-xs text-slate-400 font-mono">Daily Ingested Tokens</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-mono text-cyanGlow">Zero Egress</div>
                <div className="text-xs text-slate-400 font-mono">SOC2 / HIPAA Ready</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Radar Viewport Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-radar-500/30 via-slate-800 to-slate-900/60 shadow-[0_0_60px_rgba(0,255,136,0.15)]">
              <div className="bg-[#060a12] rounded-[22px] overflow-hidden border border-radar-500/20">
                {/* Window Header */}
                <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-radar-500 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400">rader-hud.telemetry</span>
                  </div>
                  <span className="text-[10px] font-mono text-radar-400 bg-radar-500/10 px-2 py-0.5 rounded border border-radar-500/20">
                    LIVE STREAM
                  </span>
                </div>

                {/* Radar Canvas Window */}
                <div className="relative h-[380px] bg-[#020509]">
                  <RadarCanvas activeMode="cluster" anomalyActive={false} />
                </div>

                {/* Quick Diagnostics bar */}
                <div className="p-3 bg-slate-950 border-t border-slate-800/80 text-[11px] font-mono grid grid-cols-3 text-center text-slate-400">
                  <div className="border-r border-slate-800">
                    <span className="text-slate-500">BEACON:</span> <span className="text-radar-glow">STABLE</span>
                  </div>
                  <div className="border-r border-slate-800">
                    <span className="text-slate-500">DRIFT:</span> <span className="text-white">0.02%</span>
                  </div>
                  <div>
                    <span className="text-slate-500">POLICY:</span> <span className="text-radar-400">ENFORCED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
