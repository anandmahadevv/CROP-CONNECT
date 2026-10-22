import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Sprout } from 'lucide-react';

export function RatesModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    phone: '',
    area: 'Bengaluru (Palace Grounds / Central)',
    volume: '500 kg – 2,000 kg / week'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="double-bezel max-w-md w-full">
        <div className="bezel-core">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h3 className="text-lg font-bold text-white">Request Daily Wholesale Rates</h3>
              <span className="text-[11px] text-emerald-400">Direct FPO pricing delivered every 06:00 AM</span>
            </div>
            <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Business / Caterer Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  placeholder="e.g. Royal Caterers / Palace Banquets" 
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">WhatsApp Number</label>
                <input 
                  type="tel" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 98765 43210" 
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Delivery Destination</label>
                <select 
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1715] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500"
                >
                  <option>Bengaluru (Palace Grounds / Central)</option>
                  <option>Bengaluru (Electronic City / South)</option>
                  <option>Bengaluru (Whitefield / East)</option>
                  <option>Mysuru Banquet Hub</option>
                  <option>Hubballi-Dharwad</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Estimated Weekly Produce Volume</label>
                <select 
                  value={formData.volume}
                  onChange={(e) => setFormData({...formData, volume: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1715] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500"
                >
                  <option>200 kg – 500 kg / week</option>
                  <option>500 kg – 2,000 kg / week</option>
                  <option>2,000 kg+ / week (Large Event / Hotel Chain)</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2"
              >
                <span>Send Me Morning WhatsApp Rate Cards</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="mt-4 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-base font-bold text-white">Enrollment Confirmed!</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Thank you, <strong>{formData.businessName}</strong>. You will receive tomorrow's 06:00 AM verified harvest rate sheet directly at <strong>{formData.phone}</strong>.
              </p>
              <button 
                onClick={onClose} 
                className="px-5 py-2 rounded-full bg-emerald-500 text-black font-bold text-xs"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function FarmerModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: 'Kolar (Tomato / Exotics)',
    crops: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="double-bezel max-w-md w-full">
        <div className="bezel-core">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h3 className="text-lg font-bold text-white">Farmer / FPO Onboarding</h3>
              <span className="text-[11px] text-emerald-400">ರೈತರ ನೇರ ನೋಂದಣಿ (35%+ ಹೆಚ್ಚಿನ ಆದಾಯ)</span>
            </div>
            <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Farmer / FPO Lead Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Basavaraj Gowda" 
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Mobile / WhatsApp Number</label>
                <input 
                  type="tel" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 99000 54321" 
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Farming Region / District</label>
                <select 
                  value={formData.district}
                  onChange={(e) => setFormData({...formData, district: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1715] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500"
                >
                  <option>Kolar (Tomato / Exotics)</option>
                  <option>Chikkaballapur (Capsicum / Veg)</option>
                  <option>Mandya (Bananas / Greens)</option>
                  <option>Belagavi (Onion / Potato / Veg)</option>
                  <option>Haveri / Dharwad</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Primary Crops Harvested</label>
                <input 
                  type="text" 
                  required 
                  value={formData.crops}
                  onChange={(e) => setFormData({...formData, crops: e.target.value})}
                  placeholder="e.g. Tomato, Green Chilli, Capsicum" 
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2"
              >
                <span>Join CropConnect Network (ನೋಂದಾಯಿಸಿ)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="mt-4 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <Sprout className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-base font-bold text-white">ಧನ್ಯವಾದಗಳು! (Thank You!)</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Welcome <strong>{formData.name}</strong>. A CropConnect {formData.district} field cluster manager will contact you within 2 hours to set up your direct farm gate weigh-in pass.
              </p>
              <button 
                onClick={onClose} 
                className="px-5 py-2 rounded-full bg-emerald-500 text-black font-bold text-xs"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
