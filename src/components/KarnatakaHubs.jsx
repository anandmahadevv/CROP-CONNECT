import React, { useState } from 'react';
import { MapPin, Navigation, Truck, Users, ThermometerSun, CheckCircle2, ChevronRight, Sprout } from 'lucide-react';

const HUBS = [
  {
    id: 'kolar',
    name: 'Kolar FPO Corridor',
    kannadaName: 'ಕೋಲಾರ ಕೃಷಿ ವಲಯ',
    specialty: 'Hybrid Tomatoes, French Beans, Cauliflower',
    leadTime: '3.5 hrs to Bangalore (NH-75)',
    farmers: '640+ Growers',
    dailyVolume: '35 Tonnes',
    badge: 'Asia’s 2nd Largest Tomato Belt',
    weather: '27°C Sunny • Optimal Picking Conditions',
    fpoPartner: 'Sri Srinivasa Horticulture Farmer Producer Co.',
    quote: '"Through CropConnect, our members get paid on the same day with ₹8–10 more per kg than Mandi brokers."'
  },
  {
    id: 'chikka',
    name: 'Chikkaballapur Polyhouses',
    kannadaName: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ ಪಾಲಿಹೌಸ್',
    specialty: 'Colored Capsicum, English Cucumbers, Zucchini',
    leadTime: '2.5 hrs to Bangalore (NH-44)',
    farmers: '380+ Polyhouse Growers',
    dailyVolume: '18 Tonnes',
    badge: 'High-Value Exotics',
    weather: '25°C Controlled • Peak Crispness',
    fpoPartner: 'Nandi Valley Polyhouse Growers Union',
    quote: '"Our capsicum goes straight from polyhouses to Palace Grounds banquet kitchens within 3 hours."'
  },
  {
    id: 'mandya',
    name: 'Mandya Agro Belt',
    kannadaName: 'ಮಂಡ್ಯ ಕಾವೇರಿ ಬೆಲ್ಟ್',
    specialty: 'Yelakki Bananas, Organic Greens, Coconut & Jaggery',
    leadTime: '3 hrs to Bangalore / 1.5 hrs to Mysuru',
    farmers: '510+ Organic Farmers',
    dailyVolume: '25 Tonnes',
    badge: 'Cauvery River Basin',
    weather: '28°C Tropical • High Sugar Brix',
    fpoPartner: 'Cauvery Farmers Agro Producer Federation',
    quote: '"Zero middleman exploitation for our Yelakki bananas. Wedding caterers love the natural fragrance."'
  },
  {
    id: 'belagavi',
    name: 'Belagavi & Haveri Hub',
    kannadaName: 'ಬೆಳಗಾವಿ - ಹಾವೇರಿ ವಲಯ',
    specialty: 'Red Onions, Baby Potatoes, Guntur Chillies',
    leadTime: 'Overnight Express Milk-Run (8 hrs)',
    farmers: '820+ Registered Farmers',
    dailyVolume: '60 Tonnes',
    badge: 'Northern Karnataka Belt',
    weather: '29°C Dry • Ideal Curing & Storage',
    fpoPartner: 'Malaprabha Onion Growers Producer Alliance',
    quote: '"We load 25 tonnes every evening for Bengaluru morning delivery with zero mandi commission fees."'
  }
];

export default function KarnatakaHubs() {
  const [selectedHub, setSelectedHub] = useState(HUBS[0]);

  return (
    <section id="hubs" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] uppercase tracking-[0.2em] font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 mb-3 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          Hyper-Local Sourcing Corridors
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Karnataka Regional Farmer Clusters
        </h2>
        <p className="mt-3 text-zinc-400 text-sm">
          Click any sourcing corridor to inspect regional harvesting readiness, weather, and verified FPO partners.
        </p>
      </div>

      {/* Corridor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {HUBS.map((hub) => {
          const isSelected = selectedHub.id === hub.id;
          return (
            <button
              key={hub.id}
              onClick={() => setSelectedHub(hub)}
              className={`text-left double-bezel transition-all ${isSelected ? 'ring-2 ring-emerald-400 scale-[1.02]' : 'opacity-85 hover:opacity-100'}`}
            >
              <div className={`bezel-core h-full flex flex-col justify-between p-5 ${isSelected ? 'bg-gradient-to-b from-[#142921] to-[#0a1813]' : ''}`}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      {hub.badge}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white mt-1">{hub.name}</h3>
                  <div className="text-[11px] text-emerald-400 font-medium">{hub.kannadaName}</div>
                  <p className="text-xs text-zinc-300 mt-2 font-medium line-clamp-2">{hub.specialty}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 space-y-1.5 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Truck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{hub.leadTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{hub.farmers}</span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Corridor Live Telematics Detail Box */}
      <div className="mt-8 p-6 rounded-3xl bg-[#0a1612] border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Sprout className="w-4 h-4 text-emerald-400" />
              <span>Active Sourcing Node: {selectedHub.name} ({selectedHub.kannadaName})</span>
            </div>
            <h4 className="text-lg font-bold text-white mt-0.5">{selectedHub.fpoPartner}</h4>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-zinc-300 flex items-center gap-1.5">
              <ThermometerSun className="w-3.5 h-3.5 text-amber-400" />
              {selectedHub.weather}
            </span>
            <span className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-3 py-1.5 rounded-full font-bold">
              {selectedHub.dailyVolume} Available Daily
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-zinc-300 italic max-w-2xl leading-relaxed">
            {selectedHub.quote}
          </p>
          <div className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 whitespace-nowrap">
            Direct Milk-Run Dispatch Active
          </div>
        </div>
      </div>
    </section>
  );
}
