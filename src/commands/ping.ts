import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import {getDataFromStrapi} from "../strapi/strapi";

export const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!");

export async function execute(interaction: CommandInteraction) {
    // Measure bot latency
    const botLatency = Date.now() - interaction.createdTimestamp;

    // Measure Strapi latency
    const strapiStart = Date.now();
    let strapiLatency: number;

    try {
        await getDataFromStrapi("api/texts");
        strapiLatency = Date.now() - strapiStart;
    } catch (error) {
        strapiLatency = Date.now() - strapiStart;
    }

    return await interaction.reply(`**Bot Latency:** ${botLatency}ms\n**Strapi Latency:** ${strapiLatency}ms`);
}
