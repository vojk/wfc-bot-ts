import {CommandInteraction, SlashCommandBuilder, EmbedBuilder} from "discord.js";
import {config} from "../config";
import {gql} from "graphql-request";

interface Achievement {
    achievement_name: string;
    achievement_description: string;
}

const getAchievementsOfUser = gql`
    query GetFilteredChatters($user_id: String, $guild: String) {
        achievemtChatters(filters: { chatter: { user_id: {eq: $user_id}, guild: { eq: $guild }} }) {
            data {
                id
                attributes {
                    achievement {
                      data {
                        id
                        attributes {
                          name
                          description
                       }
                      }
                    }
                    chatter {
                      data {
                        id
                        attributes {
                          user_id
                          name
                        }
                      }
                    }
                }
            }
        }
    }
`;

export const data = new SlashCommandBuilder()
    .setName("achievement")
    .setDescription("Get your achievements!")
    .addUserOption((option: any) =>
        option.setName('user')
            .setDescription('The user to get the achievements from')
            .setRequired(false));

async function getAchievements(userId: string, guildId: string | null) {
    const achievements = await config.graphQLClient.request(getAchievementsOfUser, {user_id: userId, guild: guildId});

    console.log(achievements['achievemtChatters']['data']);

    let achievements_list: Achievement[] = [];
    for (const achievement of achievements['achievemtChatters']['data']) {
        console.log(achievement['attributes']['achievement']["data"]["attributes"]["name"]);
        achievements_list.push(
            {
                "achievement_name": achievement['attributes']['achievement']["data"]["attributes"]["name"],
                "achievement_description": achievement['attributes']['achievement']["data"]["attributes"]["description"],
            }
        );
    }

    return achievements_list
}

function createAchievementsEmbed(achievements: Achievement[]): EmbedBuilder {
    const achievementsEmbed = new EmbedBuilder()
        .setTitle('Achievements')
        .setColor('#0099ff'); // You can set the color of the embed

    for (const achievement of achievements) {
        achievementsEmbed.addFields({
            name: `**${achievement.achievement_name}**`,
            value: achievement.achievement_description,
            inline: false,
        });
    }

    return achievementsEmbed;
}


export async function execute(interaction: CommandInteraction) {
    try {
        // Acknowledge the interaction to give more time to process
        await interaction.deferReply({ ephemeral: true });

        const userId = interaction.options.getUser('user')?.id || interaction.user.id;
        const guildId = interaction.guildId;

        const achievements: Achievement[] = await getAchievements(userId, guildId);
        const achievementsEmbed = createAchievementsEmbed(achievements);

        // Send the embed as an ephemeral reply
        await interaction.editReply({ embeds: [achievementsEmbed] });
    } catch (error) {
        console.error('Error while handling the interaction:', error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error while fetching your achievements. Please try again later.', ephemeral: true });
        } else {
            await interaction.reply({ content: 'There was an error while fetching your achievements. Please try again later.', ephemeral: true });
        }
    }
}
