import {GraphQLClient, gql} from 'graphql-request';
import {CommandInteraction, SlashCommandBuilder} from "discord.js";
import {config} from "../config";
import {getTextFromStrapi} from "../strapi/strapi";
import {replacePlaceholdersWithList} from "../utils/reformatText";

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

    const variables = {user_id: userId, guild: guildId};
    return await config.graphQLClient.request(queryOfUser, variables);
}

async function getRankOfGuild(guildId: string | null) {
    if (!guildId) {
        return "You need to be in a guild to use this command";
    }

    const variables = {guild: guildId};
    return await config.graphQLClient.request(queryOfGuild, variables);
}

export const data = new SlashCommandBuilder()
    .setName("rank")
    .setDescription("Get your rank!");

export async function execute(interaction: CommandInteraction) {
    const data = await getRank(interaction.user.id, interaction.guildId);
    const data_ = await getRankOfGuild(interaction.guildId);

    const rank = data_['chatters']['data'].findIndex((element: any) => element['attributes']['user_id'] === interaction.user.id) + 1;
    const chatter = data['chatters']['data'][0]['attributes']

    const text = await getTextFromStrapi('Rank');

    return interaction.deferReply({ephemeral: true}).then(() => {
        interaction.followUp(replacePlaceholdersWithList(text, [chatter['name'], rank, chatter['numOfMessages']], ['{user}', '{rank}', '{numOfMes}']));
    });
}
