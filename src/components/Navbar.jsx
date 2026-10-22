import React, { useState } from 'react';
import { Sprout, MessageSquareCode, ArrowUpRight, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenRates, onOpenFarmer, onToggleChat, unreadChatCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 inset-x-0 z-40 px-4">
      <div className="max-w-6xl mx-auto backdrop-blur-xl bg-[#0e1715]/85 border border-white/10 rounded-full px-5 py-3 flex items-center justify-between shadow-2xl">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Sprout className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-extrabold tracking-tight text-white flex items-center gap-1.5">
              CropConnect
              <span className="text-[10px] uppercase font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Karnataka
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-zinc-300">
          <a href="#problem" className="hover:text-emerald-400 transition-colors">The Challenge</a>
          <a href="#solution" className="hover:text-emerald-400 transition-colors">Platform</a>
          <a href="#rates" className="hover:text-emerald-400 transition-colors">Daily Rates</a>
          <a href="#calculator" className="hover:text-emerald-400 transition-colors">Savings Calc</a>
          <a href="#hubs" className="hover:text-emerald-400 transition-colors">Grower Hubs</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Chatbot Pill Toggle */}
          <button 
            onClick={onToggleChat}
            className="relative flex items-center gap-1.5 px-3 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold transition-all hover:scale-105"
            title="Open CropConnect AI Assistant"
          >
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>Chat AI</span>
            {unreadChatCount > 0 && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            )}
          </button>

          <button 
            onClick={onOpenFarmer}
            className="text-xs font-semibold px-3.5 py-2 rounded-full border border-white/10 hover:border-emerald-500/40 text-zinc-300 hover:text-white transition-all bg-white/5"
          >
            For Farmers
          </button>

          <button 
            onClick={onOpenRates}
            className="btn-island flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <span>Get Daily Rates</span>
            <div className="btn-icon-wrapper w-5 h-5 rounded-full bg-black/15 flex items-center justify-center transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </div>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto backdrop-blur-2xl bg-[#0e1715]/95 border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 text-center">
          <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="py-2 text-zinc-300 hover:text-emerald-400 text-sm font-medium">The Challenge</a>
          <a href="#solution" onClick={() => setMobileMenuOpen(false)} className="py-2 text-zinc-300 hover:text-emerald-400 text-sm font-medium">Platform</a>
          <a href="#rates" onClick={() => setMobileMenuOpen(false)} className="py-2 text-zinc-300 hover:text-emerald-400 text-sm font-medium">Daily Rates</a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="py-2 text-zinc-300 hover:text-emerald-400 text-sm font-medium">Savings Calculator</a>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onToggleChat(); }}
              className="w-full py-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageSquareCode className="w-4 h-4" /> Open CropConnect Chat AI
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenRates(); }}
              className="w-full py-2.5 rounded-full bg-emerald-500 text-black font-bold text-xs"
            >
              Request Daily Wholesale Rates
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenFarmer(); }}
              className="w-full py-2 rounded-full border border-white/10 text-white text-xs"
            >
              Register as a Farmer (ರೈತರ ನೋಂದಣಿ)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
