import React, { useState } from 'react';
import { Check, Zap, Sparkles, Shield, ArrowRight } from 'lucide-react';

export default function Pricing({ onOpenDemo }) {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Developer',
      tag: 'FREE RADAR NODE',
      description: 'Ideal for prototyping, independent researchers, and small LLM agent experiments.',
      priceMonthly: 0,
      priceAnnual: 0,
      features: [
        'Up to 2,000,000 tokens/month',
        '1 Active Radar Node',
        'Standard Prompt Injection Guard',
        '7-day Telemetry Retention',
        'OpenTelemetry Exporter',
        'Community Discord & Forum',
      ],
      cta: 'Deploy Free Node',
      popular: false,
    },
    {
      name: 'Growth',
      tag: 'SCALE UP AI TEAMS',
      description: 'Full-featured observability and threat radar for scaling production AI agents.',
      priceMonthly: 149,
      priceAnnual: 119,
      features: [
        'Up to 75,000,000 tokens/month',
        '10 Distributed Radar Nodes',
        'Continuous Neural Drift Radar',
        'Sub-millisecond Latency Tracing',
        'Autonomous Fallback Failover',
        '30-day Deep Audit Logs',
        'Slack & PagerDuty Alerting',
        'Priority Technical Support (4h SLA)',
      ],
      cta: 'Start 14-Day Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      tag: 'AIR-GAPPED & VPC',
      description: 'Dedicated sovereign deployment for regulated industries, fintech, and healthcare.',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      features: [
        'Unlimited token volume & agents',
        'Air-Gapped & VPC On-Premise Install',
        'Custom Classifier Fine-Tuning',
        'SOC2 Type II & HIPAA Audit Reports',
        'Zero Data Egress Guarantee',
        'Custom PII Sanitization Policies',
        'Dedicated Solutions Architect',
        '99.999% Uptime Guarantee (SLA)',
      ],
      cta: 'Request Enterprise Access',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#03060c] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-radar-500/10 border border-radar-500/25 text-xs font-mono text-radar-400 mb-3">
            <Zap className="w-3.5 h-3.5" />
            PREDICTABLE TRANSPARENT PRICING
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Transparent Plans for Any Scale
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            No surprise overage fees. Switch or cancel at any time.
          </p>

          {/* Billing Cycle Switch */}
          <div className="mt-8 inline-flex items-center gap-3 bg-slate-900/80 border border-slate-800 p-1.5 rounded-full">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                !annual ? 'bg-radar-glow text-black shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                annual ? 'bg-radar-glow text-black shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-black/20 text-slate-900 font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = annual ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl flex flex-col justify-between p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-slate-900 border-2 border-radar-500/80 shadow-[0_0_50px_rgba(0,255,136,0.18)] lg:-translate-y-2'
                    : 'bg-slate-950/80 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-radar-glow to-cyanGlow rounded-full text-[10px] font-mono font-black text-black tracking-wider shadow-lg">
                    MOST RECOMMENDED
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {plan.tag}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 min-h-[36px] mb-6">{plan.description}</p>

                  <div className="mb-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white">
                        {typeof price === 'number' ? `$${price}` : price}
                      </span>
                      {typeof price === 'number' && (
                        <span className="text-xs text-slate-400 font-mono">/ month</span>
                      )}
                    </div>
                    {annual && typeof price === 'number' && price > 0 && (
                      <span className="text-[11px] font-mono text-radar-400 mt-1 block">
                        Billed annually ($1,428/yr)
                      </span>
                    )}
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-radar-glow shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenDemo}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-radar-glow text-black hover:bg-radar-400 shadow-[0_0_20px_rgba(0,255,136,0.3)]'
                      : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 text-center text-xs font-mono text-slate-400 flex items-center justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-radar-glow" />
            <span>30-Day Money Back Guarantee</span>
          </div>
          <div>•</div>
          <div>No credit card required for Starter Tier</div>
          <div>•</div>
          <div>SOC2 Type II Certified</div>
        </div>

      </div>
    </section>
  );
}
