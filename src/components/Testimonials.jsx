import React from 'react';
import { Star, ShieldCheck, Award, Building, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Rader AI intercepted three novel indirect prompt injections on our customer-facing finance agent before any payload executed. The latency penalty is practically non-existent (< 1.5ms).",
      author: "Elena Rostova",
      role: "VP of AI Systems & Security",
      company: "Apex Global FinTech",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    },
    {
      quote: "Managing 40+ autonomous agents was chaos before Rader AI. The 360° radar topology caught an infinite recursive tool-calling loop that would have drained $18,000 of compute overnight.",
      author: "Marcus Vance",
      role: "Head of Autonomous Intelligence",
      company: "Synthetix Labs",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    },
    {
      quote: "The on-premise zero-egress architecture allowed our hospital network to deploy agentic diagnosis assistants while maintaining strict HIPAA and sovereign patient data compliance.",
      author: "Dr. Aris Thorne",
      role: "Chief Medical Information Officer",
      company: "BioHealth Genomics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    },
  ];

  const partners = [
    'NEXUS ROBOTICS',
    'CYBERDYNES AI',
    'SYNAPSE CAPITAL',
    'AETHER CLOUD',
    'VORTEX DATA',
  ];

  const compliances = [
    { name: 'SOC 2 Type II', desc: 'Audited AICPA Security & Confidentiality' },
    { name: 'HIPAA Compliant', desc: 'Automated PHI Sanitization & Vaulting' },
    { name: 'ISO/IEC 27001', desc: 'Enterprise Information Security Certified' },
    { name: 'GDPR / CCPA', desc: 'Sovereign Right-to-Forget Telemetry' },
  ];

  return (
    <section className="py-24 bg-[#04070d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trusted By Logos */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-8">
            TRUSTED BY INFRASTRUCTURE TEAMS OPERATING HIGH-STAKES AI
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 hover:opacity-90 transition-opacity">
            {partners.map((partner) => (
              <span
                key={partner}
                className="font-mono text-sm sm:text-base tracking-widest font-black text-slate-400 hover:text-radar-glow transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-950/80 border border-slate-800/90 p-6 sm:p-8 flex flex-col justify-between hover:border-radar-500/30 transition-all shadow-lg"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-radar-glow mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-radar-glow text-radar-glow" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-radar-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.author}</h4>
                  <p className="text-xs text-slate-400">{t.role}</p>
                  <p className="text-[11px] font-mono text-radar-400">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Compliance Highlights */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-radar-500/20 p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 text-radar-glow text-xs font-mono uppercase mb-2">
                <ShieldCheck className="w-4 h-4" />
                SECURITY ASSURANCE
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Engineered for Zero Data Egress
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Rader AI guarantees that prompts, weights, and raw customer queries never leave your sanctioned computational boundaries.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {compliances.map((c) => (
                <div
                  key={c.name}
                  className="p-4 rounded-xl bg-black/40 border border-slate-800 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-radar-glow shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-white">{c.name}</h5>
                    <p className="text-xs text-slate-400 mt-0.5">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
