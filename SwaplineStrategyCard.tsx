// dashboard/components/SwaplineStrategyCard.tsx

import React from "react";

export default function SwaplineStrategyCard() {
  return (
    <div className="p-4 bg-gray-900 rounded-lg text-white shadow-lg">
      <h2 className="text-xl font-bold">🧠 Dollar Swap Line Arbitrage</h2>
      <p className="text-sm text-gray-400 mt-2">基于 Swap Line 使用量 + EUR/USD 基差构建美元流动性趋势信号。</p>
      <img src="/strategy_pnl_ravenrock_v13.png" alt="Strategy PnL" className="mt-4 rounded-md border border-gray-700" />
      <p className="mt-4 text-sm">
        推荐标的：<code>EUR/USD</code>、<code>$UUP</code>、<code>$FXE</code><br />
        回测图示、信号说明详见：
        <a href="https://github.com/ravenrockfintechca/ravenrock-strategies/blob/main/macro/dollar_swap_line_arbitrage.md" className="text-blue-400" target="_blank">GitHub 策略原文</a>
      </p>
    </div>
  );
}
