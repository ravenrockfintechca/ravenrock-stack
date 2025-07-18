# telegram_bot/bot.py

from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
import os

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("🧠 Ravenrock Alpha Bot 已启动。
使用 /signal BTC 或 /help")

async def signal(update: Update, context: ContextTypes.DEFAULT_TYPE):
    args = context.args
    if not args:
        await update.message.reply_text("请提供策略关键词，例如：/signal BTC")
        return
    keyword = args[0].lower()
    if keyword == "btc":
        await update.message.reply_text("📈 策略：基于 Swap Line 信号做多 BTC。
预期收益率：24.5%
脚本：macro/dollar_swap_line_arbitrage.md")
    else:
        await update.message.reply_text("未找到对应策略。")

def main():
    token = os.getenv("TG_BOT_TOKEN")
    app = ApplicationBuilder().token(token).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("signal", signal))
    print("🤖 Ravenrock Bot is running...")
    app.run_polling()

if __name__ == "__main__":
    main()
