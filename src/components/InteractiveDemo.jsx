import React, { useState, useEffect } from 'react';
import { Play, Pause, AlertTriangle, ShieldAlert, Cpu, RefreshCw, Layers, Gauge, Database, Terminal, CheckCircle2 } from 'lucide-react';
import RadarCanvas from './RadarCanvas';

export default function InteractiveDemo({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('cluster');
  const [anomalyActive, setAnomalyActive] = useState(false);
  const [scanRate, setScanRate] = useState(60);
  const [logs, setLogs] = useState([
    { id: 1, time: '19:42:01.012', type: 'INFO', msg: 'Radar beacon sync initialized on region us-east-1', source: 'RADAR-CORE' },
    { id: 2, time: '19:42:01.408', type: 'PASS', msg: 'Claude 3.5 Sonnet payload scanned: 0 injection signatures', source: 'GUARD-L3' },
    { id: 3, time: '19:42:02.115', type: 'PASS', msg: 'GPT-4o response latency: 24ms (within 50ms envelope)', source: 'LAT-RADAR' },
    { id: 4, time: '19:42:02.890', type: 'PASS', msg: 'Vector Embeddings drift score: 0.0014 (nominal)', source: 'DRIFT-MON' },
  ]);

  const triggerAnomaly = () => {
    setAnomalyActive(true);
    const newLog = {
      id: Date.now(),
      time: new Date().toISOString().substring(11, 23),
      type: 'ALERT',
      msg: '🚨 PROMPT INJECTION DETECTED: System prompt extraction blocked!',
      source: 'RADAR-SHIELD',
    };
    setLogs((prev) => [newLog, ...prev.slice(0, 7)]);

    setTimeout(() => {
      const resolvedLog = {
        id: Date.now() + 1,
        time: new Date().toISOString().substring(11, 23),
        type: 'RESOLVED',
        msg: '✅ Auto-mitigation applied: Session token quarantined & rerouted.',
        source: 'AUTO-HEALER',
      };
      setLogs((prev) => [resolvedLog, ...prev.slice(0, 7)]);
      setAnomalyActive(false);
    }, 4500);
  };

  const clearLogs = () => {
    setLogs([
      {
        id: Date.now(),
        time: new Date().toISOString().substring(11, 23),
        type: 'INFO',
        msg: 'Logs flushed. Radar telemetry streaming nominal.',
        source: 'RADAR-CORE',
      },
    ]);
  };

  return (
    <section id="radar-demo" className="py-24 bg-[#03060c] relative border-t border-b border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radar-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-radar-500/10 border border-radar-500/25 text-xs font-mono text-radar-400 mb-3">
            <Gauge className="w-3.5 h-3.5" />
            INTERACTIVE RADAR COCKPIT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live AI Telemetry &amp; Threat Radar Sandbox
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Simulate live model telemetry, inject adversarial prompts, test automated neural fallbacks, and observe how Rader AI intercepts threats before they reach your infrastructure.
          </p>
        </div>

        {/* Cockpit Shell */}
        <div className="bg-slate-950/90 border border-radar-500/25 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="p-4 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            
            {/* View Selectors */}
            <div className="flex items-center gap-1 bg-black/50 p-1 rounded-xl border border-slate-800">
              {[
                { id: 'cluster', label: 'Agent Topology', icon: Layers },
                { id: 'latency', label: 'Latency Radar', icon: Gauge },
                { id: 'tokens', label: 'Token Stream', icon: Database },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-radar-500/20 text-radar-glow border border-radar-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Simulation Trigger Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={triggerAnomaly}
                disabled={anomalyActive}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-md ${
                  anomalyActive
                    ? 'bg-red-500/30 text-red-300 border border-red-500/50 animate-pulse'
                    : 'bg-red-950/50 hover:bg-red-900/60 text-red-400 border border-red-500/30'
                }`}
              >
                <ShieldAlert className="w-4 h-4" />
                <span>{anomalyActive ? 'Attacking...' : 'Inject Attack Vector'}</span>
              </button>

              <button
                onClick={clearLogs}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 border border-slate-700/60 transition-colors"
                title="Flush Console"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Flush Logs</span>
              </button>

              <button
                onClick={onOpenDemo}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-black bg-radar-glow hover:bg-radar-400 transition-colors"
              >
                <span>Connect Live Endpoint</span>
              </button>
            </div>
          </div>

          {/* Cockpit Main Grid: Radar Screen (Left) + Diagnostics & Stream (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Radar Canvas Screen */}
            <div className="lg:col-span-7 bg-[#020509] border-b lg:border-b-0 lg:border-r border-slate-800 relative min-h-[420px] flex items-center justify-center p-4">
              <RadarCanvas activeMode={activeTab} anomalyActive={anomalyActive} />
            </div>

            {/* Right Telemetry Feed & Live Telemetry Inspector */}
            <div className="lg:col-span-5 bg-slate-950 flex flex-col justify-between">
              
              {/* Telemetry Metrics Bar */}
              <div className="p-4 border-b border-slate-800/80 grid grid-cols-3 gap-2 text-center bg-slate-900/30">
                <div className="p-2 rounded-lg bg-black/40 border border-slate-800">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Ping Rate</div>
                  <div className="text-base font-bold font-mono text-radar-glow">{scanRate} Hz</div>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-slate-800">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Threat Ratio</div>
                  <div className={`text-base font-bold font-mono ${anomalyActive ? 'text-red-400' : 'text-slate-200'}`}>
                    {anomalyActive ? '1 DETECTED' : '0.00%'}
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-slate-800">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Auto-Mitigate</div>
                  <div className="text-base font-bold font-mono text-cyanGlow">ARMED</div>
                </div>
              </div>

              {/* Event Stream Log Console */}
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-radar-glow" />
                    LIVE INTERCEPTION STREAM
                  </span>
                  <span className="text-[10px] font-mono text-radar-400 animate-pulse">● STREAMING</span>
                </div>

                <div className="space-y-2 font-mono text-[11px] overflow-y-auto max-h-[260px] pr-1">
                  {logs.map((log) => {
                    let badgeBg = 'bg-slate-800 text-slate-300';
                    if (log.type === 'ALERT') badgeBg = 'bg-red-500/20 text-red-400 border border-red-500/30 font-bold';
                    if (log.type === 'PASS') badgeBg = 'bg-radar-500/10 text-radar-400 border border-radar-500/20';
                    if (log.type === 'RESOLVED') badgeBg = 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold';

                    return (
                      <div
                        key={log.id}
                        className={`p-2.5 rounded-lg border border-slate-800/80 bg-black/40 hover:bg-slate-900/50 transition-colors ${
                          log.type === 'ALERT' ? 'border-red-500/40 bg-red-950/20' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`px-1.5 py-0.5 rounded text-[9px] uppercase ${badgeBg}`}>
                            {log.type}
                          </span>
                          <span className="text-slate-500 text-[10px]">{log.time}</span>
                        </div>
                        <div className="text-slate-300 leading-snug">{log.msg}</div>
                        <div className="text-[9px] text-slate-500 mt-1 flex items-center gap-1">
                          <span>MODULE:</span>
                          <span className="text-slate-400">{log.source}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Quick Test Banner */}
              <div className="p-3 bg-radar-950/20 border-t border-radar-500/20 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-radar-300 font-mono text-[11px]">
                  <CheckCircle2 className="w-4 h-4 text-radar-glow" />
                  <span>Telemetry agent hooked via eBPF zero-proxy</span>
                </div>
                <button
                  onClick={onOpenDemo}
                  className="text-[11px] font-mono text-radar-glow hover:underline"
                >
                  Generate Token →
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
