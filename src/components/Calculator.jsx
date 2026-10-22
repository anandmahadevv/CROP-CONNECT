import React, { useState } from 'react';
import { Calculator as CalcIcon, TrendingUp, Sparkles, HeartHandshake, ArrowRight, PieChart, ShieldCheck } from 'lucide-react';

export default function Calculator({ onPreBookCustom }) {
  const [tomatoQty, setTomatoQty] = useState(600);
  const [capsicumQty, setCapsicumQty] = useState(200);
  const [onionQty, setOnionQty] = useState(400);

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
        <div className="bezel-core bg-gradient-to-br from-[#0c1814] via-[#08120f] to-[#050c09]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 mb-2 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <CalcIcon className="w-3.5 h-3.5 text-emerald-400" />
              Interactive Procurement Economics
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Event Savings & Farmer Impact Calculator</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Drag the sliders to model your upcoming banquet or catering produce requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders Area (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Tomato Slider */}
              <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/5 hover:border-emerald-500/30 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="text-lg">🍅</span> Tomato (Hybrid Grade A)
                  </label>
                  <span className="font-mono text-emerald-300 font-extrabold text-sm bg-emerald-500/15 px-3 py-0.5 rounded-full border border-emerald-500/30">
                    {tomatoQty} kg
                  </span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="2500" 
                  step="50"
                  value={tomatoQty} 
                  onChange={(e) => setTomatoQty(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer h-2 bg-zinc-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-zinc-400 mt-1.5 font-medium">
                  <span>50 kg</span>
                  <span className="text-emerald-400">Save ₹9 / kg vs Mandi</span>
                  <span>2,500 kg</span>
                </div>
              </div>

              {/* Capsicum Slider */}
              <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/5 hover:border-emerald-500/30 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="text-lg">🫑</span> Shimla Capsicum
                  </label>
                  <span className="font-mono text-emerald-300 font-extrabold text-sm bg-emerald-500/15 px-3 py-0.5 rounded-full border border-emerald-500/30">
                    {capsicumQty} kg
                  </span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="1200" 
                  step="10"
                  value={capsicumQty} 
                  onChange={(e) => setCapsicumQty(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer h-2 bg-zinc-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-zinc-400 mt-1.5 font-medium">
                  <span>20 kg</span>
                  <span className="text-emerald-400">Save ₹14 / kg vs Mandi</span>
                  <span>1,200 kg</span>
                </div>
              </div>

              {/* Onion Slider */}
              <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/5 hover:border-emerald-500/30 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="text-lg">🧅</span> Belagavi Red Onion
                  </label>
                  <span className="font-mono text-emerald-300 font-extrabold text-sm bg-emerald-500/15 px-3 py-0.5 rounded-full border border-emerald-500/30">
                    {onionQty} kg
                  </span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="3500" 
                  step="50"
                  value={onionQty} 
                  onChange={(e) => setOnionQty(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer h-2 bg-zinc-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-zinc-400 mt-1.5 font-medium">
                  <span>50 kg</span>
                  <span className="text-emerald-400">Save ₹9 / kg vs Mandi</span>
                  <span>3,500 kg</span>
                </div>
              </div>

              {/* Value Realization Bar */}
              <div className="p-4 rounded-2xl bg-black/30 border border-white/5 text-xs space-y-2">
                <div className="flex justify-between text-zinc-400 text-[11px]">
                  <span>Mandi vs CropConnect Value Distribution:</span>
                  <span className="text-emerald-400 font-bold">CropConnect: 68% directly to Farmers</span>
                </div>
                <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden flex">
                  <div className="bg-emerald-500 h-full" style={{ width: '68%' }} title="Farmer Share: 68%"></div>
                  <div className="bg-teal-400 h-full" style={{ width: '12%' }} title="Logistics: 12%"></div>
                  <div className="bg-amber-400 h-full" style={{ width: '4%' }} title="Platform Fee: 4%"></div>
                  <div className="bg-blue-400 h-full" style={{ width: '16%' }} title="Buyer Discount: 16%"></div>
                </div>
                <div className="flex justify-between text-[10px] text-zinc-500">
                  <span className="text-emerald-400 font-semibold">🟩 Farmer (68%)</span>
                  <span className="text-teal-300 font-semibold">🟦 Milk-Run Logistics (12%)</span>
                  <span className="text-amber-400 font-semibold">🟨 Fee (4%)</span>
                  <span className="text-blue-400 font-semibold">🟦 Direct Savings (16%)</span>
                </div>
              </div>
            </div>

            {/* Results Card (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-black/60 border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4 flex items-center justify-between">
                <span>Calculated Batch Invoice</span>
                <span className="text-emerald-300 bg-emerald-500/15 px-2.5 py-1 rounded-full font-mono text-[10px] border border-emerald-500/30">
                  {(tomatoQty + capsicumQty + onionQty).toLocaleString('en-IN')} kg Total
                </span>
              </div>

              <div className="space-y-3 pb-4 border-b border-white/10 text-sm">
                <div className="flex justify-between text-zinc-400">
                  <span>Traditional Mandi APMC Cost:</span>
                  <span className="line-through text-zinc-500 font-mono font-medium">₹{mandiCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-white font-bold text-lg">
                  <span>CropConnect Forward Rate:</span>
                  <span className="text-emerald-400 font-mono">₹{cropConnectCost.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Highlight Metrics */}
              <div className="py-4 space-y-3">
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-between shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                  <div>
                    <div className="text-xs text-zinc-300 font-semibold">Your Direct Event Savings</div>
                    <div className="text-3xl font-extrabold text-emerald-300 font-mono mt-0.5">
                      ₹{totalSavings.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-xs font-extrabold text-black bg-gradient-to-r from-emerald-400 to-teal-300 px-3 py-1 rounded-full shadow-md">
                      Save {savingsPct}%
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-300 font-semibold">Extra Farmer Earnings</div>
                      <div className="text-base font-extrabold text-white font-mono">
                        +₹{farmerExtraIncome.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-[11px] text-emerald-400 font-medium">
                    Zero Broker Skimming
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
                className="w-full mt-2 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 hover:brightness-110 text-black font-extrabold text-sm transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2"
              >
                <span>Lock this Batch via AI Bot</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
