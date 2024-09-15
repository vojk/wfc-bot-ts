import {CommandInteraction, EmbedBuilder, SlashCommandBuilder} from 'discord.js';
import {getDataFromStrapi} from "../../strapi/strapi";

export const data = new SlashCommandBuilder()
    .setName("character")
    .setDescription("Select a D&D character")
    .addStringOption((option: any) =>
        option.setName('name')
            .setDescription('The name of the character')
            .setRequired(true));

export async function execute(interaction: CommandInteraction) {
    const characterName = interaction.options.getString('name');

    let data;

    try {
        const response = await getDataFromStrapi(`api/dnd-characters?filters[name][$eqi]=${characterName}`)
        data = await response.json();
        data = data['data'][0];
    } catch (error) {
        console.error(error);
    }

    if (!data) {
        const response = await getDataFromStrapi(`api/dnd-characters`)
        data = await response.json();
        data = data['data'];

        //Write me a code, where you show all characters, which has the name in the their name
        data = data.filter((character: any) => character.attributes.name.toLowerCase().includes(characterName.toLowerCase()));

        if (data.length === 0) {
            await interaction.reply({content: `Postava s jménem \`${characterName}\` nenalezena.`, ephemeral: true});
            return;
        }

        return await interaction.reply({embeds: [createSelectionEmbed(data)], ephemeral: true});
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

function createSelectionEmbed(data: any) {
    const characterEmbed = new EmbedBuilder()
        .setTitle(`Dostupné postavy`)
        .setColor('#b3ff00')
        .addFields(data.map(
            (character: any) => {
                return {
                    name: `**${character.attributes.name}**`,
                    value: `${character.attributes.race ? character.attributes.race : '*neznámá rasa*'}`
                }
            }
        ));
    return characterEmbed;
}

function createCharacterEmbed(data: any) {
    const achievementsEmbed = new EmbedBuilder()
        .setTitle(`${data.attributes.name}`)
        .setColor('#b3ff00')
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
