import {CommandInteraction, EmbedBuilder, SlashCommandBuilder} from "discord.js";
import {getDataFromStrapi} from "../../strapi/strapi";


async function getAllCharacters() {
    const response = await getDataFromStrapi('api/dnd-characters');
    const data = await response.json();

    return data['data'].map((character: any) => {
        return {
            name: character.attributes.name,
            value: character.attributes.name,
        };
    });
}

async function buildCommand() {
    const characters = await getAllCharacters();

    return new SlashCommandBuilder()
        .setName("character")
        .setDescription("Select a D&D character")
        .addStringOption(option =>
            option.setName('name')
                .setDescription('The name of the character')
                .setRequired(true)
                .addChoices(...characters) // Spread the array of choices
        );
}

export const data = await buildCommand();

export async function execute(interaction: CommandInteraction) {
    const characterName = interaction.options.getString('name');

    let data;

    try {
        const response = await getDataFromStrapi(`api/dnd-characters?filters[name][$eq]=${characterName}`)
        data = await response.json();
        data = data['data'][0];
    } catch (error) {
        console.error(error);
    }

    console.log(JSON.stringify(data.attributes.description));

    if (!data) {
        return await interaction.reply('Character not found');
    }

    const characterEmbed = createCharacterEmbed(data);

    await interaction.reply({embeds: [characterEmbed], ephemeral: true});
}

function formatDiscordEmbed(data: any[]): string {
    return data.map(block => {
        switch (block.type) {
            case 'heading':
                return `**${block.children.map((child: any) => child.text).join('')}**`;
            case 'paragraph':
                return block.children.map((child: any) => {
                    let formattedText = child.text;
                    if (child.strikethrough) formattedText = `~~${formattedText}~~`;
                    if (child.underline) formattedText = `__${formattedText}__`;
                    if (child.bold) formattedText = `**${formattedText}**`;
                    if (child.italic) formattedText = `*${formattedText}*`;
                    if (child.code) formattedText = `\`${formattedText}\``;
                    return formattedText;
                }).join('');
            case 'list':
                return block.children.map((item: any, index: number) => {
                    const prefix = block.format === 'ordered' ? `${index + 1}.` : '-';
                    return `${prefix} ${item.children.map((child: any) => child.text).join('')}`;
                }).join('\n') + '\n';
            case 'quote':
                return `> ${block.children.map((child: any) => child.text).join('')}\n`;
            case 'code':
                return `\`\`\`\n${block.children.map((child: any) => child.text).join('')}\n\`\`\`\n`;
            case 'link':
                return `[${block.children.map((child: any) => child.text).join('')}](${block.url})\n`;
            default:
                return '';
        }
    }).join('\n');
}

function createCharacterEmbed(data: any) {
    const achievementsEmbed = new EmbedBuilder()
        .setTitle(`${data.attributes.name}`)
        .setColor('#0099ff')
        .addFields([
            {
                name: `**Popis**`,
                value: `**Rasa:** ${data.attributes.race}
                        **Národnost:** ${data.attributes.nationality ? data.attributes.nationality : '*neznámé*'}
                        **Věk:** ${data.attributes.age ? data.attributes.age : '*neznámé*'} \n
                        ${formatDiscordEmbed(data.attributes.description)} \n`,
                inline: false,
                image: {
                    url: 'https://i.sstatic.net/Fzh0w.png',
                }
            }
        ]);

    return achievementsEmbed;
}
