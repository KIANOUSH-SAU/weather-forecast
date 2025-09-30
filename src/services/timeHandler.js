import tzlookup from "tz-lookup";

export async function timeHandler(city) {
    try {
        // Get coordinates for the city using a geocoding API
        const geocodeResponse = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=16b8533d19cd4443b1638897b9ac97be&limit=1`
        );
        const geocodeData = await geocodeResponse.json();

        if (geocodeData.results.length === 0) {
            throw new Error('City not found');
        }

        const { lat, lng } = geocodeData.results[0].geometry;

        // Use tz-lookup to get timezone from coordinates
        const timezone = tzlookup(lat, lng);

        // Get the current time RIGHT NOW
        const now = new Date();

        // Format the current time for the specific location's timezone
        const timeString = now.toLocaleString('en-US', {
            timeZone: timezone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        return timeString;

    } catch (error) {
        console.error('Error getting time:', error);
        // Fallback to UTC
        return new Date().toLocaleString('en-US', {
            timeZone: 'UTC',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    }
}
