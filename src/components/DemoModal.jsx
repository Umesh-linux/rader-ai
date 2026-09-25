import React, { useState, useEffect } from 'react';
import { X, Check, Copy, Radio, Sparkles, Key, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    scale: '10M-100M',
    provider: 'OpenAI + Anthropic',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [copiedKey, setCopiedKey] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate server API key generation and sandbox provisioning
    setTimeout(() => {
      const generatedKey = `rdr_live_${Math.random().toString(36).substring(2, 10)}${Math.random().toString(36).substring(2, 10)}`;
      setApiKey(generatedKey);
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div
        className="relative w-full max-w-lg rounded-3xl bg-slate-950 border border-radar-500/30 p-6 sm:p-8 shadow-[0_0_80px_rgba(0,255,136,0.2)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-radar-500/10 border border-radar-500/30 flex items-center justify-center text-radar-glow">
                <Radio className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Deploy Rader AI Console</h3>
                <p className="text-xs text-slate-400">Instant sandbox provisioning &amp; free API credentials</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ada Lovelace"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-radar-500 focus:ring-1 focus:ring-radar-500 text-sm text-white placeholder-slate-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Work Email (Corporate / Startup)
                </label>
                <input
                  type="email"
                  required
                  placeholder="ada@startup.ai"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-radar-500 focus:ring-1 focus:ring-radar-500 text-sm text-white placeholder-slate-500 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Intelligence"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-radar-500 focus:ring-1 focus:ring-radar-500 text-sm text-white placeholder-slate-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Monthly Tokens
                  </label>
                  <select
                    value={formData.scale}
                    onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-radar-500 focus:ring-1 focus:ring-radar-500 text-sm text-white outline-none transition-all"
                  >
                    <option value="<10M">&lt; 10M tokens/mo</option>
                    <option value="10M-100M">10M – 100M tokens/mo</option>
                    <option value="100M+">100M+ Enterprise scale</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Primary LLM Stack
                </label>
                <select
                  value={formData.provider}
                  onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-radar-500 focus:ring-1 focus:ring-radar-500 text-sm text-white outline-none transition-all"
                >
                  <option value="OpenAI + Anthropic">OpenAI / Anthropic Claude</option>
                  <option value="Self-hosted vLLM/Ollama">Self-hosted vLLM / Ollama / TGI</option>
                  <option value="AWS Bedrock / Azure OpenAI">AWS Bedrock / Azure OpenAI</option>
                  <option value="Custom Multi-Agent Framework">Custom Agentic Swarm / LangGraph</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-radar-glow hover:bg-radar-400 text-black font-bold text-sm transition-all shadow-[0_0_25px_rgba(0,255,136,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Provisioning Radar Beacon...</span>
                    </>
                  ) : (
                    <>
                      <span>Generate Instant Radar Credentials</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400 pt-1">
                Zero spam. Instant developer access granted automatically.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation & Generated Credentials Screen */
          <div className="text-center py-2 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-radar-500/20 border border-radar-500/40 text-radar-glow flex items-center justify-center mx-auto mb-4">
              <Check className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-black text-white mb-1">
              Radar Node Provisioned!
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Welcome aboard, <strong className="text-white">{formData.name}</strong>. Your cluster for <span className="text-radar-300">{formData.company}</span> is active and ready to ingest telemetry.
            </p>

            {/* Generated Key Box */}
            <div className="bg-slate-900 border border-radar-500/30 rounded-xl p-4 text-left mb-5">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <Key className="w-3 h-3 text-radar-glow" />
                  LIVE RADAR API KEY:
                </span>
                <span className="text-[10px] font-mono text-radar-400 bg-radar-500/10 px-1.5 py-0.5 rounded">
                  SANDBOX
                </span>
              </div>
              <div className="flex items-center justify-between font-mono text-xs text-radar-glow bg-black/60 p-2.5 rounded-lg border border-slate-800 overflow-x-auto">
                <code>{apiKey}</code>
                <button
                  onClick={handleCopyKey}
                  className="ml-3 px-2 py-1 rounded bg-slate-800 text-slate-300 hover:text-white flex items-center gap-1 text-[11px] shrink-0"
                >
                  {copiedKey ? <Check className="w-3 h-3 text-radar-glow" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedKey ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Quick Test Command */}
            <div className="text-left bg-black/50 border border-slate-800 p-3 rounded-xl mb-6 text-xs font-mono text-slate-400">
              <div className="text-[10px] text-slate-400 mb-1">RUN QUICK TELEMETRY PROBE:</div>
              <code className="text-slate-300 select-all block">
                curl -H "Authorization: Bearer {apiKey}" https://api.rader.ai/v1/ping
              </code>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
            >
              Close &amp; Return to Overview
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
