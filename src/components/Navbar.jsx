import React, { useState, useEffect } from 'react';
import { Radio, ShieldCheck, ChevronRight, Menu, X, Terminal, Cpu, Zap, Activity } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Platform', href: '#features' },
    { label: 'Live Radar', href: '#radar-demo' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'SDK Quickstart', href: '#sdk' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#04070d]/90 backdrop-blur-xl border-b border-radar-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-slate-900 border border-radar-500/30 flex items-center justify-center group-hover:border-radar-400 transition-colors shadow-[0_0_15px_rgba(0,255,136,0.15)]">
            <Radio className="w-5 h-5 text-radar-glow group-hover:rotate-45 transition-transform duration-500" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-radar-glow rounded-full animate-ping opacity-75" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-radar-glow rounded-full" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-tight text-white group-hover:text-radar-glow transition-colors">
                RADER<span className="text-radar-glow">.AI</span>
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-radar-500/10 text-radar-400 border border-radar-500/20">
                v2.4
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-mono">
              Autonomous AI Radar
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-radar-glow hover:bg-radar-500/10 px-3 py-1.5 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Action buttons & Live Status */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Live Status indicator */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/80 border border-radar-500/20 text-[11px] font-mono text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-radar-glow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-radar-glow"></span>
            </span>
            <span>Nodes Operational</span>
          </div>

          <button
            onClick={onOpenDemo}
            className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Sign In
          </button>

          <button
            onClick={onOpenDemo}
            className="relative group overflow-hidden rounded-lg p-[1px] focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-radar-500 to-cyanGlow rounded-lg group-hover:opacity-100 opacity-80 blur-[2px] transition-all"></span>
            <span className="relative flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-black bg-radar-glow rounded-[7px] group-hover:bg-opacity-95 transition-all">
              Launch Console
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenDemo}
            className="text-xs font-bold px-3 py-1.5 rounded-md bg-radar-glow text-black"
          >
            Console
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-4 rounded-2xl bg-slate-950 border border-radar-500/20 shadow-2xl backdrop-blur-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-200 hover:text-radar-glow p-2 rounded-lg hover:bg-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 rounded-lg bg-radar-glow text-black font-bold text-sm shadow-[0_0_20px_rgba(0,255,136,0.3)]"
            >
              Launch Radar Console
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
