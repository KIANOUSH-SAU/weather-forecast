import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ForecastCard from "./components/ForecastCard";
import ForecastTable from "./components/ForecastTable";
import { getWeatherData } from "./services/api";

function App() {
	const [weatherData, setWeatherData] = useState(null);
	useEffect(() => {
		const fetchWeather = async () => {
			try {
				// Fetch weather for Sakarya for the next 15 days (no dates provided)
				const data = await getWeatherData({ location: "Sakarya" });
				setWeatherData(data);
				console.log(data); // You can see the fetched data in the console
			} catch (error) {
				// Handle errors, e.g., show an error message to the user
				console.error("Failed to load weather data.", error);
			}
		};

		fetchWeather();
	}, []);

	function handleSearch() {}

	return (
		<>
			<form onSubmit={handleSearch} id="search-form">
				<input type="text" name="" id="search-input" />
				<button id="search-button">Search</button>
			</form>
			<Header />
			<ForecastCard />
			<ForecastTable />
		</>
	);
}

export default App;
