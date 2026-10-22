import React from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, TrendingUp, Users, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function AboutBento({ onOpenRates, onOpenFarmer, onOpenChatWithPrompt }) {
  return (
    <>
      {/* 1. Client / Partner Logo Marquee Bar */}
      <section className="py-7 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-6 opacity-60 grayscale hover:grayscale-0 transition-all text-xs font-bold text-slate-600 tracking-wider uppercase">
          <div className="flex items-center gap-2">
            <span className="text-base">🍅</span> Kolar Tomato FPO Federation
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">🏛️</span> Palace Grounds Banquets
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">🍌</span> Mandya Organic Alliance
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">👨‍🍳</span> Bangalore Caterers Association
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">🧅</span> Belagavi Grower Alliance
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">🏨</span> Mysore Hospitality Network
          </div>
        </div>
      </section>

      {/* 2. ABOUT US BENTO GRID (Exact Layout from Reference Image) */}
      <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-slate-400 mb-3">
            • ABOUT US
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            A regional agritech partner dedicated to building{' '}
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1877F2] text-white text-xs align-middle mx-1 shadow-sm">
              ●
            </span>{' '}
            fairer trade and{' '}
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#D4FF32] text-black text-xs align-middle mx-1 shadow-sm font-bold">
              🌱
            </span>{' '}
            more transparent supply
          </h2>
        </div>

        {/* Bento Grid: 1 large left, 1 center, 2 stacked right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Left Blue Card with Farmer Photo & White Bottom Overlay (col-span-4) */}
          <div className="md:col-span-4 rounded-[2rem] bg-gradient-to-b from-[#1877F2] to-[#0A58CA] p-6 text-white relative overflow-hidden flex flex-col justify-between min-h-[380px] shadow-lg">
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <span className="font-extrabold text-sm tracking-wider uppercase">CropConnect</span>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-xs">
                🌾
              </div>
            </div>

            {/* Background Farmer Illustration / Image Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay pointer-events-none"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80')` }}
            />

            {/* Floating White Pill Card at Bottom */}
            <div className="z-10 p-5 rounded-2xl bg-white text-slate-900 shadow-xl mt-36">
              <div className="text-3xl font-black text-slate-950">1,850+</div>
              <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                Karnataka smallholders collaborating across Kolar, Mandya, and Belagavi.
              </p>
            </div>
          </div>

          {/* Card 2: Center Top Card (col-span-4) */}
          <div className="md:col-span-4 rounded-[2rem] bg-white p-7 border border-slate-200/80 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Commitment to fair pricing
              </span>
              <div className="text-4xl font-black text-slate-900 mt-2">100%</div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              {/* Avatar Cluster */}
              <div className="flex items-center -space-x-2 mb-3">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center border-2 border-white">SK</span>
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center border-2 border-white">RG</span>
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center border-2 border-white">VM</span>
              </div>
              <p className="text-xs text-slate-600 italic leading-relaxed">
                "Their forward lock strategy completely reshaped how we source bulk vegetables. Zero day-of price spikes and produce delivered within 12 hours of harvest."
              </p>
              <div className="text-[10px] font-bold text-slate-900 mt-2">— Executive Chef, Palace Grounds</div>
            </div>
          </div>

          {/* Card 3 & 4: Stacked on Right (col-span-4) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Top Right: Electric Neon Lime Card (bg-[#D4FF32]) */}
            <div className="flex-1 rounded-[2rem] bg-[#D4FF32] p-7 text-black shadow-md flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-black/70">
                  Data & Fresh Volume
                </span>
                <div className="text-4xl font-black text-black mt-2">520k+</div>
              </div>
              <p className="text-xs text-black/85 font-semibold mt-4 leading-relaxed">
                Kilograms of fresh produce matched monthly to power smarter wedding & banquet procurement.
              </p>
            </div>

            {/* Bottom Right: Dark Obsidian Card */}
            <div className="rounded-[2rem] bg-[#0B1220] p-6 text-white shadow-md flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Karnataka Sourcing Belts
                </span>
                <div className="text-2xl font-black text-white mt-1">4 Major Hubs</div>
                <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">Kolar • Mandya • Belagavi • Chikka</div>
              </div>
              <div className="text-3xl font-black text-[#D4FF32]">
                20+
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. SERVICES SECTION (Exact Structure from Reference Image) */}
      <section id="services" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-slate-400 mb-3">
            • SERVICES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Comprehensive procurement and direct farm innovation
          </h2>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
            Whether you are optimizing daily banquet costs or building reliable farmer supply, we help you move faster with confidence.
          </p>

          <div className="mt-6">
            <button 
              onClick={() => onOpenChatWithPrompt("I want to pre-book produce for an upcoming wedding")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B1220] hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Get Started</span>
              <div className="w-5 h-5 rounded-full bg-[#D4FF32] flex items-center justify-center text-black">
                <ArrowUpRight className="w-3 h-3 text-black" />
              </div>
            </button>
          </div>
        </div>

        {/* 3 Bottom Cards (Matching Reference Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Service Card 1 */}
          <div className="rounded-[2rem] bg-white p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#D4FF32] flex items-center justify-center text-black mb-6 shadow-sm">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Direct Farm Marketplace</h3>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed font-normal">
                We eliminate 3–5 broker layers, connecting regional growers directly with commercial kitchens at transparent wholesale rates.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-[#1877F2]">
              Zero Mandi Broker Commissions →
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="rounded-[2rem] bg-white p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#D4FF32] flex items-center justify-center text-black mb-6 shadow-sm">
                <TrendingUp className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">24–48h Forward Contracts</h3>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed font-normal">
                Lock in bulk event requirements ahead of time. Farmers harvest only confirmed orders, cutting perishable spoilage to under 2%.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-[#1877F2]">
              Guaranteed Event Day Rate Lock →
            </div>
          </div>

          {/* Service Card 3 (With Photo matching reference) */}
          <div className="rounded-[2rem] bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between overflow-hidden">
            <div className="p-7 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#D4FF32] flex items-center justify-center text-black mb-4 shadow-sm">
                <Users className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Data & Fresh Insights</h3>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                We turn raw harvest data into reliable forward schedules, direct weighing, and T+0 UPI grower settlement.
              </p>
            </div>

            {/* Photo at bottom of card 3 matching the reference photo */}
            <div className="h-32 w-full relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80" 
                alt="Fresh produce and happy team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-3">
                <span className="text-[10px] text-white font-bold bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  Fresh Farm Gate Aggregation
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
