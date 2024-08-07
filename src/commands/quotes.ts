import {CommandInteraction, SlashCommandBuilder} from "discord.js";
import {gql} from "graphql-request";
import {getDataFromStrapi} from "../strapi/strapi";
import {config} from "../config";

export const data = new SlashCommandBuilder()
    .setName("quote")
    .setDescription("Gives you a random quote")
    .addStringOption(
        option => option.setName("quote")
            .setDescription("The quote you want to add")
            .setRequired(false)
    );

const quoteQuery = gql`
    query GetRandomQuote($guild_id: String!) {
  quotes(filters: {guild_id: {eq: $guild_id}}) {
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


function areThereQuotes(quotes: any) {
    return quotes.length > 0;
}

async function getQuote(guildId: string) {
    const variables = {guild_id: guildId};

    const response = await config.graphQLClient.request(quoteQuery, variables);
    console.log(response)
    const quotes = response['quotes']['data'];

    const random = Math.floor(Math.random() * quotes.length);

    if (areThereQuotes(quotes)) {
        return quotes[random].id + '. ' + quotes[random].attributes.quote;
    }

    return 'No quotes found';
}

async function addQuote(quote: string, guildId: string) {
    const variables = {quote, guild_id: guildId};

    const response = await config.graphQLClient.request(addQuoteMutation, variables);

    console.log(response)

    if (response) {
        return response.createQuote.data.id + '. ' + response.createQuote.data.attributes.quote;
    }

    return 'Error occurred while adding the quote';
}

export async function execute(interaction: CommandInteraction) {
    const quoteValue = interaction.options.getString('quote');
    try {
        if (quoteValue) {
            return await interaction.reply(await addQuote(quoteValue, interaction.guildId));
        }

        const quote = await getQuote(interaction.guildId);


        return await interaction.reply(quote);
    } catch (error) {
        console.error('Error occurred while fetching the quote:', error);
        return await interaction.reply('Error occurred while fetching the quote');
    }
}
