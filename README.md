# CropConnect (Karnataka B2B Agritech) — React Application

> **Direct Farm-to-Buyer Marketplace**  
> *Target Production Host:* `crop-marketplace-18.emergent.host`  
> *Stack:* React 19 + Vite + Tailwind CSS + Lucide Icons + Conversational AI Bot

---

## 🌟 What Was Built & Migrated

1. **Full React Architecture**:
   - [`src/App.jsx`](file:///C:/Users/anand/Documents/appu420/src/App.jsx): Root orchestration with unified modal and chatbot state.
   - [`src/components/Navbar.jsx`](file:///C:/Users/anand/Documents/appu420/src/components/Navbar.jsx): Floating glass detached pill navbar with mobile responsive drawer and unread AI chat badge.
   - [`src/components/Hero.jsx`](file:///C:/Users/anand/Documents/appu420/src/components/Hero.jsx): High-converting agency hero with dual CTAs, live counters, and direct AI pre-order links.
   - [`src/components/LiveRates.jsx`](file:///C:/Users/anand/Documents/appu420/src/components/LiveRates.jsx): Real-time Karnataka harvest price comparison table (Direct vs Mandi APMC) with 1-click batch pre-booking.
   - [`src/components/Calculator.jsx`](file:///C:/Users/anand/Documents/appu420/src/components/Calculator.jsx): Interactive procurement savings and farmer realization impact slider calculator.
   - [`src/components/ProblemSolution.jsx`](file:///C:/Users/anand/Documents/appu420/src/components/ProblemSolution.jsx): Double-bezel cards breaking down the broken APMC mandi crisis vs CropConnect's 3-pillar forward architecture.
   - [`src/components/KarnatakaHubs.jsx`](file:///C:/Users/anand/Documents/appu420/src/components/KarnatakaHubs.jsx): Sourcing clusters in Kolar, Chikkaballapur, Mandya, and Belagavi with lead times and volume data.
   - [`src/components/Modals.jsx`](file:///C:/Users/anand/Documents/appu420/src/components/Modals.jsx): Daily rate WhatsApp signup and bilingual English/Kannada Farmer registration modals.
   - [`src/components/Footer.jsx`](file:///C:/Users/anand/Documents/appu420/src/components/Footer.jsx): Institutional footer with trust badges and legal attribution.

2. **CropConnect AI Assistant ([`src/components/Chatbot.jsx`](file:///C:/Users/anand/Documents/appu420/src/components/Chatbot.jsx))**:
   - **Multi-Mode**: Runs as a persistent floating bottom-right launcher widget or can be expanded to full-screen.
   - **Quick Action Chips**:
     - `🍅 Today's Wholesale Rates`
     - `📅 Pre-Book for Wedding`
     - `🌾 Farmer Listing (ರೈತರ ನೋಂದಣಿ)`
     - `🚚 Track Order #CC-8421`
   - **Multi-Turn Intelligent State Flow**:
     - Computes real-time rates (Tomato, Capsicum, Onion, Yelakki Banana).
     - Generates 48-Hour Price Freeze Pre-Booking Confirmation Cards.
     - Provides live milk-run truck GPS and temperature telematics.
     - Bilingual Kannada/English greeting and FPO enrollment for smallholders.
     - Animated typing indicator, voice-note simulation badge, and quick response suggestions.

---

## 🚀 Running the Project

### Development Server:
```bash
npm run dev
```
*(Starts Vite dev server on `http://localhost:5173`)*

### Production Build:
```bash
npm run build
```
*(Compiled output located in [`dist/`](file:///C:/Users/anand/Documents/appu420/dist))*

### Preview Production Build:
```bash
npm run preview
```
