import React, { useState } from 'react';
import { MapPin, Navigation, Truck, Users, ThermometerSun, CheckCircle2, Sprout } from 'lucide-react';

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
    weather: '27°C Sunny • Optimal Harvesting',
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
        <div className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-slate-400 mb-2">
          • REGIONAL HUBS
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Karnataka Regional Farmer Clusters
        </h2>
        <p className="mt-3 text-slate-500 text-sm">
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
              className={`text-left rounded-3xl p-6 transition-all border ${
                isSelected 
                  ? 'bg-white border-[#1877F2] shadow-xl ring-2 ring-[#1877F2]/20 scale-[1.02]' 
                  : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-black bg-[#D4FF32] px-2.5 py-0.5 rounded-full">
                      {hub.badge}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#1877F2] animate-pulse"></span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1">{hub.name}</h3>
                  <div className="text-[11px] text-[#1877F2] font-semibold">{hub.kannadaName}</div>
                  <p className="text-xs text-slate-500 mt-2 font-medium line-clamp-2">{hub.specialty}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Truck className="w-3.5 h-3.5 text-[#1877F2]" />
                    <span>{hub.leadTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#1877F2]" />
                    <span>{hub.farmers}</span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Corridor Live Telematics Box */}
      <div className="mt-8 p-7 rounded-[2rem] bg-[#0B1220] text-white shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#D4FF32] flex items-center gap-2">
              <Sprout className="w-4 h-4 text-[#D4FF32]" />
              <span>Active Sourcing Node: {selectedHub.name} ({selectedHub.kannadaName})</span>
            </div>
            <h4 className="text-lg font-bold text-white mt-1">{selectedHub.fpoPartner}</h4>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="bg-white/10 px-3 py-1.5 rounded-full text-slate-200 flex items-center gap-1.5">
              <ThermometerSun className="w-3.5 h-3.5 text-amber-400" />
              {selectedHub.weather}
            </span>
            <span className="bg-[#D4FF32] text-black font-extrabold px-3 py-1.5 rounded-full shadow-sm">
              {selectedHub.dailyVolume} Available Daily
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-slate-300 italic max-w-2xl leading-relaxed">
            {selectedHub.quote}
          </p>
          <div className="text-xs font-bold text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20 whitespace-nowrap">
            Direct Milk-Run Dispatch Active
          </div>
        </div>
      </div>
    </section>
  );
}
