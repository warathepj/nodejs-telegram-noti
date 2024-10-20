require('dotenv').config(); // Load environment variables from .env file
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true }); // Use BOT_TOKEN from .env
// console.log(process.env.BOT_TOKEN);

const CHAT_ID = process.env.CHAT_ID; // Use CHAT_ID from .env
// console.log(CHAT_ID);

function sendNotification(message) {
    bot.sendMessage(CHAT_ID, message);
}
sendNotification('This is a test notification.');