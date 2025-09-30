export function iconHandler(conditions, temp, precipType) {
    console.log('conditions:', conditions, 'type:', typeof conditions);
    // Convert conditions to lowercase for easier matching
    const condition = conditions ? conditions.toLowerCase() : '';

    // Handle precipitation first (most specific)
    if (precipType && precipType.includes('snow')) {
        if (temp < 0) {
            return 'wi-snow-wind'; // Blizzard conditions
        }
        return 'wi-snow'; // Regular snow
    }

    if (precipType && precipType.includes('rain')) {
        if (condition.includes('thunderstorm') || condition.includes('storm')) {
            return 'wi-thunderstorm'; // Thunderstorm
        }
        if (condition.includes('heavy')) {
            return 'wi-rain'; // Heavy rain
        }
        return 'wi-showers'; // Light rain/showers
    }

    // Handle clear/sunny conditions
    if (condition.includes('clear') || condition.includes('sunny')) {
        return 'wi-day-sunny';
    }

    // Handle cloudy conditions
    if (condition.includes('partly cloudy') || condition.includes('partially cloudy')) {
        return 'wi-day-cloudy';
    }

    if (condition.includes('cloudy') || condition.includes('overcast')) {
        return 'wi-cloudy';
    }

    // Handle fog/mist
    if (condition.includes('fog') || condition.includes('mist')) {
        return 'wi-fog';
    }

    // Handle windy conditions
    if (condition.includes('wind') || condition.includes('breezy')) {
        return 'wi-windy';
    }

    // Temperature-based fallback when conditions are unclear
    if (temp > 25) {
        return 'wi-day-sunny'; // Hot day
    } else if (temp < 0) {
        return 'wi-snowflake-cold'; // Very cold
    } else if (temp < 10) {
        return 'wi-day-cloudy'; // Cool day
    }

    // Default fallback
    return 'wi-day-cloudy';
}