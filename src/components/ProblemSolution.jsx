import React from 'react';
import { AlertCircle, TrendingDown, Clock, ShieldX, Sparkles, Truck, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <>
      {/* SECTION 1: THE CORE PROBLEM */}
      <section id="problem" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 mb-3">
            The Multi-Tier APMC Crisis
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Traditional Mandi System is Broken for Both Ends.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            Between the Karnataka farm gate and the Bangalore hotel kitchen, 4 to 6 non-value-adding middlemen inflate pricing, cause severe delays, and waste nutritious food.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Problem 1 */}
          <div className="double-bezel">
            <div className="bezel-core h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-6 text-xl">
                  📉
                </div>
                <span className="text-[11px] font-bold text-rose-400 tracking-wider uppercase">Pain Point 01</span>
                <h3 className="text-xl font-bold text-white mt-1">Unfair Pricing for Farmers</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Growers lose <strong>30% to 50%</strong> of potential crop margin to unaccountable commission brokers, weighing cuts, and informal cartels. Farmers take all weather and fertilizer risk for the smallest financial return.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-rose-400/80 font-medium flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                Drives smallholders into high-interest debt cycles.
              </div>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="double-bezel">
            <div className="bezel-core h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 text-xl">
                  ⚡
                </div>
                <span className="text-[11px] font-bold text-amber-400 tracking-wider uppercase">Pain Point 02</span>
                <h3 className="text-xl font-bold text-white mt-1">Quality & Price Volatility</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Event caterers, banquet managers, and hotels face erratic supply shortages and random price spikes. A 50% surge in tomato or onion prices on wedding morning directly destroys banquet profit margins.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-amber-400/80 font-medium flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                Zero price protection or grading consistency.
              </div>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="double-bezel">
            <div className="bezel-core h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 text-xl">
                  🗑️
                </div>
                <span className="text-[11px] font-bold text-orange-400 tracking-wider uppercase">Pain Point 03</span>
                <h3 className="text-xl font-bold text-white mt-1">Extreme Post-Harvest Spoilage</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Because farmers harvest blindly on speculation, unsold produce sits baking in open-air mandi yards for days. Up to <strong>40% of perishable harvests rot</strong> before reaching an end kitchen.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-orange-400/80 font-medium flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                Massive food loss and transportation waste.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE CROPPCONNECT SOLUTION */}
      <section id="solution" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
            The CropConnect Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            A Direct, Forward-Locked, Demand-Driven Network.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            Connecting Karnataka's top agricultural belts directly with bulk commercial kitchens with guaranteed pre-orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Solution 1 */}
          <div className="double-bezel">
            <div className="bezel-core h-full">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 text-xl">
                🤝
              </div>
              <span className="text-[11px] font-bold text-emerald-400 tracking-wider uppercase">Pillar 01</span>
              <h3 className="text-xl font-bold text-white mt-1">Direct Farmer Marketplace</h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Replaces cartel bidding with transparent wholesale matching. Verified FPOs sell directly to commercial kitchens at genuine market rates without secret broker margins or commission deductions.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Farm-gate electronic weighing & A/B grading
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Direct UPI / NEFT bank settlement to growers
                </li>
              </ul>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="double-bezel">
            <div className="bezel-core h-full">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 text-xl">
                📅
              </div>
              <span className="text-[11px] font-bold text-emerald-400 tracking-wider uppercase">Pillar 02</span>
              <h3 className="text-xl font-bold text-white mt-1">24–48h Advance Pre-Order</h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Caterers lock in exact crate quantities 1 to 2 days before an event. Farmers harvest only confirmed orders, cutting unsold dump loss to under 2% and guaranteeing fresh produce clipped within 14 hours.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-zinc-300">
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
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 text-xl">
                💬
              </div>
              <span className="text-[11px] font-bold text-emerald-400 tracking-wider uppercase">Pillar 03</span>
              <h3 className="text-xl font-bold text-white mt-1">WhatsApp & AI Automation</h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Zero app fatigue. Farmers receive voice notes and Kannada text alerts; buyers receive daily 6:00 AM wholesale price cards and 1-tap WhatsApp order booking directly through our AI bot.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-zinc-300">
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
