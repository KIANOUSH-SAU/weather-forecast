import ForecastCard from "./ForecastCard";
import { iconHandler } from "../services/iconHandler";

export default function ForecastCards({
	hours,
	weatherIcon,
	foreCastTemp,
	precipitation,
}) {
	return (
		<div id="forecast-card-container">
			{hours.map((hourlyData) => {
				return (
					<ForecastCard
						hour={hourlyData}
						weatherIcon={iconHandler(
							hourlyData.conditions,
							hourlyData.temp,
							hourlyData.preciptype
						)}
					/>
				);
			})}
		</div>
	);
}
