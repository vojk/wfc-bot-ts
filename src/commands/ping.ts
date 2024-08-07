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
    let strapiResult: string;

    try {
        const response = await getDataFromStrapi("api/texts");
        const result = await response.json();
        strapiLatency = Date.now() - strapiStart;
        strapiResult = JSON.stringify(result); // Convert result to string to include in the reply
    } catch (error) {
        strapiLatency = Date.now() - strapiStart;
        strapiResult = `Error: ${error.message}`;
    }

    return await interaction.reply(`**Bot Latency:** ${botLatency}ms\n**Strapi Latency:** ${strapiLatency}ms`);
}
