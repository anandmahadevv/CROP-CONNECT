import React from 'react';
import { ArrowUpRight, Star, TrendingUp, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenRates, onOpenFarmer, onOpenChatWithPrompt }) {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 px-4 bg-sky-hero overflow-hidden text-center text-white">
      {/* Photorealistic Soft Clouds Layer */}
      <div className="cloud-layer" />

      {/* Decorative Cloud Ellipses for Depth */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[120%] h-56 bg-gradient-to-t from-white via-white/80 to-transparent blur-md pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Main Headline (Exact Typography Style from Reference) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
          Building the future of <br className="hidden sm:inline" />
          <span className="font-extrabold">direct agri-trade</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed font-normal">
          Directly connecting Karnataka's farmers with bulk produce buyers through transparent forward pricing, advance pre-orders, and automated logistics.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button 
            onClick={onOpenRates}
            className="px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold text-xs tracking-wider uppercase backdrop-blur-md border border-white/30 transition-all hover:scale-105 active:scale-95"
          >
            View Live Rates
          </button>

          <button 
            onClick={() => onOpenChatWithPrompt("I want to calculate pricing and pre-book bulk tomatoes & capsicum for a wedding")}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4FF32] hover:bg-[#c6f71d] text-black font-extrabold text-xs tracking-wider uppercase transition-all shadow-[0_4px_25px_rgba(212,255,50,0.5)] hover:scale-105 active:scale-95"
          >
            <span>Get Started</span>
            <div className="w-5 h-5 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </div>
          </button>
        </div>

        {/* 3D Arc / Curved Carousel of Floating Glass Cards (Matching Reference) */}
        <div className="mt-14 perspective-container max-w-5xl mx-auto flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto sm:overflow-visible py-4 px-2">
          
          {/* Card 1 (Far Left) */}
          <div className="hidden lg:block w-40 p-4 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/40 text-left shadow-lg card-arc-left-2 shrink-0">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs mb-2">
              🍅
            </div>
            <div className="text-[10px] text-white/80 font-bold uppercase tracking-wider">Kolar Hub</div>
            <div className="text-xl font-extrabold text-white mt-1">₹29/kg</div>
            <div className="text-[10px] text-white/90 mt-1 font-medium">Save 24% vs Mandi</div>
          </div>

          {/* Card 2 (Mid Left) */}
          <div className="w-48 sm:w-52 p-4 rounded-2xl bg-white text-slate-800 text-left shadow-2xl card-arc-left-1 shrink-0 border border-white">
            <div className="flex justify-between items-center text-xs text-slate-500 font-bold mb-1">
              <span>Performance</span>
              <span className="text-emerald-600 font-extrabold">+38%</span>
            </div>
            <div className="text-2xl font-black text-slate-900 mt-1">49%</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Higher net payout to smallholder farmers</div>
            <div className="mt-3 pt-2 border-t border-slate-100 flex gap-1">
              <span className="text-[9px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold">Kolar</span>
              <span className="text-[9px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold">Mandya</span>
            </div>
          </div>

          {/* Card 3 (Center Main Hero Card) */}
          <div className="w-56 sm:w-64 p-5 rounded-3xl bg-gradient-to-br from-blue-500 to-[#1877F2] text-white text-left shadow-[0_25px_50px_rgba(0,0,0,0.3)] card-arc-center shrink-0 border border-white/30">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-3">
              <Sparkles className="w-4 h-4 text-[#D4FF32]" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Karnataka Network</span>
            <div className="text-3xl font-black text-white mt-1">520k+</div>
            <div className="text-xs text-white/90 font-medium mt-1">Kilograms produce direct-sourced without mandi decay</div>
            <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold text-[#D4FF32]">
              <CheckCircle2 className="w-3.5 h-3.5" /> FPO Verified Direct Hub
            </div>
          </div>

          {/* Card 4 (Mid Right) */}
          <div className="w-48 sm:w-52 p-4 rounded-2xl bg-[#0B1220] text-white text-left shadow-2xl card-arc-right-1 shrink-0 border border-white/10">
            <div className="text-[10px] text-[#D4FF32] font-bold uppercase tracking-wider mb-1">Expertise</div>
            <div className="text-sm font-bold text-white mt-0.5">Direct Farm Forward Contracts</div>
            <p className="text-[10px] text-slate-400 mt-1.5 leading-relaxed">
              Eliminating broker cartels with 24–48h advance banquet locks.
            </p>
            <div className="mt-3 text-[9px] bg-white/10 text-white px-2 py-1 rounded inline-block font-mono">
              Zero Spot Spikes
            </div>
          </div>

          {/* Card 5 (Far Right) */}
          <div className="hidden lg:block w-40 p-4 rounded-2xl bg-white text-slate-800 text-left shadow-lg card-arc-right-2 shrink-0 border border-slate-100">
            <div className="text-[10px] text-slate-400 font-bold uppercase">Wastage</div>
            <div className="text-xl font-black text-emerald-600 mt-1">&lt; 2%</div>
            <div className="text-[10px] text-slate-500 mt-1 font-medium">vs 40% Mandi Spoilage</div>
          </div>

        </div>

        {/* Rating Social Proof (Matching Reference Exactly) */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-white/90 font-medium">
          <span>Rated 4.9/5 by 4,900+ clients</span>
          <div className="flex text-[#D4FF32] text-xs">
            ★★★★★
          </div>
        </div>
      </div>
    </section>
  );
}
