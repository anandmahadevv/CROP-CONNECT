import React from 'react';
import { MapPin, Navigation, Truck, Users } from 'lucide-react';

const HUBS = [
  {
    name: 'Kolar FPO Corridor',
    specialty: 'Hybrid Tomatoes, French Beans, Cauliflower',
    leadTime: '3.5 hrs to Bangalore',
    farmers: '640+ Growers',
    dailyVolume: '35 Tonnes',
    badge: 'Asia’s 2nd Largest Tomato Belt'
  },
  {
    name: 'Chikkaballapur Polyhouses',
    specialty: 'Colored Capsicum, English Cucumbers, Zucchini',
    leadTime: '2.5 hrs to Bangalore',
    farmers: '380+ Polyhouse Growers',
    dailyVolume: '18 Tonnes',
    badge: 'High-Value Exotics'
  },
  {
    name: 'Mandya Agro Belt',
    specialty: 'Yelakki Bananas, Organic Greens, Coconut & Jaggery',
    leadTime: '3 hrs to Bangalore / 1.5 hrs to Mysuru',
    farmers: '510+ Organic Farmers',
    dailyVolume: '25 Tonnes',
    badge: 'Cauvery River Basin'
  },
  {
    name: 'Belagavi & Haveri Hub',
    specialty: 'Red Onions, Baby Potatoes, Guntur Chillies',
    leadTime: 'Overnight Express (8 hrs)',
    farmers: '820+ Registered Farmers',
    dailyVolume: '60 Tonnes',
    badge: 'Northern Karnataka Belt'
  }
];

export default function KarnatakaHubs() {
  return (
    <section id="hubs" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
          <MapPin className="w-3.5 h-3.5" />
          Hyper-Local Sourcing
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Karnataka Regional Farmer Clusters
        </h2>
        <p className="mt-3 text-zinc-400 text-sm">
          We pool direct consignments from established FPOs right to urban catering banquets and hotel loading bays.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {HUBS.map((hub, idx) => (
          <div key={idx} className="double-bezel">
            <div className="bezel-core h-full flex flex-col justify-between p-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 inline-block mb-3">
                  {hub.badge}
                </span>
                <h3 className="text-lg font-bold text-white">{hub.name}</h3>
                <p className="text-xs text-zinc-300 mt-2 font-medium">{hub.specialty}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 space-y-2 text-xs text-zinc-400">
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
          </div>
        ))}
      </div>
    </section>
  );
}
