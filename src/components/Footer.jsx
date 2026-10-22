import React from 'react';
import { Sprout, Heart, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenRates, onOpenFarmer, onToggleChat }) {
  return (
    <footer className="mt-20 border-t border-white/5 py-12 px-4 max-w-6xl mx-auto text-xs text-zinc-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 font-bold">
            <Sprout className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-white text-sm">CropConnect Technologies</span>
            <div className="text-[11px] text-zinc-400">
              Karnataka B2B Agri-Network • Hosted at <span className="text-emerald-400">crop-marketplace-18.emergent.host</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-zinc-400 font-medium">
          <button onClick={onOpenRates} className="hover:text-emerald-400 transition-colors">Daily Rates</button>
          <button onClick={onOpenFarmer} className="hover:text-emerald-400 transition-colors">Farmer Registration</button>
          <button onClick={onToggleChat} className="hover:text-emerald-400 transition-colors">AI Assistant</button>
          <a href="#problem" className="hover:text-emerald-400 transition-colors">The Problem</a>
          <a href="#solution" className="hover:text-emerald-400 transition-colors">The Solution</a>
        </div>

        <div className="flex items-center gap-2 text-zinc-400">
          <span>Built with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>for Karnataka’s Growers & Hospitality Leaders</span>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-2 text-[11px]">
        <div>
          © 2026 CropConnect Platform. Zero-Middleman Trade. All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-emerald-400 font-medium">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>FPO Verified • 100% Escrow Payouts</span>
        </div>
      </div>
    </footer>
  );
}
