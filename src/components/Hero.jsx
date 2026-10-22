import React from 'react';
import { ArrowUpRight, ShieldCheck, CheckCircle2, TrendingUp, Sparkles, MessageCircle, Star, Award, Zap } from 'lucide-react';

export default function Hero({ onOpenRates, onOpenFarmer, onOpenChatWithPrompt }) {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 px-4 max-w-6xl mx-auto text-center overflow-hidden">
      {/* Background Radial Glow & Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-emerald-500/12 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-teal-500/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Live Trading Ticker Pill */}
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
        <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400 animate-pulse" />
        <span>Today: 48,200 kg Harvest Reserved • 14 FPO Clusters Live</span>
        <span className="hidden sm:inline text-zinc-600">|</span>
        <span className="hidden sm:inline text-zinc-400">Kolar • Mandya • Belagavi</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
        Directly Connecting Karnataka's Farmers with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-200">Bulk Produce Buyers</span>.
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
        Cut out 3–5 layers of mandi middlemen. We empower wedding caterers, convention centers, and hotel networks to pre-book fresh harvests 24–48 hours ahead directly from regional grower clusters at transparent wholesale rates.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
        <button 
          onClick={onOpenRates}
          className="btn-island w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:brightness-110 text-black font-extrabold text-sm transition-all shadow-[0_0_35px_rgba(16,185,129,0.4)]"
        >
          <span>Request Daily Wholesale Rates</span>
          <div className="btn-icon-wrapper w-6 h-6 rounded-full bg-black/20 flex items-center justify-center transition-transform">
            <ArrowUpRight className="w-3.5 h-3.5 text-black" />
          </div>
        </button>

        <button 
          onClick={() => onOpenChatWithPrompt("I want to calculate pricing and pre-book bulk tomatoes & capsicum for a wedding")}
          className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-emerald-500/35 hover:border-emerald-500/70 text-emerald-300 hover:text-white font-bold text-sm transition-all bg-emerald-950/40 hover:bg-emerald-900/40 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          Launch AI Pre-Order Bot
        </button>

        <button 
          onClick={onOpenFarmer}
          className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/15 hover:border-white/30 text-zinc-300 hover:text-white font-semibold text-sm transition-all bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center gap-2"
        >
          🌾 Register as Farmer (ರೈತರು)
        </button>
      </div>

      {/* Trust Stamped Metric Badges */}
      <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all">
          <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <TrendingUp className="w-3.5 h-3.5" />
            Farmer Margin
          </div>
          <div className="text-3xl font-extrabold text-white tracking-tight">+38% Net</div>
          <p className="text-xs text-zinc-400 mt-1">Direct bank payout bypassing mandi brokers.</p>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all">
          <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            Buyer Savings
          </div>
          <div className="text-3xl font-extrabold text-white tracking-tight">18–25%</div>
          <p className="text-xs text-zinc-400 mt-1">Lower wholesale cost for wedding caterers.</p>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all">
          <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Award className="w-3.5 h-3.5" />
            Freshness Lock
          </div>
          <div className="text-3xl font-extrabold text-white tracking-tight">&lt; 14 Hours</div>
          <p className="text-xs text-zinc-400 mt-1">From vine clipping to kitchen prep tables.</p>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all">
          <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            Post-Harvest Loss
          </div>
          <div className="text-3xl font-extrabold text-white tracking-tight">&lt; 2% Spoilage</div>
          <p className="text-xs text-zinc-400 mt-1">Pre-order demand vs 40% mandi dump loss.</p>
        </div>
      </div>
    </section>
  );
}
