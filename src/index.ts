import fs from "fs";
import { IncomingMessage, KoLBot, MessageType } from "kol-chatbot";
import path from "path";

function process(message: IncomingMessage) {
  if (message.type === MessageType.KMail) {
    message.reply("Received.");
  }
}

const secrets: { username: string; password: string } = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../secrets.json"), "utf-8")
);
const bot = new KoLBot(secrets.username, secrets.password);
bot.start(process);
