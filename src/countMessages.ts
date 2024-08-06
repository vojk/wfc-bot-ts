import { GraphQLClient, gql } from 'graphql-request';
import { Message } from 'discord.js';
import { config } from './config';

const query = gql`
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

const mutationCreate = gql`
    mutation CreateChatter($user_id: String!, $name: String!, $guild: String!) {
        createChatter(data: { user_id: $user_id, name: $name, guild: $guild, numOfMessages: 1 }) {
            data {
                id
                attributes {
                    user_id
                    name
                    guild
                    numOfMessages
                }
            }
        }
    }
`;

const mutationUpdate = gql`
    mutation UpdateChatter($id: ID!, $numOfMessages: Long!) {
        updateChatter(id: $id, data: { numOfMessages: $numOfMessages }) {
            data {
                id
                attributes {
                    user_id
                    name
                    guild
                    numOfMessages
                }
            }
        }
    }
`;

export async function countMessages(message: Message) {
    const variables = { user_id: message.author.id, guild: message.guild?.id };
    console.log('Query Variables:', variables);

    try {
        const data = await config.graphQLClient.request(query, variables);
        console.log('Query Data:', JSON.stringify(data, undefined, 2));

        if (data.chatters.data.length === 0) {
            const createVariables = {
                user_id: message.author.id,
                name: message.author.username,
                guild: message.guild?.id || 'default-guild-id',
            };
            console.log('Create Mutation Variables:', createVariables);

            const createData = await config.graphQLClient.request(mutationCreate, createVariables);
            console.log('Created new chatter:', JSON.stringify(createData, undefined, 2));
        } else {
            const existingChatter = data.chatters.data[0];
            const updateVariables = {
                id: existingChatter.id,
                numOfMessages: existingChatter.attributes.numOfMessages + 1,
            };
            console.log('Update Mutation Variables:', updateVariables);

            const updateData = await config.graphQLClient.request(mutationUpdate, updateVariables);
            console.log('Updated chatter:', JSON.stringify(updateData, undefined, 2));
        }
    } catch (error) {
        console.error('GraphQL Request Error:', JSON.stringify(error.response, undefined, 2));
        console.error('Error Details:', error);
    }
}
