import { updateCrypto } from '../features/crypto/cryptoSlice';

export function startMockUpdates(dispatch, data) {
  setInterval(() => {
    const index = Math.floor(Math.random() * data.length);
    const asset = data[index];
    const delta = parseFloat((Math.random() * 2 - 1).toFixed(2)); // -1% to +1%

    dispatch(updateCrypto({
      id: asset.id,
      price: +(asset.price * (1 + delta / 100)).toFixed(2),
      change1h: +(asset.change1h + delta).toFixed(2),
      change24h: +(asset.change24h + delta).toFixed(2),
      change7d: +(asset.change7d + delta).toFixed(2),
      volume24h: +(asset.volume24h * (1 + delta / 100)).toFixed(2)
    }));
  }, 1500);
}