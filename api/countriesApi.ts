import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {

    // Allow only GET requests
    if (request.method !== "GET") {
        return response.status(405).json({
            error: "Method not allowed."
        });
    }

    // Read the API key
    const apiKey = process.env.API_Key;

    if (!apiKey) {
        return response.status(500).json({
            error: "API key is not configured."
        });
    }

    try {

        // Read the offset from the request
        const offset = Number(request.query.offset || 0);

        // Send request to REST Countries API
        const apiResponse = await fetch(
            `https://api.restcountries.com/countries/v5?limit=100&offset=${offset}&pretty=1`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
        );

        // Convert response into JSON
        const data = await apiResponse.json();

        // Forward errors from the external API
        if (!apiResponse.ok) {
            return response.status(apiResponse.status).json(data);
        }

        // Return country data
        return response.status(200).json(data);

    } catch (error) {
        console.error("Countries API error:", error);

        return response.status(500).json({
            error: "Unable to retrieve country data."
        });
    }

}