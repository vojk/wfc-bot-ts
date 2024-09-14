import {config} from "../config";
import {gql} from "graphql-request";
import {Enum_Text_Type} from "../models/types";

const token = config.STRAPI_API_KEY;

type typeOfText = Enum_Text_Type

function getFullUrl(path: string): URL {
    return new URL(path, config.STRAPI_BASE_URL);
}

export async function putDataToStrapi(path: string, body?: any) {
    console.info(`POST ${getFullUrl(path).href}`);

    const response = await fetch(getFullUrl(path).href, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw ({
            statusCode: response.status,
            statusMessage: response.statusText,
        });
    }
    return response;
}

export async function postDataToStrapi(path: string, body?: any) {
    console.info(`POST ${getFullUrl(path).href}`);

    const response = await fetch(getFullUrl(path).href, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw ({
            statusCode: response.status,
            statusMessage: response.statusText,
        });
    }
    return response;
}

export async function getDataFromStrapi(path: string): Promise<Response> {
    console.info(`GET ${getFullUrl(path).href}`);

    const response = await fetch(getFullUrl(path).href, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw ({
            statusCode: response.status,
            statusMessage: response.statusText,
        });
    }
    return response;
}


export async function getTextFromStrapi(type: typeOfText): Promise<string> {
    const query = gql`
        query GetText($type: String) {
            texts(filters: { type: { eq: $type } }) {
                data {
                    id
                    attributes {
                        text
                    }
                }
            }
        }
    `;

    const variables = {type: type};
    const response = await config.graphQLClient.request(query, variables);
    const random = Math.floor(Math.random() * response['texts']['data'].length);
    return await response['texts']['data'][random]['attributes']['text'];
}

//TODO rewrite to better variant, more in the Fisher or XO-MAP
