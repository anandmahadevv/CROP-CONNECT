import React, { useState } from 'react';
import { Calculator as CalcIcon, TrendingUp, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';

export default function Calculator({ onPreBookCustom }) {
  const [tomatoQty, setTomatoQty] = useState(500);
  const [capsicumQty, setCapsicumQty] = useState(150);
  const [onionQty, setOnionQty] = useState(300);

  // Mandi vs CropConnect Prices
  const mandiCost = (tomatoQty * 38) + (capsicumQty * 62) + (onionQty * 44);
  const cropConnectCost = (tomatoQty * 29) + (capsicumQty * 48) + (onionQty * 35);
  const totalSavings = mandiCost - cropConnectCost;
  const savingsPct = Math.round((totalSavings / mandiCost) * 100);

  // Additional Farmer Realization
  const farmerExtraIncome = Math.round((tomatoQty * 8) + (capsicumQty * 12) + (onionQty * 7));

  return (
    <section id="calculator" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="double-bezel">
        <div className="bezel-core bg-gradient-to-br from-[#0c1613] via-[#09110f] to-[#070d0b]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-2">
              <CalcIcon className="w-3.5 h-3.5" />
              Event Procurement Economics
            </div>
            <h2 className="text-3xl font-extrabold text-white">Event Savings & Farmer Impact Calculator</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Select your expected catering or hotel banquet quantities to calculate cost savings and direct farmer income boost.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders Area (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Tomato Slider */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <span>🍅</span> Tomato (Hybrid Grade A)
                  </label>
                  <span className="font-mono text-emerald-400 font-bold text-sm bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                    {tomatoQty} kg
                  </span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="2000" 
                  step="50"
                  value={tomatoQty} 
                  onChange={(e) => setTomatoQty(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-zinc-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 mt-1">
                  <span>50 kg</span>
                  <span>Mandi: ₹38/kg vs Direct: ₹29/kg</span>
                  <span>2,000 kg</span>
                </div>
              </div>

              {/* Capsicum Slider */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <span>🫑</span> Shimla Capsicum
                  </label>
                  <span className="font-mono text-emerald-400 font-bold text-sm bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                    {capsicumQty} kg
                  </span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="1000" 
                  step="10"
                  value={capsicumQty} 
                  onChange={(e) => setCapsicumQty(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-zinc-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 mt-1">
                  <span>20 kg</span>
                  <span>Mandi: ₹62/kg vs Direct: ₹48/kg</span>
                  <span>1,000 kg</span>
                </div>
              </div>

              {/* Onion Slider */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <span>🧅</span> Belagavi Red Onion
                  </label>
                  <span className="font-mono text-emerald-400 font-bold text-sm bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                    {onionQty} kg
                  </span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="3000" 
                  step="50"
                  value={onionQty} 
                  onChange={(e) => setOnionQty(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-zinc-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 mt-1">
                  <span>50 kg</span>
                  <span>Mandi: ₹44/kg vs Direct: ₹35/kg</span>
                  <span>3,000 kg</span>
                </div>
              </div>
            </div>

            {/* Results Card (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-emerald-500/20 shadow-2xl relative overflow-hidden">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4 flex items-center justify-between">
                <span>Estimated Batch Summary</span>
                <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono text-[10px]">
                  {tomatoQty + capsicumQty + onionQty} kg Total
                </span>
              </div>

              <div className="space-y-3 pb-4 border-b border-white/10 text-sm">
                <div className="flex justify-between text-zinc-400">
                  <span>Mandi APMC Estimate:</span>
                  <span className="line-through text-zinc-500 font-mono">₹{mandiCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-white font-bold text-base">
                  <span>CropConnect Direct:</span>
                  <span className="text-emerald-400 font-mono">₹{cropConnectCost.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Highlight Metrics */}
              <div className="py-4 space-y-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-zinc-300 font-medium">Your Direct Savings</div>
                    <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                      ₹{totalSavings.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full">
                      Save {savingsPct}%
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <HeartHandshake className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="text-xs text-zinc-300 font-medium">Extra Farmer Payout</div>
                      <div className="text-lg font-bold text-white font-mono">
                        +₹{farmerExtraIncome.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-[11px] text-zinc-400">
                    Bypassing brokers
                  </div>
                </div>
              </div>

              {/* Direct Pre-Book Button */}
              <button 
                onClick={() => onPreBookCustom({
                  items: `Tomatoes: ${tomatoQty}kg, Capsicum: ${capsicumQty}kg, Onions: ${onionQty}kg`,
                  cost: cropConnectCost,
                  savings: totalSavings
                })}
                className="w-full mt-2 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2"
              >
                <span>Pre-Book This Batch via AI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
