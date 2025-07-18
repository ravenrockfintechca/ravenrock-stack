# Ravenrock Backtest Core v0.1

import yfinance as yf
import pandas as pd

class StrategyTemplate:
    def __init__(self, symbol):
        self.symbol = symbol

    def load_data(self, start="2022-01-01", end="2023-01-01"):
        data = yf.download(self.symbol, start=start, end=end)
        return data

    def generate_signal(self, data):
        raise NotImplementedError("请在子类中实现信号生成逻辑")

    def backtest(self):
        data = self.load_data()
        signal = self.generate_signal(data)
        return signal
