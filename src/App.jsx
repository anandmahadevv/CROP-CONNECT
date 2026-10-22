import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveRates from './components/LiveRates';
import Calculator from './components/Calculator';
import ProblemSolution from './components/ProblemSolution';
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
    }, 7000);
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
    <div className="relative min-h-screen bg-[#060b09] text-[#f3f6f4] selection:bg-emerald-500 selection:text-black">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none -z-10" />

      {/* Ambient Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-0 w-[550px] h-[550px] bg-teal-500/8 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar 
        onOpenRates={() => setRatesModalOpen(true)}
        onOpenFarmer={() => setFarmerModalOpen(true)}
        onToggleChat={toggleChat}
        unreadChatCount={hasUnreadChat ? 1 : 0}
      />

      <main>
        {/* Hero */}
        <Hero 
          onOpenRates={() => setRatesModalOpen(true)}
          onOpenFarmer={() => setFarmerModalOpen(true)}
          onOpenChatWithPrompt={handleOpenChatWithPrompt}
        />

        {/* Live Wholesale Rate Sheet */}
        <LiveRates 
          onPreBookItem={handlePreBookItem}
        />

        {/* Savings & Impact Calculator */}
        <Calculator 
          onPreBookCustom={handlePreBookCustom}
        />

        {/* Problem & Solution Framework */}
        <ProblemSolution />

        {/* Karnataka Regional Corridors */}
        <KarnatakaHubs />

        {/* Call to Action Banner */}
        <section className="py-20 px-4 max-w-4xl mx-auto text-center">
          <div className="double-bezel">
            <div className="bezel-core py-14 px-6 bg-gradient-to-b from-[#0e211b] via-[#091713] to-[#06100d]">
              <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-300 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/30 inline-block mb-3 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                Live across Bengaluru, Kolar & Mandya
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to Disintermediate Your Produce Procurement?
              </h2>
              <p className="mt-4 text-zinc-300 max-w-xl mx-auto text-sm leading-relaxed">
                Join 1,850+ Karnataka farmers and 450+ verified caterers and hotel banquet managers locking in fair, transparent forward rates.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setRatesModalOpen(true)}
                  className="btn-island px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 hover:brightness-110 text-black font-extrabold text-sm shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                >
                  Request Daily Wholesale Rates
                </button>
                <button 
                  onClick={() => handleOpenChatWithPrompt("How does CropConnect ensure quality grading and T+0 bank settlement?")}
                  className="px-6 py-3.5 rounded-full border border-emerald-500/35 hover:border-emerald-500/70 text-emerald-300 hover:text-white font-bold text-sm bg-emerald-950/40 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
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
        <div className="fixed bottom-6 left-6 z-30 hidden md:flex items-center gap-3 p-3.5 pr-4 rounded-2xl bg-[#091512]/95 border border-emerald-500/30 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white leading-tight">
              {LIVE_NOTIFICATIONS[toastIndex].text}
            </div>
            <div className="text-[10px] text-emerald-400/90 font-medium mt-0.5">
              {LIVE_NOTIFICATIONS[toastIndex].sub}
            </div>
          </div>
          <button 
            onClick={() => setToastVisible(false)}
            className="text-zinc-500 hover:text-zinc-300 ml-2 p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Chat Launcher Button (Bottom-Right) */}
      {!isChatOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:brightness-110 text-black font-extrabold text-sm shadow-[0_10px_35px_rgba(16,185,129,0.45)] transition-all hover:scale-105 active:scale-95"
        >
          <div className="relative">
            <MessageSquareCode className="w-5 h-5 text-black group-hover:rotate-6 transition-transform" />
            {hasUnreadChat && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-black animate-ping" />
            )}
          </div>
          <span>Chat AI Assistant</span>
          <span className="text-[10px] bg-black/20 text-black px-2 py-0.5 rounded-full font-bold">
            Live
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
