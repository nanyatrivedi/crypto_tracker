import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topCoins: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: '🟠',
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      supply: '19.85M BTC',
      history: [91000, 91800, 92000, 92500, 93200, 93600, 93759]
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      logo: '⚪',
      price: 1802.46,
      change1h: 0.6,
      change24h: 3.21,
      change7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      supply: '120.71M ETH',
      history: [1650, 1680, 1720, 1740, 1780, 1805, 1802]
    },
    {
      id: 3,
      name: 'Tether',
      symbol: 'USDT',
      logo: '💵',
      price: 1.00,
      change1h: 0.01,
      change24h: 0.04,
      change7d: 0.10,
      marketCap: 87000000000,
      volume24h: 40000000000,
      supply: '87B USDT',
      history: [1.00, 1.00, 1.00, 0.99, 1.01, 1.00, 1.00]
    },
    {
      id: 4,
      name: 'Solana',
      symbol: 'SOL',
      logo: '🌊',
      price: 25.75,
      change1h: -0.31,
      change24h: 0.84,
      change7d: 2.5,
      marketCap: 12000000000,
      volume24h: 650000000,
      supply: '470M SOL',
      history: [23.4, 24.2, 24.8, 25.2, 26, 25.9, 25.75]
    },
    {
      id: 5,
      name: 'Ripple',
      symbol: 'XRP',
      logo: '💧',
      price: 0.52,
      change1h: 0.2,
      change24h: -0.5,
      change7d: 3.1,
      marketCap: 27000000000,
      volume24h: 1800000000,
      supply: '52B XRP',
      history: [0.45, 0.48, 0.49, 0.51, 0.53, 0.52, 0.52]
    },
  ],
  trending: [
    {
      id: 6,
      name: 'Dogecoin',
      symbol: 'DOGE',
      logo: '🐶',
      price: 0.082,
      change1h: 1.2,
      change24h: 5.3,
      change7d: 7.8,
      marketCap: 10800000000,
      volume24h: 900000000,
      supply: '132B DOGE',
      history: [0.068, 0.071, 0.075, 0.078, 0.080, 0.083, 0.082]
    },
    {
      id: 7,
      name: 'Polygon',
      symbol: 'MATIC',
      logo: '🔷',
      price: 1.15,
      change1h: -0.2,
      change24h: 1.7,
      change7d: 4.2,
      marketCap: 10000000000,
      volume24h: 600000000,
      supply: '9.2B MATIC',
      history: [1.05, 1.08, 1.11, 1.13, 1.15, 1.16, 1.15]
    },
    {
      id: 8,
      name: 'Cardano',
      symbol: 'ADA',
      logo: '🌀',
      price: 0.41,
      change1h: 0.5,
      change24h: 2.3,
      change7d: 6.6,
      marketCap: 14000000000,
      volume24h: 900000000,
      supply: '35B ADA',
      history: [0.35, 0.36, 0.38, 0.40, 0.42, 0.43, 0.41]
    },
    {
      id: 9,
      name: 'Avalanche',
      symbol: 'AVAX',
      logo: '🏔️',
      price: 14.22,
      change1h: 0.12,
      change24h: 0.34,
      change7d: 1.4,
      marketCap: 5200000000,
      volume24h: 480000000,
      supply: '366M AVAX',
      history: [13.2, 13.7, 13.9, 14.0, 14.3, 14.5, 14.22]
    },
    {
      id: 10,
      name: 'Litecoin',
      symbol: 'LTC',
      logo: '🌙',
      price: 82.45,
      change1h: -0.8,
      change24h: 1.1,
      change7d: 4.9,
      marketCap: 6000000000,
      volume24h: 700000000,
      supply: '73M LTC',
      history: [77.5, 78.6, 80.2, 81.0, 83.1, 84.5, 82.45]
    },
  ]
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateCrypto(state, action) {
      const { id, price, change1h, change24h, change7d, volume24h } = action.payload;

      const asset = [...state.topCoins, ...state.trending].find(c => c.id === id);

      if (asset) {
        asset.price = price;
        asset.change1h = change1h;
        asset.change24h = change24h;
        asset.change7d = change7d;
        asset.volume24h = volume24h;

        // Maintain 7-day history (shift + push)
        asset.history.shift();
        asset.history.push(price);
      }
    }
  }
});

export const { updateCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
