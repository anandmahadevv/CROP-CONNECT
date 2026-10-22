import React, { useState } from 'react';
import { Calculator as CalcIcon, TrendingUp, Sparkles, HeartHandshake, ArrowRight, ShieldCheck } from 'lucide-react';

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
      <div className="rounded-[2.25rem] bg-white p-7 sm:p-9 border border-slate-200/90 shadow-lg">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#1877F2] bg-blue-50 border border-blue-100 mb-2">
            <CalcIcon className="w-3.5 h-3.5 text-[#1877F2]" />
            Event Procurement Economics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Event Savings & Farmer Impact Calculator
          </h2>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            Model your upcoming wedding or banquet produce requirements to estimate bulk savings and direct grower earnings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders Area (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Tomato Slider */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-lg">🍅</span> Tomato (Hybrid Grade A)
                </label>
                <span className="font-mono text-slate-900 font-extrabold text-sm bg-white px-3 py-0.5 rounded-full border border-slate-200 shadow-sm">
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
                className="w-full accent-[#1877F2] cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-medium">
                <span>50 kg</span>
                <span className="text-emerald-600 font-bold">Save ₹9 / kg vs Mandi</span>
                <span>2,500 kg</span>
              </div>
            </div>

            {/* Capsicum Slider */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-lg">🫑</span> Shimla Capsicum
                </label>
                <span className="font-mono text-slate-900 font-extrabold text-sm bg-white px-3 py-0.5 rounded-full border border-slate-200 shadow-sm">
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
                className="w-full accent-[#1877F2] cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-medium">
                <span>20 kg</span>
                <span className="text-emerald-600 font-bold">Save ₹14 / kg vs Mandi</span>
                <span>1,200 kg</span>
              </div>
            </div>

            {/* Onion Slider */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-lg">🧅</span> Belagavi Red Onion
                </label>
                <span className="font-mono text-slate-900 font-extrabold text-sm bg-white px-3 py-0.5 rounded-full border border-slate-200 shadow-sm">
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
                className="w-full accent-[#1877F2] cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-medium">
                <span>50 kg</span>
                <span className="text-emerald-600 font-bold">Save ₹9 / kg vs Mandi</span>
                <span>3,500 kg</span>
              </div>
            </div>

            {/* Value Distribution Bar */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs space-y-2">
              <div className="flex justify-between text-slate-600 text-[11px] font-bold">
                <span>Transparent Value Distribution:</span>
                <span className="text-emerald-600 font-extrabold">68% directly to Farmers</span>
              </div>
              <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden flex shadow-inner">
                <div className="bg-[#1877F2] h-full" style={{ width: '68%' }} title="Farmer: 68%"></div>
                <div className="bg-[#D4FF32] h-full" style={{ width: '12%' }} title="Logistics: 12%"></div>
                <div className="bg-slate-900 h-full" style={{ width: '4%' }} title="Platform Fee: 4%"></div>
                <div className="bg-emerald-500 h-full" style={{ width: '16%' }} title="Buyer Discount: 16%"></div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                <span className="text-[#1877F2]">🔵 Farmer (68%)</span>
                <span className="text-slate-800">🟡 Logistics (12%)</span>
                <span className="text-slate-900">⚫ Fee (4%)</span>
                <span className="text-emerald-600">🟢 Direct Savings (16%)</span>
              </div>
            </div>
          </div>

          {/* Results Card (5 cols) in Deep Obsidian */}
          <div className="lg:col-span-5 p-7 rounded-[2rem] bg-[#0B1220] text-white shadow-xl relative overflow-hidden">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
              <span>Calculated Batch Invoice</span>
              <span className="text-black bg-[#D4FF32] px-2.5 py-0.5 rounded-full font-mono text-[10px] font-extrabold">
                {(tomatoQty + capsicumQty + onionQty).toLocaleString('en-IN')} kg Total
              </span>
            </div>

            <div className="space-y-3 pb-4 border-b border-white/10 text-sm">
              <div className="flex justify-between text-slate-400">
                <span>Traditional Mandi Cost:</span>
                <span className="line-through text-slate-500 font-mono">₹{mandiCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-white font-bold text-lg">
                <span>CropConnect Forward Rate:</span>
                <span className="text-[#D4FF32] font-mono font-black">₹{cropConnectCost.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Highlight Metric */}
            <div className="py-4 space-y-3">
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-300 font-semibold">Your Direct Event Savings</div>
                  <div className="text-3xl font-black text-[#D4FF32] font-mono mt-0.5">
                    ₹{totalSavings.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block text-xs font-black text-black bg-[#D4FF32] px-3 py-1 rounded-full shadow-md">
                    Save {savingsPct}%
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#D4FF32]">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300 font-semibold">Extra Farmer Earnings</div>
                    <div className="text-sm font-extrabold text-white font-mono">
                      +₹{farmerExtraIncome.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
                <div className="text-right text-[11px] text-emerald-400 font-medium">
                  Direct Bank Payout
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
              className="w-full mt-2 py-3.5 rounded-full bg-[#D4FF32] hover:bg-[#c6f71d] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(212,255,50,0.4)] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Lock this Batch via AI Bot</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
