import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { gql } from "graphql-request";
import { config } from "../config";

export const data = new SlashCommandBuilder()
    .setName("quote")
    .setDescription("Gives you a random quote")
    .addStringOption(
        option => option.setName("quote_id")
            .setDescription("The quote you want to get")
            .setRequired(false)
    )
    .addStringOption(
        option => option.setName("action")
            .setDescription("The author of the quote")
            .setRequired(false)
            .addChoices([{ name: "add", value: "add" }, { name: "remove", value: "remove" }])
    )
    .addStringOption(
        option => option.setName("text")
            .setDescription("The text of the quote")
            .setRequired(false)
    );

const quoteQuery = gql`
    query GetRandomQuote($guild_id: String!) {
        quotes(filters: { guild_id: { eq: $guild_id } }) {
            data {
                id
                attributes {
                    quote
                    guild_id
                }
            }
        }
    }
`;

const quoteCertainQuery = gql`
    query GetRandomQuote($guild_id: String!, $quote_id: ID!) {
        quotes(filters: { guild_id: { eq: $guild_id }, id: { eq: $quote_id } }) {
            data {
                id
                attributes {
                    quote
                    guild_id
                }
            }
        }
    }
`;

const addQuoteMutation = gql`
    mutation AddQuote($quote: String!, $guild_id: String!) {
        createQuote(data: { quote: $quote, guild_id: $guild_id }) {
            data {
                id
                attributes {
                    quote
                    guild_id
                }
            }
        }
    }
`;

const removeQuoteMutation = gql`
    mutation RemoveQuote($id: ID!) {
        deleteQuote(id: $id) {
            data {
                id
            }
        }
    }
`;

function areThereQuotes(quotes: any) {
    return quotes.length > 0;
}

async function getQuote(guildId: string) {
    const variables = { guild_id: guildId };

    const response = await config.graphQLClient.request(quoteQuery, variables);
    const quotes = response['quotes']['data'];

    const random = Math.floor(Math.random() * quotes.length);

    if (areThereQuotes(quotes)) {
        return quotes[random].id + '. ' + quotes[random].attributes.quote;
    }

    return 'No quotes found';
}

async function addQuote(quote: string, guildId: string) {
    const variables = { quote, guild_id: guildId };

    const response = await config.graphQLClient.request(addQuoteMutation, variables);

    if (response) {
        return response.createQuote.data.id + '. ' + response.createQuote.data.attributes.quote;
    }

    return 'Error occurred while adding the quote';
}

async function removeQuote(quoteId: string) {
    const variables = { id: quoteId };

    const response = await config.graphQLClient.request(removeQuoteMutation, variables);

    if (response) {
        return 'Quote removed successfully';
    }

    return 'Error occurred while removing the quote';
}

export async function execute(interaction: CommandInteraction) {
    const quote_id = interaction.options.getString('quote_id');
    const quoteAction = interaction.options.getString('action');
    const quoteText = interaction.options.getString('text');

    try {
        await interaction.deferReply(); // Defer the reply to give more time for processing

        let responseMessage = '';

        if (quoteAction === 'add') {
            if (!quoteText) {
                responseMessage = 'Please provide the quote text';
            } else {
                responseMessage = await addQuote(quoteText, interaction.guildId);
            }
        } else if (quoteAction === 'remove') {
            if (!quote_id) {
                responseMessage = 'Please provide the quote id';
            } else {
                responseMessage = await removeQuote(quote_id);
            }
        } else if (quote_id) {
            const response = await config.graphQLClient.request(quoteCertainQuery, { guild_id: interaction.guildId, quote_id });
            if (areThereQuotes(response['quotes']['data'])) {
                responseMessage = response['quotes']['data'][0].id + '. ' + response['quotes']['data'][0].attributes.quote;
            } else {
                responseMessage = 'No quotes found';
            }
        } else {
            responseMessage = await getQuote(interaction.guildId);
        }

        await interaction.editReply(responseMessage);

    } catch (error) {
        console.error('Error occurred while fetching the quote:', error);

        try {
            await interaction.editReply('Error occurred while fetching the quote');
        } catch (editError) {
            console.error('Error occurred while editing the reply:', editError);
        }
    }
}
