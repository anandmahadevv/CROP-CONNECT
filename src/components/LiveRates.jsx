import React, { useState } from 'react';
import { ArrowUpRight, Clock, ShieldCheck, Sparkles, Filter } from 'lucide-react';

const PRODUCE_DATA = [
  {
    id: 'tom-01',
    name: 'Tomato (Hybrid Grade A)',
    icon: '🍅',
    category: 'vegetables',
    origin: 'Kolar FPO Belt',
    mandiPrice: 38,
    cropConnectPrice: 29,
    farmerGain: '+38%',
    availableQty: '14,500 kg',
    shelfLife: '3–4 days optimal'
  },
  {
    id: 'cap-01',
    name: 'Shimla Capsicum (Dark Green)',
    icon: '🫑',
    category: 'vegetables',
    origin: 'Chikkaballapur Polyhouses',
    mandiPrice: 62,
    cropConnectPrice: 48,
    farmerGain: '+32%',
    availableQty: '6,200 kg',
    shelfLife: '4–5 days'
  },
  {
    id: 'oni-01',
    name: 'Belagavi Red Onion (Medium)',
    icon: '🧅',
    category: 'vegetables',
    origin: 'Belagavi Grower Alliance',
    mandiPrice: 44,
    cropConnectPrice: 35,
    farmerGain: '+28%',
    availableQty: '28,000 kg',
    shelfLife: '14+ days'
  },
  {
    id: 'ban-01',
    name: 'Yelakki Banana (Grade A+)',
    icon: '🍌',
    category: 'fruits',
    origin: 'Mandya Organic Cluster',
    mandiPrice: 58,
    cropConnectPrice: 42,
    farmerGain: '+42%',
    availableQty: '9,000 kg',
    shelfLife: '5 days'
  },
  {
    id: 'chi-01',
    name: 'Guntur / Byadagi Green Chilli',
    icon: '🌶️',
    category: 'vegetables',
    origin: 'Haveri-Dharwad Hub',
    mandiPrice: 75,
    cropConnectPrice: 58,
    farmerGain: '+35%',
    availableQty: '4,500 kg',
    shelfLife: '6 days'
  },
  {
    id: 'car-01',
    name: 'Ooty English Carrot (Washed)',
    icon: '🥕',
    category: 'exotics',
    origin: 'Chikkamagaluru / Nilgiri Foothills',
    mandiPrice: 55,
    cropConnectPrice: 43,
    farmerGain: '+30%',
    availableQty: '5,800 kg',
    shelfLife: '7 days'
  }
];

export default function LiveRates({ onPreBookItem }) {
  const [filter, setFilter] = useState('all');

  const filteredProduce = filter === 'all' 
    ? PRODUCE_DATA 
    : PRODUCE_DATA.filter(item => item.category === filter);

  return (
    <section id="rates" className="py-12 px-4 max-w-6xl mx-auto">
      <div className="double-bezel">
        <div className="bezel-core">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Karnataka Live Harvest Benchmark • Bengaluru Inbound
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">Daily Transparent Wholesale Rate Sheet</h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Updated: 05:30 AM Today (FPO Verified)
              </span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 text-xs font-semibold">
            <button 
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${filter === 'all' ? 'bg-emerald-500 text-black font-bold' : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'}`}
            >
              All Harvests ({PRODUCE_DATA.length})
            </button>
            <button 
              onClick={() => setFilter('vegetables')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${filter === 'vegetables' ? 'bg-emerald-500 text-black font-bold' : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'}`}
            >
              Daily Vegetables
            </button>
            <button 
              onClick={() => setFilter('exotics')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${filter === 'exotics' ? 'bg-emerald-500 text-black font-bold' : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'}`}
            >
              Polyhouse & Exotics
            </button>
            <button 
              onClick={() => setFilter('fruits')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${filter === 'fruits' ? 'bg-emerald-500 text-black font-bold' : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'}`}
            >
              Fruits & Plantation
            </button>
          </div>

          {/* Rate Table */}
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs text-zinc-400 uppercase tracking-wider border-b border-white/10">
                  <th className="pb-3 font-semibold">Produce & Grade</th>
                  <th className="pb-3 font-semibold">Origin Hub</th>
                  <th className="pb-3 font-semibold">Mandi APMC Rate</th>
                  <th className="pb-3 font-semibold text-emerald-400">CropConnect Direct</th>
                  <th className="pb-3 font-semibold">Farmer Realization</th>
                  <th className="pb-3 font-semibold">Available Batch</th>
                  <th className="pb-3 font-semibold text-right">Instant Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                {filteredProduce.map((item) => (
                  <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="py-4 font-bold text-white flex items-center gap-2.5">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <span>{item.name}</span>
                        <div className="text-[11px] text-zinc-400 font-normal">{item.shelfLife}</div>
                      </div>
                    </td>
                    <td className="py-4 text-xs text-zinc-400 font-medium">{item.origin}</td>
                    <td className="py-4 text-zinc-500 line-through">₹{item.mandiPrice} / kg</td>
                    <td className="py-4 font-extrabold text-emerald-400 text-base">
                      ₹{item.cropConnectPrice} <span className="text-xs font-normal text-zinc-400">/ kg</span>
                    </td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                        {item.farmerGain} Payout
                      </span>
                    </td>
                    <td className="py-4 text-xs text-zinc-400 font-mono">{item.availableQty}</td>
                    <td className="py-4 text-right">
                      <button 
                        onClick={() => onPreBookItem(item)}
                        className="text-xs bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-black font-bold px-3.5 py-1.5 rounded-full border border-emerald-500/30 transition-all flex items-center gap-1.5 ml-auto"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Pre-Book</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-2">
            <span>💡 All rates include farm-gate quality grading, weighing certification, and transit crates.</span>
            <span className="text-emerald-400 font-medium">Minimum bulk pre-order: 100 kg per item</span>
          </div>
        </div>
      </div>
    </section>
  );
}
