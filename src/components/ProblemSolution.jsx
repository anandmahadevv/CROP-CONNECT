import React from 'react';
import { AlertCircle, TrendingDown, Clock, ShieldX, Sparkles, Truck, CheckCircle2, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <>
      {/* SECTION 1: THE BROKEN MANDI CRISIS */}
      <section id="problem" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] uppercase tracking-[0.2em] font-bold text-rose-400 bg-rose-500/10 border border-rose-500/25 mb-3 shadow-[0_0_15px_rgba(244,63,94,0.15)]">
            <AlertCircle className="w-3.5 h-3.5" />
            The Multi-Tier APMC Bottleneck
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            The Traditional Mandi System is Costing Everyone.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Between the Karnataka farm gate and the Bangalore hotel kitchen, 4 to 6 non-value-adding middlemen inflate pricing, cause severe delays, and waste nutritious food.
          </p>
        </div>

        {/* Visual Supply Chain Inefficiency Banner */}
        <div className="mb-10 p-5 rounded-3xl bg-rose-950/20 border border-rose-500/20 backdrop-blur-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-3 flex items-center gap-2">
            <span>❌ Legacy Mandi Chain (4–5 Days • 40% Spoilage • +50% Markups)</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-300 font-medium">
            <span className="p-2 rounded-xl bg-white/5 border border-white/5">🚜 Farmer Field</span>
            <span className="text-rose-400">→</span>
            <span className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300">Broker #1 (Weighing Cut)</span>
            <span className="text-rose-400">→</span>
            <span className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300">Village Aggregator</span>
            <span className="text-rose-400">→</span>
            <span className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300">APMC Commission Agent</span>
            <span className="text-rose-400">→</span>
            <span className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300">City Wholesaler</span>
            <span className="text-rose-400">→</span>
            <span className="p-2 rounded-xl bg-white/5 border border-white/5">🏨 Hotel Kitchen</span>
          </div>
        </div>

        {/* Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="double-bezel">
            <div className="bezel-core h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-6 text-xl shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                  📉
                </div>
                <span className="text-[10px] font-extrabold text-rose-400 tracking-widest uppercase">Crisis Pillar 01</span>
                <h3 className="text-xl font-bold text-white mt-1">Unfair Pricing for Farmers</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Growers lose <strong>30% to 50%</strong> of potential crop margin to unaccountable commission brokers, weighing manipulation, and informal cartels. Farmers take all weather and fertilizer risk for the smallest financial return.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-rose-400/90 font-medium flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                Drives smallholders into chronic debt cycles.
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="double-bezel">
            <div className="bezel-core h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 text-xl shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  ⚡
                </div>
                <span className="text-[10px] font-extrabold text-amber-400 tracking-widest uppercase">Crisis Pillar 02</span>
                <h3 className="text-xl font-bold text-white mt-1">Quality & Price Volatility</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Event caterers and hotel chefs face erratic supply shortages and random price spikes. A 50% surge in tomato or onion prices on wedding morning directly destroys banquet profit margins.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-amber-400/90 font-medium flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                Zero forward price protection on event day.
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="double-bezel">
            <div className="bezel-core h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 text-xl shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                  🗑️
                </div>
                <span className="text-[10px] font-extrabold text-orange-400 tracking-widest uppercase">Crisis Pillar 03</span>
                <h3 className="text-xl font-bold text-white mt-1">Severe Perishable Produce Wastage</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Because farmers harvest blindly on speculation, unsold produce sits baking in open-air mandi yards for days. Up to <strong>40% of perishable harvests rot</strong> before reaching an end kitchen.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-orange-400/90 font-medium flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                Tragic agricultural dump loss and food waste.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE CROPPCONNECT SOLUTION */}
      <section id="solution" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] uppercase tracking-[0.2em] font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 mb-3 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            The CropConnect Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            A Direct, Forward-Locked, Demand-Driven Network.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Eliminating speculative harvest dumping with 24–48 hour advance pre-orders and milk-run crate logistics.
          </p>
        </div>

        {/* Visual CropConnect Direct Chain Banner */}
        <div className="mb-10 p-5 rounded-3xl bg-emerald-950/30 border border-emerald-500/30 backdrop-blur-sm shadow-[0_0_30px_rgba(16,185,129,0.1)]">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
            <span>✅ The CropConnect Direct Pipeline (&lt; 14 Hours • &lt; 2% Loss • 100% Guaranteed Lock)</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-200 font-semibold">
            <span className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
              🌱 Verified Farmer FPO
            </span>
            <span className="text-emerald-400 font-bold">→</span>
            <span className="p-2 rounded-xl bg-white/5 border border-white/10">
              📱 48h Advance WhatsApp Order Lock
            </span>
            <span className="text-emerald-400 font-bold">→</span>
            <span className="p-2 rounded-xl bg-white/5 border border-white/10">
              🏷️ Farm-Gate Quality Grading & Crates
            </span>
            <span className="text-emerald-400 font-bold">→</span>
            <span className="p-2 rounded-xl bg-white/5 border border-white/10">
              🚚 Milk-Run Direct Transit
            </span>
            <span className="text-emerald-400 font-bold">→</span>
            <span className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
              🍽️ Hotel / Caterer Kitchen
            </span>
          </div>
        </div>

        {/* 3 Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Solution 1 */}
          <div className="double-bezel">
            <div className="bezel-core h-full">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 text-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                🤝
              </div>
              <span className="text-[10px] font-extrabold text-emerald-400 tracking-widest uppercase">Platform Core 01</span>
              <h3 className="text-xl font-bold text-white mt-1">Direct Farmer Marketplace</h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Replaces cartel bidding with transparent wholesale matching. Verified FPOs sell directly to commercial kitchens at genuine market rates without secret broker margins or commission deductions.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Farm-gate electronic weighing & A/B grading
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  T+0 direct UPI bank settlement on weigh-in
                </li>
              </ul>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="double-bezel">
            <div className="bezel-core h-full">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 text-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                📅
              </div>
              <span className="text-[10px] font-extrabold text-emerald-400 tracking-widest uppercase">Platform Core 02</span>
              <h3 className="text-xl font-bold text-white mt-1">24–48h Advance Pre-Order</h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Caterers lock in exact crate quantities 1 to 2 days before an event. Farmers harvest only confirmed orders, cutting unsold dump loss to under 2% and guaranteeing fresh produce clipped within 14 hours.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Fixed rate lock protects buyers from event-day spikes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Guaranteed banquet venue delivery slots
                </li>
              </ul>
            </div>
          </div>

          {/* Solution 3 */}
          <div className="double-bezel">
            <div className="bezel-core h-full">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 text-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                💬
              </div>
              <span className="text-[10px] font-extrabold text-emerald-400 tracking-widest uppercase">Platform Core 03</span>
              <h3 className="text-xl font-bold text-white mt-1">WhatsApp & AI Automation</h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Zero app fatigue. Farmers receive voice notes and Kannada text alerts; buyers receive daily 6:00 AM wholesale price cards and 1-tap WhatsApp order booking directly through our AI bot.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Operates seamlessly on rural 2G/3G networks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Instant order tracking and digital consignment bills
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
