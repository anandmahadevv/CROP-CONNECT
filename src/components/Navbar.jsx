import React, { useState } from 'react';
import { Sprout, MessageSquareCode, ArrowUpRight, Menu, X, ShieldCheck, Sparkles, Activity } from 'lucide-react';

export default function Navbar({ onOpenRates, onOpenFarmer, onToggleChat, unreadChatCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-40 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto backdrop-blur-2xl bg-[#091310]/80 border border-white/10 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 p-[1px] shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_22px_rgba(16,185,129,0.6)] transition-all">
              <div className="w-full h-full bg-[#060b09] rounded-full flex items-center justify-center">
                <Sprout className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#091310] animate-pulse"></span>
          </div>

          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-white flex items-center gap-1.5 leading-none">
              CropConnect
              <span className="text-[9px] uppercase font-bold tracking-widest text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30">
                KA • Direct
              </span>
            </span>
            <span className="text-[10px] text-zinc-400 font-medium tracking-tight mt-0.5 hidden sm:inline">
              Farm-to-Kitchen Wholesale Gateway
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
          <a href="#problem" className="hover:text-emerald-400 transition-colors">The Problem</a>
          <a href="#solution" className="hover:text-emerald-400 transition-colors">Architecture</a>
          <a href="#rates" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <span>Live Rates</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          </a>
          <a href="#calculator" className="hover:text-emerald-400 transition-colors">Savings Calc</a>
          <a href="#hubs" className="hover:text-emerald-400 transition-colors">Grower Hubs</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Chatbot Pill Launcher */}
          <button 
            onClick={onToggleChat}
            className="group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:scale-105"
            title="Open CropConnect AI Assistant"
          >
            <MessageSquareCode className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>AI Bot</span>
            {unreadChatCount > 0 && (
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
            )}
          </button>

          <button 
            onClick={onOpenFarmer}
            className="text-xs font-semibold px-3.5 py-2 rounded-full border border-white/10 hover:border-emerald-500/40 text-zinc-300 hover:text-white transition-all bg-white/5"
          >
            🌾 For Farmers
          </button>

          <button 
            onClick={onOpenRates}
            className="btn-island flex items-center gap-2 text-xs font-extrabold px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-black transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)]"
          >
            <span>Daily Rates</span>
            <div className="btn-icon-wrapper w-5 h-5 rounded-full bg-black/20 flex items-center justify-center transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </div>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-full bg-white/5 border border-white/10"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-sm mx-auto backdrop-blur-2xl bg-[#0b1612]/98 border border-emerald-500/30 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col gap-3 text-center animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Activity className="w-3.5 h-3.5" /> Market Feed: Connected
            </span>
            <span>Bengaluru Hub</span>
          </div>

          <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="py-2 text-zinc-300 hover:text-emerald-400 text-sm font-semibold">The Mandi Challenge</a>
          <a href="#solution" onClick={() => setMobileMenuOpen(false)} className="py-2 text-zinc-300 hover:text-emerald-400 text-sm font-semibold">Our Architecture</a>
          <a href="#rates" onClick={() => setMobileMenuOpen(false)} className="py-2 text-zinc-300 hover:text-emerald-400 text-sm font-semibold flex items-center justify-center gap-1.5">
            <span>Daily Rate Sheet</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          </a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="py-2 text-zinc-300 hover:text-emerald-400 text-sm font-semibold">Savings Calculator</a>
          <a href="#hubs" onClick={() => setMobileMenuOpen(false)} className="py-2 text-zinc-300 hover:text-emerald-400 text-sm font-semibold">Karnataka Grower Belts</a>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button 
              onClick={() => { setMobileMenuOpen(false); onToggleChat(); }}
              className="w-full py-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageSquareCode className="w-4 h-4" /> Open CropConnect AI Bot
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenRates(); }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-extrabold text-xs shadow-lg"
            >
              Request Daily Wholesale Rates
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenFarmer(); }}
              className="w-full py-2.5 rounded-2xl border border-white/15 text-white text-xs font-semibold bg-white/5"
            >
              Register as a Farmer (ರೈತರ ನೋಂದಣಿ)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
