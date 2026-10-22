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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-[2rem] max-w-md w-full p-7 shadow-2xl border border-slate-100">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Request Daily Wholesale Rates</h3>
            <span className="text-[11px] text-[#1877F2] font-semibold">Direct FPO pricing delivered every 06:00 AM</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Business / Caterer Name</label>
              <input 
                type="text" 
                required 
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                placeholder="e.g. Royal Caterers / Palace Banquets" 
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1877F2]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number</label>
              <input 
                type="tel" 
                required 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+91 98765 43210" 
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1877F2]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Delivery Destination</label>
              <select 
                value={formData.area}
                onChange={(e) => setFormData({...formData, area: e.target.value})}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1877F2]"
              >
                <option>Bengaluru (Palace Grounds / Central)</option>
                <option>Bengaluru (Electronic City / South)</option>
                <option>Bengaluru (Whitefield / East)</option>
                <option>Mysuru Banquet Hub</option>
                <option>Hubballi-Dharwad</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Weekly Produce Volume</label>
              <select 
                value={formData.volume}
                onChange={(e) => setFormData({...formData, volume: e.target.value})}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1877F2]"
              >
                <option>200 kg – 500 kg / week</option>
                <option>500 kg – 2,000 kg / week</option>
                <option>2,000 kg+ / week (Large Event / Hotel Chain)</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 rounded-full bg-[#D4FF32] hover:bg-[#c6f71d] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Send Me Daily WhatsApp Rate Sheets</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </form>
        ) : (
          <div className="mt-4 p-5 rounded-2xl bg-emerald-50 border border-emerald-100 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="text-base font-bold text-slate-900">Enrollment Confirmed!</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Thank you, <strong>{formData.businessName}</strong>. You will receive tomorrow's 06:00 AM verified harvest rate sheet directly at <strong>{formData.phone}</strong>.
            </p>
            <button 
              onClick={onClose} 
              className="px-6 py-2 rounded-full bg-slate-900 text-white font-bold text-xs"
            >
              Done
            </button>
          </div>
        )}
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-[2rem] max-w-md w-full p-7 shadow-2xl border border-slate-100">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Farmer / FPO Onboarding</h3>
            <span className="text-[11px] text-emerald-600 font-semibold">ರೈತರ ನೇರ ನೋಂದಣಿ (35%+ ಹೆಚ್ಚಿನ ಆದಾಯ)</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Farmer / FPO Lead Name</label>
              <input 
                type="text" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="e.g. Basavaraj Gowda" 
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1877F2]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp Number</label>
              <input 
                type="tel" 
                required 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+91 99000 54321" 
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1877F2]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Farming Region / District</label>
              <select 
                value={formData.district}
                onChange={(e) => setFormData({...formData, district: e.target.value})}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1877F2]"
              >
                <option>Kolar (Tomato / Exotics)</option>
                <option>Chikkaballapur (Capsicum / Veg)</option>
                <option>Mandya (Bananas / Greens)</option>
                <option>Belagavi (Onion / Potato / Veg)</option>
                <option>Haveri / Dharwad</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Primary Crops Harvested</label>
              <input 
                type="text" 
                required 
                value={formData.crops}
                onChange={(e) => setFormData({...formData, crops: e.target.value})}
                placeholder="e.g. Tomato, Green Chilli, Capsicum" 
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1877F2]"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 rounded-full bg-[#D4FF32] hover:bg-[#c6f71d] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Join CropConnect Network (ನೋಂದಾಯಿಸಿ)</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </form>
        ) : (
          <div className="mt-4 p-5 rounded-2xl bg-emerald-50 border border-emerald-100 text-center space-y-3">
            <Sprout className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="text-base font-bold text-slate-900">ಧನ್ಯವಾದಗಳು! (Thank You!)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Welcome <strong>{formData.name}</strong>. A CropConnect {formData.district} field coordinator will contact you within 2 hours to activate your direct farm gate pass.
            </p>
            <button 
              onClick={onClose} 
              className="px-6 py-2 rounded-full bg-slate-900 text-white font-bold text-xs"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
