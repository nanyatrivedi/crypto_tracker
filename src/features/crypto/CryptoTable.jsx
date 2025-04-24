import React from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

export default function CryptoTable({ title, data }) {
  return (
    <div className="mb-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-800 tracking-wide">
        {title}
      </h2>
      <div className="overflow-x-auto rounded-lg shadow border border-gray-300 bg-white">
        <table className="w-full border-collapse text-sm text-center">
          <thead className="bg-blue-100 text-blue-800 font-semibold text-xs uppercase">
            <tr>
              <th className="p-3 border">#</th>
              <th className="p-3 border">Logo</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Symbol</th>
              <th className="p-3 border">Price ($)</th>
              <th className="p-3 border">1h %</th>
              <th className="p-3 border">24h %</th>
              <th className="p-3 border">7d %</th>
              <th className="p-3 border max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">Market Cap</th>
              <th className="p-3 border max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">24h Volume</th>
              <th className="p-3 border">Supply</th>
              <th className="p-3 border">7D Chart</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-700">
            {data.map((coin, idx) => (
              <tr key={coin.id} className="hover:bg-gray-100 transition duration-150 ease-in-out">
                <td className="p-3 border font-medium text-gray-600">{idx + 1}</td>
                <td className="p-3 border text-xl">{coin.logo}</td>
                <td className="p-3 border font-semibold text-gray-900">{coin.name}</td>
                <td className="p-3 border text-indigo-600 font-bold">{coin.symbol}</td>
                <td className="p-3 border">${coin.price.toFixed(2)}</td>
                <td className={`p-3 border ${coin.change1h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {coin.change1h.toFixed(2)}%
                </td>
                <td className={`p-3 border ${coin.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {coin.change24h.toFixed(2)}%
                </td>
                <td className={`p-3 border ${coin.change7d >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {coin.change7d.toFixed(2)}%
                </td>
                <td className="p-3 border">${coin.marketCap.toLocaleString()}</td>
                <td className="p-3 border">${coin.volume24h.toLocaleString()}</td>
                <td className="p-3 border">{coin.supply}</td>
                <td className="p-3 border w-[150px] h-[60px]">
                  <ResponsiveContainer width="100%" height={50}>
                    <LineChart data={coin.history.map((price, i) => ({ day: i, price }))}>
                      <Tooltip
                        contentStyle={{ fontSize: '12px' }}
                        labelFormatter={() => ''}
                        formatter={(value) => [`$${value.toFixed(2)}`, 'Price']}
                      />
                      <Line
                        type="monotone"
                        dataKey="price"
                        stroke={coin.change7d >= 0 ? "#22c55e" : "#ef4444"} // green or red
                        dot={false}
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
