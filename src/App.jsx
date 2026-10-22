import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveRates from './components/LiveRates';
import Calculator from './components/Calculator';
import ProblemSolution from './components/ProblemSolution';
import KarnatakaHubs from './components/KarnatakaHubs';
import Chatbot from './components/Chatbot';
import { RatesModal, FarmerModal } from './components/Modals';
import Footer from './components/Footer';
import { MessageSquareCode, Sparkles } from 'lucide-react';

export default function App() {
  const [ratesModalOpen, setRatesModalOpen] = useState(false);
  const [farmerModalOpen, setFarmerModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInitialPrompt, setChatInitialPrompt] = useState('');
  const [hasUnreadChat, setHasUnreadChat] = useState(true);

  // Trigger Chat with prefilled prompt
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
    <div className="relative min-h-screen bg-[#080d0c] text-[#f1f5f3] selection:bg-emerald-500 selection:text-black">
      {/* Ambient Decorative Glow Lights */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar 
        onOpenRates={() => setRatesModalOpen(true)}
        onOpenFarmer={() => setFarmerModalOpen(true)}
        onToggleChat={toggleChat}
        unreadChatCount={hasUnreadChat ? 1 : 0}
      />

      <main>
        {/* Hero Section */}
        <Hero 
          onOpenRates={() => setRatesModalOpen(true)}
          onOpenFarmer={() => setFarmerModalOpen(true)}
          onOpenChatWithPrompt={handleOpenChatWithPrompt}
        />

        {/* Live Daily Wholesale Rates */}
        <LiveRates 
          onPreBookItem={handlePreBookItem}
        />

        {/* Interactive Event Savings & Impact Calculator */}
        <Calculator 
          onPreBookCustom={handlePreBookCustom}
        />

        {/* Problem & Solution Framework */}
        <ProblemSolution />

        {/* Karnataka Regional Sourcing Hubs */}
        <KarnatakaHubs />

        {/* Call to Action Banner */}
        <section className="py-20 px-4 max-w-4xl mx-auto text-center">
          <div className="double-bezel">
            <div className="bezel-core py-14 px-6 bg-gradient-to-b from-[#0e1d18] to-[#0a1511]">
              <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block mb-3">
                Live in Bengaluru, Kolar & Mandya
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to Disintermediate Your Produce Procurement?
              </h2>
              <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
                Join 1,850+ Karnataka farmers and 450+ verified caterers and hotel banquet managers locking in fair, transparent forward rates.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setRatesModalOpen(true)}
                  className="btn-island px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(16,185,129,0.35)]"
                >
                  Request Daily Wholesale Rates
                </button>
                <button 
                  onClick={() => handleOpenChatWithPrompt("How does CropConnect ensure quality grading and T+0 bank settlement?")}
                  className="px-6 py-3.5 rounded-full border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400 font-bold text-sm bg-emerald-500/10 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
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

      {/* Floating Chat Launcher Button (when chat is closed) */}
      {!isChatOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 px-5 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm shadow-[0_10px_30px_rgba(16,185,129,0.4)] transition-all hover:scale-105 active:scale-95"
        >
          <div className="relative">
            <MessageSquareCode className="w-5 h-5 text-black" />
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

      {/* Interactive Chatbot Component */}
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
