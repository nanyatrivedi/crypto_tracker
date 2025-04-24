# 💸 Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit web app that tracks real-time cryptocurrency prices, simulates WebSocket updates, and visualizes trends with 7-day sparkline charts.

---

## 🚀 Features

- 📊 **Live Crypto Table**: View live data of top and trending coins
- 📈 **7-Day Price Trend Charts** (sparklines) using `recharts`
- 🔄 **Real-Time Simulated Updates** using `setInterval`
- 🌈 **Tailwind-Styled UI**: Clean, responsive, and mobile-friendly
- 🧠 **State Managed with Redux Toolkit**
- ✅ Percentage changes color-coded for quick insights

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **State Management**: Redux Toolkit
- **UI Framework**: Tailwind CSS
- **Charts**: Recharts

---

## 📂 Folder Structure

```
crypto-tracker-styled/
├── src/
│   ├── app/             # Redux store
│   ├── features/crypto  # Crypto table & slice
│   ├── utils/           # Mock socket simulation
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind setup
├── public/
├── tailwind.config.js
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧪 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/mananyatrivedi/crypto_tracker.git

# Go into the project directory
cd crypto-tracker-styled

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 📷 Demo Preview

![Live Demo](./demo.gif)

---

## 📌 Future Enhancements (Ideas)

- Integrate **real WebSocket API** (e.g., Binance or CoinGecko)
- Add filters for **Top Gainers / Losers**
- Enable **search or sorting**
- Add **user favorites/bookmarks**
- Deploy to GitHub Pages or Netlify

---

## 👩‍💻 Author

Built with ❤️ by [@mananyatrivedi](https://github.com/nanyatrivedi)

---
