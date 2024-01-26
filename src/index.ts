import { Client, Events, GatewayIntentBits } from "discord.js";
import { replacements } from "./replacements";
import { token } from "./config.json";

const replacementsEntries = Object.entries(replacements);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (eventClient) => {
  console.log(`Ready! Logged in as ${eventClient.user.tag}`);
});

client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) {
    // Avoid infinite loop by replying to self, or another bot that would reply to me
    return;
  }

  let reply = "";
  for (const [identifier, replacer] of replacementsEntries) {
    if (message.content.includes(identifier)) {
      const result = replacer(message.content);
      if (result) {
        reply += result + "\n";
      }
    }
  }

  if (reply !== "") {
    // remove the (not-as-good) embed from the existing link
    message.suppressEmbeds(true).catch((err) => {
      console.error("Failed to remove embeds:", err);
    });

    // reply with the URL which generates a better embed
    message.reply(reply).catch((err) => {
      console.error("Failed to reply:", err);
    });
  }
});

// Log in to Discord with your client's token
client.login(token);
