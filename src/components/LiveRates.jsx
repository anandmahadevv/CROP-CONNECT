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
    name: 'Ooty English Carrot (Table Grade)',
    icon: '🥕',
    category: 'exotics',
    origin: 'Chikkamagaluru Foothills',
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
    <section id="rates" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="rounded-[2.25rem] bg-white p-7 sm:p-9 border border-slate-200/90 shadow-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#1877F2] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1877F2] animate-ping"></span>
              Live Benchmark • Karnataka Sourcing Inbound
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Daily Wholesale Harvest Rate Sheet
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#1877F2]" />
              Updated 05:30 AM Today (FPO Verified)
            </span>
            <span className="text-[11px] font-extrabold text-black bg-[#D4FF32] px-3 py-1 rounded-full shadow-sm">
              T+0 Bank Settlement
            </span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${filter === 'all' ? 'bg-[#0B1220] text-white font-extrabold shadow-sm' : 'bg-slate-100 text-slate-600 hover:text-slate-900'}`}
            >
              All Produce ({PRODUCE_DATA.length})
            </button>
            <button 
              onClick={() => setFilter('vegetables')}
              className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${filter === 'vegetables' ? 'bg-[#0B1220] text-white font-extrabold shadow-sm' : 'bg-slate-100 text-slate-600 hover:text-slate-900'}`}
            >
              Daily Vegetables
            </button>
            <button 
              onClick={() => setFilter('exotics')}
              className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${filter === 'exotics' ? 'bg-[#0B1220] text-white font-extrabold shadow-sm' : 'bg-slate-100 text-slate-600 hover:text-slate-900'}`}
            >
              Polyhouse Exotics
            </button>
            <button 
              onClick={() => setFilter('fruits')}
              className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${filter === 'fruits' ? 'bg-[#0B1220] text-white font-extrabold shadow-sm' : 'bg-slate-100 text-slate-600 hover:text-slate-900'}`}
            >
              Fruits & Plantation
            </button>
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search crop or origin..."
              className="w-full pl-9 pr-3 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1877F2] transition-colors"
            />
          </div>
        </div>

        {/* Rates Table */}
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-[11px] text-slate-400 uppercase tracking-wider border-b border-slate-100 font-bold">
                <th className="pb-3">Produce & Quality Grade</th>
                <th className="pb-3">Origin Hub</th>
                <th className="pb-3">Mandi APMC</th>
                <th className="pb-3 text-[#1877F2]">CropConnect Direct</th>
                <th className="pb-3">Farmer Payout</th>
                <th className="pb-3">Available Batch</th>
                <th className="pb-3 text-right">Pre-Order Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredProduce.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="py-4 font-bold text-slate-900 flex items-center gap-3">
                    <span className="text-2xl p-2 rounded-2xl bg-slate-100 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </span>
                    <div>
                      <span className="text-sm font-bold text-slate-900 group-hover:text-[#1877F2] transition-colors">
                        {item.name}
                      </span>
                      <div className="text-[11px] text-emerald-600 font-bold">{item.brix}</div>
                      <div className="text-[10px] text-slate-400">{item.shelfLife}</div>
                    </div>
                  </td>
                  <td className="py-4 text-xs font-semibold text-slate-600">
                    <div>{item.origin}</div>
                    <span className="text-[10px] text-slate-400 font-normal">FPO Certified</span>
                  </td>
                  <td className="py-4 text-slate-400 line-through font-mono font-medium">₹{item.mandiPrice}/kg</td>
                  <td className="py-4 font-black text-[#1877F2] text-base font-mono">
                    ₹{item.cropConnectPrice} <span className="text-xs font-normal text-slate-400">/ kg</span>
                  </td>
                  <td className="py-4">
                    <span className="inline-flex items-center gap-1 text-xs font-extrabold text-black bg-[#D4FF32] px-2.5 py-1 rounded-md shadow-sm">
                      {item.farmerGain} Net
                    </span>
                  </td>
                  <td className="py-4 text-xs font-mono">
                    <div className="text-slate-900 font-bold">{item.availableQty}</div>
                    <span className="text-[10px] text-amber-600 font-bold flex items-center gap-1 mt-0.5">
                      <Flame className="w-3 h-3 text-amber-500" /> {item.demand}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <button 
                      onClick={() => onPreBookItem(item)}
                      className="text-xs bg-[#0B1220] hover:bg-slate-800 text-white font-extrabold px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ml-auto shadow-sm hover:scale-105 active:scale-95"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#D4FF32]" />
                      <span>Pre-Book</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Consolidated in sanitized reusable plastic crates (zero mesh-bag damage).
          </span>
          <span className="text-[#1877F2] font-bold">Minimum order: 100 kg per crop</span>
        </div>
      </div>
    </section>
  );
}
