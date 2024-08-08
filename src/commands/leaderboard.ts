import {
    CommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder, ButtonBuilder, Interaction, ButtonInteraction, ButtonStyle
} from "discord.js";
import { gql } from "graphql-request";
import {config} from "../config";

const queryOfGuild = gql`
    query GetFilteredChatters($guild: String) {
        chatters(filters: { guild: { eq: $guild } }, sort: "numOfMessages:desc") {
            data {
                id
                attributes {
                    user_id
                    guild
                    name
                    numOfMessages
                }
            }
        }
    }
`;

export const data = new SlashCommandBuilder()
    .setName("leaderboard")
    .setDescription("Show leaderboard of WFC!");

async function getRankOfGuild(guildId: string | null) {
    if (!guildId) {
        return "You need to be in a guild to use this command";
    }

    const variables = {guild: guildId};
    return await config.graphQLClient.request(queryOfGuild, variables);
}

async function getLeaderboard(guildId: string | null) {
    const ranks = await getRankOfGuild(guildId);

    let ranksData = [];

    for (const rank of ranks["chatters"]["data"]) {
        ranksData.push(rank["attributes"]["name"] + " - " + rank["attributes"]["numOfMessages"]);
    }

    console.log(ranksData);

    return ranksData;
}

async function embedLeaderboard(leaderboard: string[], page: number) {
    const embed = new EmbedBuilder()
        .setTitle("Leaderboard")
        .setColor("Blue")
        .setDescription(leaderboard.slice(page * 5, (page + 1) * 5).join("\n"))
        .setFooter({ text: `Page ${page + 1} of ${Math.ceil(leaderboard.length / 5)}` });
    return embed;
}

export async function execute(interaction: CommandInteraction) {
    const leaderboard = await getLeaderboard(interaction.guildId);

    if (leaderboard.length <= 0) {
        await interaction.reply({ content: "No data found!" ,ephemeral: true });
        return;
    }

    let page = 0;
    const totalPages = Math.ceil(leaderboard.length / 5);

    const updateButtons = (page: number) => {
        return new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
                .setCustomId('back')
                .setLabel('<-')
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(page === 0),
            new ButtonBuilder()
                .setCustomId('forward')
                .setLabel('->')
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(page === totalPages - 1)
        );
    };

    const embed = await embedLeaderboard(leaderboard, page);
    const row = updateButtons(page);

    const message = await interaction.reply({ embeds: [embed], components: [row], fetchReply: true, ephemeral: true });

    const filter = (i: Interaction) => i.isButton() && ['back', 'forward'].includes(i.customId) && i.user.id === interaction.user.id;
    const collector = message.createMessageComponentCollector({ filter, time: 60000 });

    collector.on('collect', async (i: ButtonInteraction) => {
        if (i.customId === 'forward') {
            page = (page + 1) % totalPages;
        } else if (i.customId === 'back') {
            page = (page - 1 + totalPages) % totalPages;
        }
        const newEmbed = await embedLeaderboard(leaderboard, page);
        const newRow = updateButtons(page);
        await i.update({ embeds: [newEmbed], components: [newRow] });
    });

    collector.on('end', () => {
        if (message.editable) {
            message.edit({ components: [] }).catch(console.error);
        }
    });
}
