# 📘 策略摘要：Dollar Swap Line Arbitrage

## 策略简介
该策略基于美联储 Swap Line 使用量 + EUR/USD Cross-Currency Basis 的双重信号组合，判断全球美元流动性紧张程度，并据此构建做多 USD / 做空 EUR 的方向性套利头寸。

## 执行逻辑
- 若 Swap Line 使用量大幅高于3个月均值；
- 且 EUR/USD 跨币种基差低于 -30bps；
- 同时 DXY 处于上升通道；
→ 则生成 Long USD 策略信号。

## 推荐交易工具
- 货币对：EUR/USD
- ETF：$UUP（做多美元）, $FXE（做空欧元）
- 衍生品：EURUSD 期权 / 美元利差合约

## 回测图示（示意）
![Strategy PnL](./strategy_pnl_ravenrock_v13.png)

## 风险提示
- ECB 外汇市场干预；
- Swap Line 数据发布延迟；
- 市场剧烈波动时流动性偏离可能增加误判。
