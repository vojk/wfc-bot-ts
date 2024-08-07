import { GraphQLClient, gql } from 'graphql-request';
import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { config } from '../config';
import { getTextFromStrapi } from '../strapi/strapi';
import { replacePlaceholdersWithList } from '../utils/reformatText';

const queryOfUser = gql`
  query GetFilteredChatters($user_id: String, $guild: String) {
    chatters(filters: { user_id: { eq: $user_id }, guild: { eq: $guild } }) {
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

async function getRank(userId: string, guildId: string | null) {
    if (!guildId) {
        return "You need to be in a guild to use this command";
    }

    const variables = { user_id: userId, guild: guildId };
    return await config.graphQLClient.request(queryOfUser, variables);
}

async function getRankOfGuild(guildId: string | null) {
    if (!guildId) {
        return "You need to be in a guild to use this command";
    }

    const variables = { guild: guildId };
    return await config.graphQLClient.request(queryOfGuild, variables);
}

export const data = new SlashCommandBuilder()
    .setName('rank')
    .setDescription('Get your rank!');

export async function execute(interaction: CommandInteraction) {
    // Defer the reply as soon as possible
    await interaction.deferReply({ ephemeral: true });

    try {
        const userRankData = await getRank(interaction.user.id, interaction.guildId);
        const guildRankData = await getRankOfGuild(interaction.guildId);

        if (userRankData['chatters']['data'].length <= 0 || guildRankData['chatters']['data'].length <= 0) {
            await interaction.followUp("You need to be in a guild to use this command");
            return;
        }

        const rank = guildRankData['chatters']['data'].findIndex(
            (element: any) => element['attributes']['user_id'] === interaction.user.id
        ) + 1;
        const chatter = userRankData['chatters']['data'][0]['attributes'];

        const text = await getTextFromStrapi('Rank');
        const responseMessage = replacePlaceholdersWithList(
            text,
            [chatter['name'], rank, chatter['numOfMessages']],
            ['{user}', '{rank}', '{numOfMes}']
        );

        await interaction.followUp(responseMessage);
    } catch (error) {
        console.error(error);
        await interaction.followUp("An error occurred while fetching your rank. Please try again later.");
    }
}
