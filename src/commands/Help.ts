import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { CustomCommand } from "../@types/custom";

export const InviteCommand: CustomCommand = {
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Get a link to invite LinkFix to your server."),
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply({
      content:
        "LinkFix works automagically! Just invite the bot to your server, make sure it has permission to read and send messages, and it will automatically respond with fixed links for you!\nAvailable commands:\n- `/invite`: Get a URL to invite LinkFix to your server.\n- `/vote`: If you enjoy LinkFix, please consider voting for the bot on Top.gg! :grinning:\n- `/help`: This is the one you're looking at right now!",
      ephemeral: true,
    });
  },
};
