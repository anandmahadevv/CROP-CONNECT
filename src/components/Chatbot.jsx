import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquareCode, X, Send, Sparkles, Truck, CheckCircle2, 
  ArrowUpRight, Bot, User, RefreshCw, Volume2, ShieldCheck, ChevronDown, Minimize2, Maximize2 
} from 'lucide-react';

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: "Namaskara! 🙏 Welcome to CropConnect AI Assistant. Directly connecting Karnataka's FPO growers with bulk caterers and hoteliers.",
    timestamp: 'Just now',
    actions: [
      { label: "🍅 Today's Wholesale Rates", payload: "Show me today's wholesale rates" },
      { label: "📅 Pre-Book for Wedding", payload: "I want to pre-book produce for an upcoming event" },
      { label: "🌾 Farmer Listing (ರೈತರ ನೋಂದಣಿ)", payload: "I am a farmer and want to list my harvest" },
      { label: "🚚 Track Order #CC-8421", payload: "Track order CC-8421" }
    ]
  }
];

export default function Chatbot({ isOpen, onClose, initialPrompt, onActionHandled }) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle external incoming prompt from Hero or Calculator
  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleUserSubmit(initialPrompt);
      if (onActionHandled) onActionHandled();
    }
  }, [initialPrompt, isOpen]);

  const handleUserSubmit = (textToSend) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      const botResponse = generateAIResponse(text);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  const generateAIResponse = (query) => {
    const q = query.toLowerCase();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. Rates Query
    if (q.includes('rate') || q.includes('price') || q.includes('tomato') || q.includes('capsicum') || q.includes('onion') || q.includes('banana')) {
      return {
        id: Date.now() + 1,
        sender: 'bot',
        text: "Here are today's verified harvest prices from Karnataka FPO clusters (vs. Mandi APMC):",
        timestamp: time,
        card: {
          type: 'rates',
          data: [
            { item: '🍅 Tomato Hybrid (Grade A)', origin: 'Kolar Hub', direct: '₹29/kg', mandi: '₹38/kg', gain: '+38% to Farmer' },
            { item: '🫑 Shimla Capsicum', origin: 'Chikkaballapur', direct: '₹48/kg', mandi: '₹62/kg', gain: '+32% to Farmer' },
            { item: '🧅 Belagavi Red Onion', origin: 'Belagavi Cluster', direct: '₹35/kg', mandi: '₹44/kg', gain: '+28% to Farmer' },
            { item: '🍌 Yelakki Banana', origin: 'Mandya Cluster', direct: '₹42/kg', mandi: '₹58/kg', gain: '+42% to Farmer' }
          ]
        },
        actions: [
          { label: "Reserve 500kg Tomatoes", payload: "Book 500kg Tomato Grade A for Friday" },
          { label: "Reserve 200kg Capsicum", payload: "Book 200kg Shimla Capsicum" },
          { label: "Download WhatsApp PDF Sheet", payload: "Send daily rate sheet to my WhatsApp" }
        ]
      };
    }

    // 2. Pre-Book / Order Flow
    if (q.includes('book') || q.includes('order') || q.includes('wedding') || q.includes('event') || q.includes('cater')) {
      return {
        id: Date.now() + 1,
        sender: 'bot',
        text: "🎉 Excellent! I have generated a 48-Hour Price Lock Pre-Booking Token for your event:",
        timestamp: time,
        card: {
          type: 'order_confirmation',
          orderId: 'CC-' + Math.floor(1000 + Math.random() * 9000),
          summary: 'Direct Farm Harvest Reservation',
          details: [
            { label: 'Reserved Produce', value: '🍅 Tomatoes (400kg) + 🫑 Capsicum (150kg)' },
            { label: 'Assigned Cluster', value: 'Kolar FPO Corridor #04' },
            { label: 'Lock-In Rate', value: '₹18,800 (Fixed 48h Lock)' },
            { label: 'Your Direct Savings', value: '₹5,200 vs APMC Mandi (22%)' },
            { label: 'Delivery Schedule', value: '05:30 AM (Pre-Harvest Cut)' },
            { label: 'Delivery Venue', value: 'Palace Grounds / Bangalore Venue' }
          ],
          status: 'FORWARD CONTRACT ACTIVE'
        },
        actions: [
          { label: "✅ Confirm & Send to WhatsApp", payload: "Confirm this order via WhatsApp alert" },
          { label: "🚚 Live Delivery Tracking", payload: "Track order CC-8421" }
        ]
      };
    }

    // 3. Farmer / Grower Flow
    if (q.includes('farmer') || q.includes('raitha') || q.includes('kannada') || q.includes('grower') || q.includes('sell') || q.includes('harvest')) {
      return {
        id: Date.now() + 1,
        sender: 'bot',
        text: "ನಮಸ್ಕಾರ ರೈತ ಬಾಂಧವರೇ! (Welcome Karnataka Farmer). CropConnect guarantees you 35%+ higher payout directly to your bank account with zero middleman deductions.",
        timestamp: time,
        card: {
          type: 'farmer_pass',
          title: 'Direct FPO Grower Entry',
          details: [
            { label: 'Eligible Belts', value: 'Kolar, Chikkaballapur, Mandya, Belagavi, Haveri' },
            { label: 'Payment Terms', value: 'T+0 Direct Bank Transfer on Weigh-In' },
            { label: 'Transportation', value: 'Consolidated Crates picked at Village Aggregation' },
            { label: 'Commission Fee', value: '0% from Farmers (100% Free)' }
          ]
        },
        actions: [
          { label: "📝 Register Farm Details", payload: "I want to register my 3-acre tomato farm in Kolar" },
          { label: "📞 Request District Coordinator Call", payload: "Please have a coordinator call my number" }
        ]
      };
    }

    // 4. Order Tracking Flow
    if (q.includes('track') || q.includes('cc-8421') || q.includes('status') || q.includes('truck')) {
      return {
        id: Date.now() + 1,
        sender: 'bot',
        text: "🚚 Live Milk-Run Telematics for Consignment #CC-8421:",
        timestamp: time,
        card: {
          type: 'tracking',
          orderId: '#CC-8421',
          vehicle: 'Tata Ace (KA-04-AB-8812)',
          driver: 'Manjunath (Verified CropConnect Partner)',
          currentLocation: 'NH-75 Hoskote Toll Expressway',
          crates: '28 Standard Ventilated Crates',
          temp: '18.2°C (Clipped 3 hours ago)',
          eta: '05:30 AM (On Time for Palace Grounds Kitchen)'
        },
        actions: [
          { label: "Call Delivery Driver", payload: "Connecting to driver" },
          { label: "Share Live GPS Link", payload: "Send live GPS tracking link to WhatsApp" }
        ]
      };
    }

    // Default Fallback Response
    return {
      id: Date.now() + 1,
      sender: 'bot',
      text: "I can help you lock in wholesale prices, pre-book fresh harvests for upcoming events, or onboard as an FPO grower in Karnataka. What would you like to do?",
      timestamp: time,
      actions: [
        { label: "Check Tomato & Capsicum Rates", payload: "Show me today's wholesale rates" },
        { label: "Pre-Book for Event", payload: "I want to pre-book produce for an upcoming event" },
        { label: "How the 3-5% Platform Fee Works", payload: "Explain the CropConnect monetization model" }
      ]
    };
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed z-50 transition-all duration-300 ease-out shadow-2xl flex flex-col ${
        isExpanded 
          ? 'inset-4 md:inset-10 rounded-2xl bg-[#0b1412] border border-emerald-500/30' 
          : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[95vw] sm:w-[420px] h-[600px] max-h-[85vh] rounded-3xl bg-[#0b1412]/95 border border-emerald-500/25 backdrop-blur-2xl'
      }`}
    >
      {/* Chatbot Header */}
      <div className="p-4 rounded-t-3xl bg-gradient-to-r from-[#0d1a16] to-[#08120f] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
              <Bot className="w-5 h-5" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0b1412]"></span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-white">CropConnect Assistant</h3>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-[10px] text-zinc-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Kolar & Bengaluru Nodes Online
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-zinc-400">
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="p-1.5 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            title={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button 
            onClick={() => setMessages(INITIAL_MESSAGES)} 
            className="p-1.5 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            title="Reset conversation"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button 
            onClick={onClose} 
            className="p-1.5 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            title="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Voice Badge Banner */}
      <div className="px-4 py-1.5 bg-emerald-500/10 border-b border-emerald-500/15 flex items-center justify-between text-[11px] text-emerald-400">
        <span className="flex items-center gap-1.5">
          <Volume2 className="w-3.5 h-3.5" /> WhatsApp Audio & Kannada Voice alerts enabled
        </span>
        <span className="text-[10px] uppercase font-bold tracking-wider bg-emerald-500/20 px-1.5 py-0.5 rounded">
          Live B2B
        </span>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar text-xs">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div 
              className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed shadow-md ${
                msg.sender === 'user'
                  ? 'bg-emerald-600 text-white rounded-tr-none'
                  : 'bg-[#14231f] text-zinc-200 border border-white/5 rounded-tl-none'
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>

              {/* Rates Card */}
              {msg.card?.type === 'rates' && (
                <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                  {msg.card.data.map((r, i) => (
                    <div key={i} className="p-2 rounded-lg bg-black/30 border border-white/5 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white text-xs">{r.item}</div>
                        <div className="text-[10px] text-zinc-400">{r.origin}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-extrabold text-emerald-400 text-xs">{r.direct}</div>
                        <div className="text-[10px] line-through text-zinc-500">{r.mandi}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Order Confirmation Card */}
              {msg.card?.type === 'order_confirmation' && (
                <div className="mt-3 p-3.5 rounded-xl bg-black/40 border border-emerald-500/30 text-xs space-y-2">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-extrabold text-emerald-400 text-sm">Token #{msg.card.orderId}</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                      {msg.card.status}
                    </span>
                  </div>
                  {msg.card.details.map((d, i) => (
                    <div key={i} className="flex justify-between text-[11px]">
                      <span className="text-zinc-400">{d.label}:</span>
                      <span className="text-white font-medium text-right">{d.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Farmer Pass Card */}
              {msg.card?.type === 'farmer_pass' && (
                <div className="mt-3 p-3 rounded-xl bg-black/40 border border-emerald-500/30 text-xs space-y-1.5">
                  <div className="font-bold text-emerald-400 text-xs">{msg.card.title}</div>
                  {msg.card.details.map((d, i) => (
                    <div key={i} className="flex justify-between text-[11px]">
                      <span className="text-zinc-400">{d.label}:</span>
                      <span className="text-white font-medium">{d.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tracking Card */}
              {msg.card?.type === 'tracking' && (
                <div className="mt-3 p-3 rounded-xl bg-black/40 border border-emerald-500/30 text-xs space-y-2">
                  <div className="flex items-center justify-between font-bold text-emerald-400">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-4 h-4" /> {msg.card.vehicle}
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-400 font-mono">
                      LIVE GPS
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-300">
                    <div>📍 <strong>Location:</strong> {msg.card.currentLocation}</div>
                    <div>📦 <strong>Cargo:</strong> {msg.card.crates}</div>
                    <div>❄️ <strong>Temp:</strong> {msg.card.temp}</div>
                    <div>⏱️ <strong>ETA:</strong> {msg.card.eta}</div>
                  </div>
                </div>
              )}

              <span className="text-[9px] text-zinc-400 block text-right mt-1.5">
                {msg.timestamp}
              </span>
            </div>

            {/* Quick Action Suggestion Chips */}
            {msg.actions && msg.actions.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                {msg.actions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleUserSubmit(action.payload)}
                    className="text-[11px] bg-white/5 hover:bg-emerald-500/20 text-zinc-300 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 rounded-full px-3 py-1 transition-all flex items-center gap-1"
                  >
                    <span>{action.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Animated Typing Indicator */}
        {isTyping && (
          <div className="flex items-center gap-1.5 bg-[#14231f] text-emerald-400 px-3 py-2 rounded-2xl rounded-tl-none w-max border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form Bar */}
      <form 
        onSubmit={(e) => { e.preventDefault(); handleUserSubmit(); }} 
        className="p-3 bg-[#0d1a16] border-t border-white/10 flex items-center gap-2 rounded-b-3xl"
      >
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask rates, pre-book produce, or enter order ID..."
          className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
        />
        <button 
          type="submit"
          disabled={!inputValue.trim()}
          className="w-9 h-9 rounded-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-black flex items-center justify-center transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] shrink-0"
        >
          <Send className="w-4 h-4 text-black" />
        </button>
      </form>
    </div>
  );
}
