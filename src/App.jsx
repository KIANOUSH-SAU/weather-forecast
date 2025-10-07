import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import ForecastCards from "./components/ForecastCards";
import { getWeatherData } from "./services/api";
import { iconHandler } from "./services/iconHandler";
import { timeHandler } from "./services/timeHandler"; // Add this import
import DayTime from "./animations/day/DayTime";
import NightTime from "./animations/night/NightTime";
import Moon from "./animations/Moon";
import Starry from "./animations/Starry";

function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const [location, setLocation] = useState("Sakarya");
	const [weatherData, setWeatherData] = useState(null);
	const [currentTime, setCurrentTime] = useState("Loading...");
	const timeOnly = useRef();
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

	useEffect(() => {
		const fetchTime = async () => {
			try {
				const time = await timeHandler(weatherData.address);
				setCurrentTime(time);
			} catch (error) {
				setCurrentTime("Time unavailable");
			}
		};

		// Fix: Check if weatherData exists AND has address
		if (weatherData && weatherData.address) {
			fetchTime();
		}
	}, [weatherData]); // Changed dependency to weatherData instead of weatherData.address
	if (currentTime !== "Loading...") {
		timeOnly.current = currentTime.split(",")[1].trim();
	}
	function handleSearch(event) {
		event.preventDefault();
		setLocation(searchQuery);
	}

	return (
		<>
			{/* <RainFall /> */}
			{/* <Sunny /> */}
			{/* <Stars /> */}

			{/* {parseInt(timeOnly.current?.split(":")[0]) > 18 ? (
				<DayTime weatherType={"rainy"} timeOnlyRef={timeOnly} />
			) : (
				<NightTime weatherType={"rainy"} timeOnlyRef={timeOnly} />
			)} */}

			{/* <Moon /> */}
			<Starry />
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
					<Header
						temp={weatherData.currentConditions.temp}
						address={weatherData.address}
						description={weatherData.description}
						datetime={weatherData.days[0].datetime}
						weatherIcon={iconHandler(
							weatherData.currentConditions.conditions,
							weatherData.currentConditions.temp,
							weatherData.currentConditions.preciptype
						)}
					/>
					<ForecastCards hours={weatherData.days[0].hours} />
				</>
			) : (
				// Optionally, show a loading message while the data is being fetched
				<p>Loading weather data...</p>
			)}
		</>
	);
}

export default App;
