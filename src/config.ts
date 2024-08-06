import dotenv from "dotenv";
import {GraphQLClient} from "graphql-request";

const endpoint = "http://89.203.249.206:1337/graphql";

dotenv.config();

const {DISCORD_TOKEN, DISCORD_CLIENT_ID, STRAPI_BASE_URL, STRAPI_API_KEY} = process.env;

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        Authorization: `Bearer ${STRAPI_API_KEY}`,
    },
});

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
    throw new Error("Missing environment variables");
}

export const config = {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,
    STRAPI_BASE_URL,
    STRAPI_API_KEY,
    graphQLClient,
    endpoint
};
