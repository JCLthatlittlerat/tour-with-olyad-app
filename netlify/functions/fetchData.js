export async function handler(event, context) {
    try {
        const response = await fetch("https://course-api.com/react-tours-project");

        if (!response.ok) {
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: "Failed to fetch data" }),
            };
        }

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
}