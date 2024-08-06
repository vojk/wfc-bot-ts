import { CommandInteraction, SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Send embeds based on provided JSON')
    .addStringOption(option =>
        option.setName('json')
            .setDescription('The JSON structure for the embeds')
            .setRequired(true))
    .toJSON();

function createEmbedsFromJson(json: any) {
    if (!json.embeds || !Array.isArray(json.embeds)) {
        console.error('Invalid JSON structure: embeds is not an array or is missing');
        console.error('Received JSON:', JSON.stringify(json, null, 2));
        throw new Error('Invalid JSON structure: embeds is not an array or is missing');
    }

    const embeds = json.embeds.map((embed: any) => {
        const embedBuilder = new EmbedBuilder()
            .setTitle(embed.title || '')
            .setDescription(embed.description || '')
            .setColor(embed.color || null);

        if (Array.isArray(embed.fields)) {
            embed.fields.forEach((field: any) => {
                embedBuilder.addFields({ name: field.name || '', value: field.value || '' });
            });
        }

        return embedBuilder;
    });

    return embeds;
}

export async function execute(interaction: CommandInteraction) {
    const jsonString = interaction.options.get('json_format')?.value as string;

    console.log(jsonString)

    try {
        const json = JSON.parse(jsonString || '{}');
        if (!json.embeds || !Array.isArray(json.embeds)) {
            throw new Error('Invalid JSON structure: embeds is not an array or is missing');
        }

        const embeds = createEmbedsFromJson(json);

        await interaction.reply({
            content: json.content || '',
            embeds: embeds,
            ephemeral: false // Change to false if you want the message to be visible to everyone
        });
    } catch (error) {
        console.error('Error occurred while processing the JSON:', error);
        console.error('Received JSON String:', jsonString);
        await interaction.reply({
            content: 'There was an error parsing the JSON. Please make sure it is valid.',
            ephemeral: true
        });
    }
}
