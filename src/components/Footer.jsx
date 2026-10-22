import React from 'react';
import { Sprout, Heart, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenRates, onOpenFarmer, onToggleChat }) {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white py-12 px-4 max-w-6xl mx-auto text-xs text-slate-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold shadow-sm">
            <Sprout className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-extrabold text-slate-900 text-sm">CropConnect Technologies</span>
            <div className="text-[11px] text-slate-400">
              Karnataka B2B Agri-Network • Hosted at <span className="text-[#1877F2] font-semibold">crop-marketplace-18.emergent.host</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-slate-600 font-bold text-xs uppercase tracking-wider">
          <button onClick={onOpenRates} className="hover:text-[#1877F2] transition-colors">Daily Rates</button>
          <button onClick={onOpenFarmer} className="hover:text-[#1877F2] transition-colors">Farmer Registration</button>
          <button onClick={onToggleChat} className="hover:text-[#1877F2] transition-colors">AI Assistant</button>
          <a href="#about" className="hover:text-[#1877F2] transition-colors">About Us</a>
          <a href="#services" className="hover:text-[#1877F2] transition-colors">Services</a>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <span>Built with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>for Karnataka’s Growers & Hospitality Leaders</span>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-2 text-[11px]">
        <div>
          © 2026 CropConnect Platform. Directly Connecting Karnataka's Farmers with Bulk Produce Buyers.
        </div>
        <div className="flex items-center gap-2 text-emerald-600 font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>FPO Verified • 100% Escrow Bank Transfers</span>
        </div>
      </div>
    </footer>
  );
}
