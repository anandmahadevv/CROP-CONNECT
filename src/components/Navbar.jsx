import React, { useState } from 'react';
import { Sprout, MessageSquareCode, ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenRates, onOpenFarmer, onToggleChat, unreadChatCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 py-5 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1877F2] shadow-sm group-hover:scale-105 transition-transform">
            <Sprout className="w-4 h-4 text-[#1877F2]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
            CropConnect
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-wider text-white/90">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About Us</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#rates" className="hover:text-white transition-colors">Live Rates</a>
          <a href="#calculator" className="hover:text-white transition-colors">Calculator</a>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button 
            onClick={onToggleChat}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-semibold backdrop-blur-md transition-all border border-white/20"
          >
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>AI Bot</span>
            {unreadChatCount > 0 && (
              <span className="w-2 h-2 rounded-full bg-[#D4FF32] animate-pulse"></span>
            )}
          </button>

          <button 
            onClick={onOpenRates}
            className="px-5 py-2.5 rounded-full bg-[#D4FF32] hover:bg-[#c6f71d] text-black text-xs font-extrabold uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(212,255,50,0.4)] hover:scale-105 active:scale-95"
          >
            Request Rates
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white bg-white/10 rounded-full backdrop-blur-md"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl flex flex-col gap-3 text-center border border-slate-200">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-800 text-sm font-semibold">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-800 text-sm font-semibold">About Us</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-800 text-sm font-semibold">Services</a>
          <a href="#rates" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-800 text-sm font-semibold">Live Rates</a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-800 text-sm font-semibold">Calculator</a>
          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onToggleChat(); }}
              className="w-full py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageSquareCode className="w-4 h-4 text-[#D4FF32]" /> CropConnect AI Assistant
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenRates(); }}
              className="w-full py-2.5 rounded-full bg-[#D4FF32] text-black font-extrabold text-xs"
            >
              Request Rates
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
