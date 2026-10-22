import React, { useState } from 'react';
import { ArrowUpRight, Clock, ShieldCheck, Sparkles, Filter, Search, Flame, CheckCircle2 } from 'lucide-react';

const PRODUCE_DATA = [
  {
    id: 'tom-01',
    name: 'Tomato (Hybrid Grade A+)',
    icon: '🍅',
    category: 'vegetables',
    origin: 'Kolar FPO Belt',
    mandiPrice: 38,
    cropConnectPrice: 29,
    farmerGain: '+38%',
    availableQty: '14,500 kg',
    shelfLife: '3–4 days optimal',
    brix: 'Brix 5.2 • Firm Red',
    demand: 'High (85% Reserved)'
  },
  {
    id: 'cap-01',
    name: 'Shimla Capsicum (Crisp Dark Green)',
    icon: '🫑',
    category: 'vegetables',
    origin: 'Chikkaballapur Polyhouses',
    mandiPrice: 62,
    cropConnectPrice: 48,
    farmerGain: '+32%',
    availableQty: '6,200 kg',
    shelfLife: '4–5 days',
    brix: 'Grade A Thick-Walled',
    demand: 'High (78% Reserved)'
  },
  {
    id: 'oni-01',
    name: 'Belagavi Red Onion (Medium Firm)',
    icon: '🧅',
    category: 'vegetables',
    origin: 'Belagavi Grower Alliance',
    mandiPrice: 44,
    cropConnectPrice: 35,
    farmerGain: '+28%',
    availableQty: '28,000 kg',
    shelfLife: '14+ days',
    brix: '45–55mm Uniform Sort',
    demand: 'Moderate'
  },
  {
    id: 'ban-01',
    name: 'Yelakki Banana (Sweet Fragrant)',
    icon: '🍌',
    category: 'fruits',
    origin: 'Mandya Organic Cluster',
    mandiPrice: 58,
    cropConnectPrice: 42,
    farmerGain: '+42%',
    availableQty: '9,000 kg',
    shelfLife: '5 days',
    brix: 'Brix 21° Natural Sweet',
    demand: 'High (92% Reserved)'
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
    shelfLife: '6 days',
    brix: 'High Pungency • Fresh Green',
    demand: 'Ample'
  },
  {
    id: 'car-01',
    name: 'Ooty English Carrot (Washed Table Grade)',
    icon: '🥕',
    category: 'exotics',
    origin: 'Chikkamagaluru / Nilgiri Foothills',
    mandiPrice: 55,
    cropConnectPrice: 43,
    farmerGain: '+30%',
    availableQty: '5,800 kg',
    shelfLife: '7 days',
    brix: 'Hydro-Cooled • Crunchy Sweet',
    demand: 'Moderate'
  }
];

export default function LiveRates({ onPreBookItem }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProduce = PRODUCE_DATA.filter((item) => {
    const matchesCategory = filter === 'all' || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="rates" className="py-12 px-4 max-w-6xl mx-auto">
      <div className="double-bezel">
        <div className="bezel-core">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Karnataka Live Harvest Benchmark • Bengaluru Sourcing Inbound
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Daily Transparent Wholesale Rate Sheet
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-zinc-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Updated: 05:30 AM Today (FPO Verified)
              </span>
              <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-bold">
                T+0 Bank Escrow
              </span>
            </div>
          </div>

          {/* Controls: Search & Category Filter */}
          <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold">
              <button 
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${filter === 'all' ? 'bg-emerald-500 text-black font-extrabold shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'}`}
              >
                All Produce ({PRODUCE_DATA.length})
              </button>
              <button 
                onClick={() => setFilter('vegetables')}
                className={`px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${filter === 'vegetables' ? 'bg-emerald-500 text-black font-extrabold shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'}`}
              >
                Daily Vegetables
              </button>
              <button 
                onClick={() => setFilter('exotics')}
                className={`px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${filter === 'exotics' ? 'bg-emerald-500 text-black font-extrabold shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'}`}
              >
                Polyhouse Exotics
              </button>
              <button 
                onClick={() => setFilter('fruits')}
                className={`px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${filter === 'fruits' ? 'bg-emerald-500 text-black font-extrabold shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'}`}
              >
                Fruits & Plantation
              </button>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[220px]">
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by crop or origin..."
                className="w-full pl-9 pr-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          {/* Rate Table */}
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-[11px] text-zinc-400 uppercase tracking-wider border-b border-white/10">
                  <th className="pb-3 font-semibold">Produce & Quality Spec</th>
                  <th className="pb-3 font-semibold">Origin Hub</th>
                  <th className="pb-3 font-semibold">Mandi APMC</th>
                  <th className="pb-3 font-semibold text-emerald-400">CropConnect Direct</th>
                  <th className="pb-3 font-semibold">Farmer Realization</th>
                  <th className="pb-3 font-semibold">Availability & Demand</th>
                  <th className="pb-3 font-semibold text-right">Instant Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                {filteredProduce.map((item) => (
                  <tr key={item.id} className="hover:bg-white/[0.025] transition-colors group">
                    <td className="py-4 font-bold text-white flex items-center gap-3">
                      <span className="text-2xl p-1.5 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <div>
                        <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {item.name}
                        </span>
                        <div className="text-[11px] text-emerald-400/90 font-medium">{item.brix}</div>
                        <div className="text-[10px] text-zinc-400 font-normal">{item.shelfLife}</div>
                      </div>
                    </td>
                    <td className="py-4 text-xs text-zinc-300 font-medium">
                      <div>{item.origin}</div>
                      <span className="text-[10px] text-zinc-400">FPO Certified</span>
                    </td>
                    <td className="py-4 text-zinc-500 line-through font-mono">₹{item.mandiPrice}/kg</td>
                    <td className="py-4 font-extrabold text-emerald-400 text-base font-mono">
                      ₹{item.cropConnectPrice} <span className="text-xs font-normal text-zinc-400">/ kg</span>
                    </td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-300 bg-emerald-500/15 px-2.5 py-1 rounded-md border border-emerald-500/30">
                        {item.farmerGain} Payout
                      </span>
                    </td>
                    <td className="py-4 text-xs font-mono">
                      <div className="text-white font-bold">{item.availableQty}</div>
                      <span className="text-[10px] text-amber-400 flex items-center gap-1 mt-0.5">
                        <Flame className="w-3 h-3 text-amber-400" /> {item.demand}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button 
                        onClick={() => onPreBookItem(item)}
                        className="text-xs bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-black font-extrabold px-3.5 py-1.5 rounded-full border border-emerald-500/30 hover:border-emerald-500 transition-all flex items-center gap-1.5 ml-auto shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
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
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              All deliveries are transported in returnable sanitized plastic crates (zero mesh-bag damage).
            </span>
            <span className="text-emerald-400 font-bold">Standard Lead Time: 24h Forward Lock</span>
          </div>
        </div>
      </div>
    </section>
  );
}
