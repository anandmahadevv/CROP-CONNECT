import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquareCode, X, Send, Sparkles, Truck, CheckCircle2, 
  ArrowUpRight, Bot, User, RefreshCw, Volume2, ShieldCheck, 
  ChevronDown, Minimize2, Maximize2, Share2, Copy, Play, Pause, Activity
} from 'lucide-react';

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: "Namaskara! 🙏 Welcome to CropConnect AI Assistant. Directly connecting Karnataka's FPO growers with bulk wedding caterers and hoteliers with zero middleman deductions.",
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
  const [copiedId, setCopiedId] = useState(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleUserSubmit(initialPrompt);
      if (onActionHandled) onActionHandled();
    }
  }, [initialPrompt, isOpen]);

  const handleCopy = (id, text) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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

    setTimeout(() => {
      const botResponse = generateAIResponse(text);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 700);
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
            { item: '🍅 Tomato Hybrid (Grade A+)', origin: 'Kolar FPO Belt', direct: '₹29/kg', mandi: '₹38/kg', gain: '+38% to Farmer' },
            { item: '🫑 Shimla Capsicum (Crisp)', origin: 'Chikkaballapur', direct: '₹48/kg', mandi: '₹62/kg', gain: '+32% to Farmer' },
            { item: '🧅 Belagavi Red Onion', origin: 'Belagavi Cluster', direct: '₹35/kg', mandi: '₹44/kg', gain: '+28% to Farmer' },
            { item: '🍌 Yelakki Banana', origin: 'Mandya Cluster', direct: '₹42/kg', mandi: '₹58/kg', gain: '+42% to Farmer' }
          ]
        },
        actions: [
          { label: "Reserve 500kg Tomatoes", payload: "Book 500kg Tomato Grade A for Friday" },
          { label: "Reserve 200kg Capsicum", payload: "Book 200kg Shimla Capsicum" },
          { label: "WhatsApp PDF Sheet", payload: "Send daily rate sheet to my WhatsApp" }
        ]
      };
    }

    // 2. Pre-Book / Order Flow
    if (q.includes('book') || q.includes('order') || q.includes('wedding') || q.includes('event') || q.includes('cater') || q.includes('calculated')) {
      const tokenNum = Math.floor(1000 + Math.random() * 9000);
      return {
        id: Date.now() + 1,
        sender: 'bot',
        text: "🎉 Excellent! I have generated your 48-Hour Price Lock Forward Contract Token for your event:",
        timestamp: time,
        card: {
          type: 'order_confirmation',
          orderId: `CC-${tokenNum}`,
          summary: 'Direct Farm Harvest Reservation',
          details: [
            { label: 'Reserved Produce', value: '🍅 Tomatoes (400kg) + 🫑 Capsicum (150kg)' },
            { label: 'Assigned Cluster', value: 'Kolar FPO Corridor #04' },
            { label: 'Forward Rate Lock', value: '₹18,800 (Guaranteed 48h Lock)' },
            { label: 'Your Direct Savings', value: '₹5,200 vs APMC Mandi (22%)' },
            { label: 'Delivery Schedule', value: '05:30 AM on Event Morning' },
            { label: 'Delivery Destination', value: 'Palace Grounds / Bangalore Venue' }
          ],
          status: 'FORWARD CONTRACT ACTIVE'
        },
        actions: [
          { label: "✅ Send Token to WhatsApp", payload: "Confirm this order via WhatsApp alert" },
          { label: "🚚 Live Milk-Run Telematics", payload: "Track order CC-8421" }
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
        hasAudio: true,
        audioTitle: "Voice Briefing from Kolar District Lead (Kannada)",
        card: {
          type: 'farmer_pass',
          title: 'Direct FPO Grower Entry Pass',
          details: [
            { label: 'Eligible Corridors', value: 'Kolar, Chikkaballapur, Mandya, Belagavi, Haveri' },
            { label: 'Payment Terms', value: 'T+0 Direct Bank Transfer on Weigh-In' },
            { label: 'Crates & Pickup', value: 'Consolidated Crates picked at Village Aggregation' },
            { label: 'Commission Fee', value: '0% from Farmers (100% Free)' }
          ]
        },
        actions: [
          { label: "📝 Register Farm Details", payload: "I want to register my 3-acre tomato farm in Kolar" },
          { label: "📞 Request Coordinator Call", payload: "Please have a coordinator call my number" }
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
          driver: 'Manjunath (Verified CropConnect Logistics)',
          currentLocation: 'NH-75 Hoskote Toll Expressway (14km away)',
          crates: '28 Standard Ventilated Crates',
          temp: '18.2°C (Clipped 3 hours ago)',
          eta: '05:30 AM (On Time for Palace Grounds Kitchen)'
        },
        actions: [
          { label: "📞 Call Delivery Driver", payload: "Connecting to driver" },
          { label: "📍 Share Live GPS Link", payload: "Send live GPS tracking link to WhatsApp" }
        ]
      };
    }

    return {
      id: Date.now() + 1,
      sender: 'bot',
      text: "I can help you lock in wholesale prices, pre-book fresh harvests for upcoming events, or onboard as an FPO grower in Karnataka. What would you like to explore?",
      timestamp: time,
      actions: [
        { label: "Check Tomato & Capsicum Rates", payload: "Show me today's wholesale rates" },
        { label: "Pre-Book for Event", payload: "I want to pre-book produce for an upcoming event" },
        { label: "Monetization: 3–5% Platform Fee", payload: "Explain the CropConnect monetization model" }
      ]
    };
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed z-50 transition-all duration-300 ease-out shadow-2xl flex flex-col ${
        isExpanded 
          ? 'inset-3 md:inset-8 rounded-[2rem] bg-white border border-slate-200' 
          : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[95vw] sm:w-[420px] h-[600px] max-h-[88vh] rounded-[2rem] bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.15)]'
      }`}
    >
      {/* Header (Matching Sky Blue Theme) */}
      <div className="p-4 rounded-t-[2rem] bg-[#1877F2] text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-white text-[#1877F2] flex items-center justify-center font-bold shadow-sm">
              <Bot className="w-5 h-5 text-[#1877F2]" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#D4FF32] border-2 border-[#1877F2]"></span>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-extrabold text-white">CropConnect AI</h3>
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4FF32]" />
            </div>
            <div className="text-[10px] text-blue-100 flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF32] animate-pulse"></span>
              <span>Kolar & Bangalore Nodes Active</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-white/80">
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="p-1.5 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button 
            onClick={() => setMessages(INITIAL_MESSAGES)} 
            className="p-1.5 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title="Reset conversation"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button 
            onClick={onClose} 
            className="p-1.5 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Voice Badge Banner */}
      <div className="px-4 py-2 bg-blue-50 border-b border-blue-100 flex items-center justify-between text-[11px] text-[#1877F2] font-semibold">
        <span className="flex items-center gap-1.5">
          <Volume2 className="w-3.5 h-3.5" /> WhatsApp Audio & Kannada Voice enabled
        </span>
        <span className="text-[9px] uppercase font-extrabold tracking-wider bg-[#D4FF32] text-black px-2 py-0.5 rounded-full shadow-sm">
          Live B2B
        </span>
      </div>

      {/* Messages Stream */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar text-xs bg-slate-50/50">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div 
              className={`max-w-[88%] rounded-2xl p-3.5 leading-relaxed shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-[#1877F2] text-white rounded-tr-none font-medium'
                  : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-none font-normal'
              }`}
            >
              <p className="whitespace-pre-line text-xs">{msg.text}</p>

              {/* Audio Player Mockup */}
              {msg.hasAudio && (
                <div className="mt-3 p-2.5 rounded-xl bg-slate-100 border border-slate-200 flex items-center gap-3">
                  <button 
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
                  >
                    {isPlayingAudio ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                  </button>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-slate-900">{msg.audioTitle}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="h-1 flex-1 bg-slate-300 rounded-full overflow-hidden">
                        <div className={`h-full bg-[#1877F2] ${isPlayingAudio ? 'w-2/3 animate-pulse' : 'w-1/4'}`}></div>
                      </div>
                      <span className="text-[9px] text-slate-500 font-mono">0:24</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Rates Card */}
              {msg.card?.type === 'rates' && (
                <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
                  {msg.card.data.map((r, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-900 text-xs">{r.item}</div>
                        <div className="text-[10px] text-slate-500">{r.origin}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-extrabold text-[#1877F2] text-xs font-mono">{r.direct}</div>
                        <div className="text-[10px] line-through text-slate-400 font-mono">{r.mandi}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Order Confirmation Card */}
              {msg.card?.type === 'order_confirmation' && (
                <div className="mt-3 p-3.5 rounded-2xl bg-slate-900 text-white text-xs space-y-2 shadow-lg">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-extrabold text-[#D4FF32] text-sm font-mono">{msg.card.orderId}</span>
                    <div className="flex items-center gap-1.5">
                      <button 
                        onClick={() => handleCopy(msg.card.orderId, msg.card.orderId)}
                        className="text-[10px] text-slate-300 hover:text-white flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-md"
                      >
                        <Copy className="w-3 h-3" />
                        {copiedId === msg.card.orderId ? 'Copied!' : 'Copy'}
                      </button>
                      <span className="text-[9px] bg-[#D4FF32] text-black px-2 py-0.5 rounded-full font-extrabold">
                        {msg.card.status}
                      </span>
                    </div>
                  </div>
                  {msg.card.details.map((d, i) => (
                    <div key={i} className="flex justify-between text-[11px]">
                      <span className="text-slate-400">{d.label}:</span>
                      <span className="text-white font-semibold text-right">{d.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Farmer Pass Card */}
              {msg.card?.type === 'farmer_pass' && (
                <div className="mt-3 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs space-y-2">
                  <div className="font-bold text-emerald-800 text-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {msg.card.title}
                  </div>
                  {msg.card.details.map((d, i) => (
                    <div key={i} className="flex justify-between text-[11px]">
                      <span className="text-slate-500">{d.label}:</span>
                      <span className="text-slate-900 font-bold">{d.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tracking Card */}
              {msg.card?.type === 'tracking' && (
                <div className="mt-3 p-3.5 rounded-2xl bg-slate-900 text-white text-xs space-y-2 shadow-lg">
                  <div className="flex items-center justify-between font-bold text-[#D4FF32]">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-4 h-4" /> {msg.card.vehicle}
                    </span>
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white font-mono">
                      LIVE MILK-RUN GPS
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 space-y-0.5">
                    <div>📍 <strong>Location:</strong> {msg.card.currentLocation}</div>
                    <div>📦 <strong>Cargo:</strong> {msg.card.crates}</div>
                    <div>❄️ <strong>Temp:</strong> {msg.card.temp}</div>
                    <div>⏱️ <strong>ETA:</strong> {msg.card.eta}</div>
                  </div>
                </div>
              )}

              <span className="text-[9px] text-slate-400 block text-right mt-1.5">
                {msg.timestamp}
              </span>
            </div>

            {/* Action Chips */}
            {msg.actions && msg.actions.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                {msg.actions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleUserSubmit(action.payload)}
                    className="text-[11px] bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-200 rounded-full px-3 py-1 transition-all flex items-center gap-1 shadow-sm"
                  >
                    <span>{action.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#1877F2]" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Animated Typing Indicator */}
        {isTyping && (
          <div className="flex items-center gap-1.5 bg-white text-[#1877F2] px-3.5 py-2.5 rounded-2xl rounded-tl-none w-max border border-slate-200 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1877F2] animate-bounce"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1877F2] animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1877F2] animate-bounce [animation-delay:0.4s]"></span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form Bar */}
      <form 
        onSubmit={(e) => { e.preventDefault(); handleUserSubmit(); }} 
        className="p-3 bg-white border-t border-slate-100 flex items-center gap-2 rounded-b-[2rem]"
      >
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask rates, pre-book produce, or enter order ID..."
          className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1877F2] transition-colors"
        />
        <button 
          type="submit"
          disabled={!inputValue.trim()}
          className="w-9 h-9 rounded-full bg-[#D4FF32] hover:bg-[#c6f71d] disabled:opacity-40 text-black flex items-center justify-center transition-all shadow-md shrink-0 font-bold"
        >
          <Send className="w-4 h-4 text-black" />
        </button>
      </form>
    </div>
  );
}
