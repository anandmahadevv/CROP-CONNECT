import React from 'react';
import { ArrowUpRight, ShieldCheck, CheckCircle2, TrendingUp, Sparkles, MessageCircle } from 'lucide-react';

export default function Hero({ onOpenRates, onOpenFarmer, onOpenChatWithPrompt }) {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 px-4 max-w-6xl mx-auto text-center">
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Eyebrow Badge */}
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        Direct Agri-Trade • Karnataka Sourcing Corridor
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
        Directly Connecting Karnataka's Farmers with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-200">Bulk Produce Buyers</span>.
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
        Eliminate 3–5 layers of mandi commission agents. Wedding caterers, banquet planners, and hotel networks reserve fresh harvests 24–48 hours ahead directly from verified regional farmer clusters.
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
        <button 
          onClick={onOpenRates}
          className="btn-island w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-all shadow-[0_0_30px_rgba(16,185,129,0.35)]"
        >
          <span>Request Daily Wholesale Rates</span>
          <div className="btn-icon-wrapper w-6 h-6 rounded-full bg-black/15 flex items-center justify-center transition-transform">
            <ArrowUpRight className="w-3.5 h-3.5 text-black" />
          </div>
        </button>

        <button 
          onClick={() => onOpenChatWithPrompt("I want to calculate pricing and pre-book bulk tomatoes & capsicum for a wedding")}
          className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400 hover:text-emerald-300 font-bold text-sm transition-all bg-emerald-500/10 flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Instant AI Pre-Order Chat
        </button>

        <button 
          onClick={onOpenFarmer}
          className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/15 hover:border-white/30 text-zinc-300 hover:text-white font-semibold text-sm transition-all bg-white/5 flex items-center justify-center gap-2"
        >
          🌾 Register as a Farmer
        </button>
      </div>

      {/* Live Social Proof Metric Cards */}
      <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
            +38% <span className="text-xs text-emerald-400 font-semibold uppercase">Farmer Gain</span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">Average net income increase vs. local APMC commission agents.</p>
        </div>

        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
            22% <span className="text-xs text-emerald-400 font-semibold uppercase">Buyer Savings</span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">Discounted bulk procurement price for caterers & hoteliers.</p>
        </div>

        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
            24–48h <span className="text-xs text-emerald-400 font-semibold uppercase">Pre-Order</span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">Guaranteed farm-gate forward locking with zero price spikes.</p>
        </div>

        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
            &lt; 2% <span className="text-xs text-emerald-400 font-semibold uppercase">Wastage</span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">Harvested strictly on confirmed demand vs 40% mandi dump loss.</p>
        </div>
      </div>
    </section>
  );
}
