# เลี้ยงกาแฟผู้พัฒนา

!["Alt text"](https://warathepj.github.io/js-ai-gallery/public/image/promptpay-20.png)

# Telegram Notification Bot

This is a simple Telegram bot that sends notifications to
a specified chat using the Telegram Bot API. The bot is
built using Node.js and the `node-telegram-bot-api` library.

## Features

- Sends notifications to a Telegram chat.
- Uses environment variables for configuration.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/warathepj/nodejs-telegram-noti
   cd <repository-directory>
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your bot token and chat ID:
   ```plaintext
   BOT_TOKEN=your_bot_token_here
   CHAT_ID=your_chat_id_here
   ```

## Usage

To run the bot, use the following command:

```bash
 node index.js
```

The bot will send a test notification when it starts.

## Environment Variables

- `BOT_TOKEN`: Your Telegram bot token obtained from the BotFather.
- `CHAT_ID`: The chat ID where the bot will send notifications.

## License

This project is licensed under the MIT License.
