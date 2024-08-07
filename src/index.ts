import { Client } from "discord.js";
import { config } from "./config";
import { commands } from "./commands";
import { deployCommands, deployGlobalCommands } from "./deploy-commands";
import { getDataFromStrapi } from "./strapi/strapi";
import { countMessages } from "./countMessages";

async function main() {
    try {
        const response = await getDataFromStrapi("api/achievements");
        const data = await response.json();
        console.log(data['data']);
    } catch (error) {
        console.error(error);
    }
}

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages", "GuildVoiceStates"],
});

client.once("ready", async () => {
    console.log("Discord bot is ready! 🤖");
    console.log(`Logged in as ${client.user?.tag}`);

    await main();

    // Deploy global commands (optional)
    await deployGlobalCommands();
});

client.on("guildCreate", async (guild) => {
    await deployCommands({ guildId: guild.id });
});

client.on("interactionCreate", async (interaction) => {
    if (interaction.user.bot) return;

    if (interaction.channel === null) {
        return;
    }

    if (!interaction.isCommand()) {
        return;
    }

    const { commandName } = interaction;
    if (commands[commandName as keyof typeof commands]) {
        commands[commandName as keyof typeof commands].execute(interaction);
    }
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    countMessages(message)
});

client.login(config.DISCORD_TOKEN);
