import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutBento from './components/AboutBento';
import LiveRates from './components/LiveRates';
import Calculator from './components/Calculator';
import KarnatakaHubs from './components/KarnatakaHubs';
import Chatbot from './components/Chatbot';
import { RatesModal, FarmerModal } from './components/Modals';
import Footer from './components/Footer';
import { MessageSquareCode, Sparkles, X, CheckCircle2 } from 'lucide-react';

const LIVE_NOTIFICATIONS = [
  { text: "🎉 Palace Grounds Banquet locked 650kg Kolar Tomatoes", sub: "Saved ₹5,850 vs Mandi • 2 mins ago" },
  { text: "🚚 Chikkaballapur Milk-Run Truck dispatched (KA-04-AB-8812)", sub: "180kg Capsicum for Whitefield Hotel • 7 mins ago" },
  { text: "🌾 Basavaraj Gowda (Mandya) received T+0 UPI Settlement", sub: "+₹14,200 for 350kg Yelakki Bananas • 12 mins ago" },
  { text: "✨ Sheesh Mahal Wedding Caterers reserved 400kg Belagavi Onions", sub: "Fixed 48h forward price locked • 18 mins ago" }
];

export default function App() {
  const [ratesModalOpen, setRatesModalOpen] = useState(false);
  const [farmerModalOpen, setFarmerModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInitialPrompt, setChatInitialPrompt] = useState('');
  const [hasUnreadChat, setHasUnreadChat] = useState(true);

  // Live Toast Notification
  const [toastIndex, setToastIndex] = useState(0);
  const [toastVisible, setToastVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setToastIndex((prev) => (prev + 1) % LIVE_NOTIFICATIONS.length);
      setToastVisible(true);
    }, 7500);
    return () => clearInterval(interval);
  }, []);

  const handleOpenChatWithPrompt = (promptText) => {
    setChatInitialPrompt(promptText);
    setIsChatOpen(true);
    setHasUnreadChat(false);
  };

  const handlePreBookItem = (item) => {
    handleOpenChatWithPrompt(`I would like to pre-book ${item.name} from ${item.origin} at ₹${item.cropConnectPrice}/kg.`);
  };

  const handlePreBookCustom = ({ items, cost, savings }) => {
    handleOpenChatWithPrompt(`I calculated my event requirement (${items}) for ₹${cost.toLocaleString('en-IN')}. Please generate my pre-order token to save ₹${savings.toLocaleString('en-IN')}.`);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setHasUnreadChat(false);
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#D4FF32] selection:text-black">
      {/* Navigation */}
      <Navbar 
        onOpenRates={() => setRatesModalOpen(true)}
        onOpenFarmer={() => setFarmerModalOpen(true)}
        onToggleChat={toggleChat}
        unreadChatCount={hasUnreadChat ? 1 : 0}
      />

      <main>
        {/* Sky Hero with 3D Arc Cards */}
        <Hero 
          onOpenRates={() => setRatesModalOpen(true)}
          onOpenFarmer={() => setFarmerModalOpen(true)}
          onOpenChatWithPrompt={handleOpenChatWithPrompt}
        />

        {/* Marquee & About Us Bento Grid & Services (Pinterest Reference Style) */}
        <AboutBento 
          onOpenRates={() => setRatesModalOpen(true)}
          onOpenFarmer={() => setFarmerModalOpen(true)}
          onOpenChatWithPrompt={handleOpenChatWithPrompt}
        />

        {/* Live Daily Wholesale Rate Sheet */}
        <LiveRates 
          onPreBookItem={handlePreBookItem}
        />

        {/* Savings & Impact Calculator */}
        <Calculator 
          onPreBookCustom={handlePreBookCustom}
        />

        {/* Karnataka Regional Corridors */}
        <KarnatakaHubs />

        {/* Call to Action Banner (Clean Editorial Luxury) */}
        <section className="py-20 px-4 max-w-4xl mx-auto text-center">
          <div className="rounded-[2.5rem] bg-[#0B1220] text-white p-10 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-widest font-extrabold text-black bg-[#D4FF32] px-3.5 py-1 rounded-full inline-block mb-4 shadow-sm">
                Karnataka Sourcing Network
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Disintermediate Your Produce Procurement?
              </h2>
              <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
                Join 1,850+ Karnataka farmers and 450+ verified caterers and hotel banquet managers locking in fair, transparent forward rates.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setRatesModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-[#D4FF32] hover:bg-[#c6f71d] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(212,255,50,0.4)] hover:scale-105 active:scale-95"
                >
                  Request Daily Wholesale Rates
                </button>
                <button 
                  onClick={() => handleOpenChatWithPrompt("How does CropConnect ensure quality grading and T+0 bank settlement?")}
                  className="px-6 py-3.5 rounded-full border border-white/20 hover:border-white/40 text-white font-bold text-xs uppercase tracking-wider bg-white/10 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-[#D4FF32]" />
                  Ask CropConnect AI
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer 
        onOpenRates={() => setRatesModalOpen(true)}
        onOpenFarmer={() => setFarmerModalOpen(true)}
        onToggleChat={toggleChat}
      />

      {/* Floating Live Activity Toast (Bottom-Left) */}
      {toastVisible && (
        <div className="fixed bottom-6 left-6 z-30 hidden md:flex items-center gap-3 p-3.5 pr-4 rounded-2xl bg-white border border-slate-200 shadow-xl animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1877F2] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 leading-tight">
              {LIVE_NOTIFICATIONS[toastIndex].text}
            </div>
            <div className="text-[10px] text-emerald-600 font-bold mt-0.5">
              {LIVE_NOTIFICATIONS[toastIndex].sub}
            </div>
          </div>
          <button 
            onClick={() => setToastVisible(false)}
            className="text-slate-400 hover:text-slate-700 ml-2 p-1 rounded-full hover:bg-slate-100"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Chat Launcher Button (Bottom-Right in Electric Lime) */}
      {!isChatOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#D4FF32] hover:bg-[#c6f71d] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_8px_30px_rgba(212,255,50,0.5)] transition-all hover:scale-105 active:scale-95"
        >
          <div className="relative">
            <MessageSquareCode className="w-4 h-4 text-black group-hover:rotate-6 transition-transform" />
            {hasUnreadChat && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-black animate-ping" />
            )}
          </div>
          <span>Chat AI</span>
          <span className="text-[9px] bg-black text-[#D4FF32] px-2 py-0.5 rounded-full font-black">
            LIVE
          </span>
        </button>
      )}

      {/* Interactive Chatbot Drawer */}
      <Chatbot 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        initialPrompt={chatInitialPrompt}
        onActionHandled={() => setChatInitialPrompt('')}
      />

      {/* Modals */}
      <RatesModal 
        isOpen={ratesModalOpen} 
        onClose={() => setRatesModalOpen(false)} 
      />
      <FarmerModal 
        isOpen={farmerModalOpen} 
        onClose={() => setFarmerModalOpen(false)} 
      />
    </div>
  );
}
