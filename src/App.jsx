import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ForecastCard from "./components/ForecastCard";
import ForecastTable from "./components/ForecastTable";
import { getWeatherData } from "./services/api";

function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const [location, setLocation] = useState("Sakarya");
	const [weatherData, setWeatherData] = useState(null);
	useEffect(() => {
		const fetchWeather = async () => {
			try {
				// Fetch weather for Sakarya for the next 15 days (no dates provided)
				const data = await getWeatherData({ location: location });
				setWeatherData(data);
			} catch (error) {
				// Handle errors, e.g., show an error message to the user
				console.error("Failed to load weather data.", error);
			}
		};

		fetchWeather();
	}, [location]);

	function handleSearch(event) {
		event.preventDefault();
		setLocation(searchQuery);
	}

	return (
		<>
			<form onSubmit={handleSearch} id="search-form">
				<input
					type="text"
					name=""
					id="search-input"
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<button id="search-button" type="submit">
					Search
				</button>
			</form>
			{weatherData ? (
				<>
					<Header temperature={weatherData.currentConditions.temp} />
					<ForecastCard />
					<ForecastTable />
				</>
			) : (
				// Optionally, show a loading message while the data is being fetched
				<p>Loading weather data...</p>
			)}
		</>
	);
}

export default App;
