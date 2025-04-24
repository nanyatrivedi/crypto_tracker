import React, { useEffect } from 'react';
import CryptoTable from './features/crypto/CryptoTable';
import { useDispatch, useSelector } from 'react-redux';
import { startMockUpdates } from './utils/mockSocket';

function App() {
  const dispatch = useDispatch();
  const { topCoins, trending } = useSelector((state) => state.crypto);

  useEffect(() => {
    const allAssets = [...topCoins, ...trending];
    startMockUpdates(dispatch, allAssets);
  }, [dispatch, topCoins, trending]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Real-Time Crypto Tracker
        </h1>
        <CryptoTable title="Top Coins" data={topCoins} />
        <CryptoTable title="Trending Coins" data={trending} />
      </div>
    </div>
  );
}

export default App;
