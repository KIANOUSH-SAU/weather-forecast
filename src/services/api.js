const API_KEY = "YWPMN22M4QXPSBY9Y6X56KMFY";
const BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;
export const getWeatherData = async ({ location, date1, date2 }) => {
    const dateString = date1 && date2 ? `/${date1}/${date2}` : date1 ? `/${date1}` : '';
    const url = `${BASE_URL}/${location}${dateString}?unitGroup=metric&key=${API_KEY}&contentType=json`;
    try {
        const respons = await fetch(url);
        if (!respons.ok) {
            const errorText = await respons.text();
            throw new Error(`Failed to fetch the weather data: ${errorText}`);
        }
    }
    catch (err) {
        console.error("error while fetching data", err);
        throw err;
    }

    return data;
}