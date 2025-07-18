// dashboard/pages/index.tsx

import React from "react";

const strategies = [
  { title: "Dollar Swap Line Arbitrage", path: "macro/dollar_swap_line_arbitrage.md", tag: "macro" },
  { title: "Japan YCC Breakout", path: "macro/japan_ycc_breakout.py", tag: "macro" },
  { title: "Gamma Squeeze Detector", path: "volatility/gamma_squeeze_detector.py", tag: "volatility" },
  { title: "FOMC Drift Detector", path: "flow/fomc_drift_detector.ipynb", tag: "flow" },
  { title: "ETF Mispricing Arbitrage", path: "structure/ETF_mispricing_arbitrage.md", tag: "structure" }
];

export default function Home() {
  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🧠 Ravenrock Strategy Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {strategies.map((s, i) => (
          <div key={i} className="p-4 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="text-sm text-gray-400">分类：{s.tag}</p>
            <a href={`https://github.com/ravenrockfintechca/ravenrock-strategies/blob/main/${s.path}`} className="text-blue-400 mt-2 inline-block" target="_blank">查看策略</a>
          </div>
        ))}
      </div>
    </div>
  );
}
