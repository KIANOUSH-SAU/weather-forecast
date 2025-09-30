import { useState, useEffect } from "react";
import rainyImg from "../assets/rainy.png";
import dayImg from "../assets/day-time.png";
import { timeHandler } from "../services/timeHandler";

export default function WidgetCard({
	temp,
	address,
	description,
	datetime,
	weatherIcon,
}) {
	const [currentTime, setCurrentTime] = useState("Loading...");

	useEffect(() => {
		const fetchTime = async () => {
			try {
				const time = await timeHandler(address);
				setCurrentTime(time);
			} catch (error) {
				setCurrentTime("Time unavailable");
			}
		};

		if (address) {
			fetchTime();
		}
	}, [address]);
	console.log(typeof currentTime);
	console.log(currentTime);
	let timeOnly = "";
	if (currentTime !== "Loading...") {
		timeOnly = currentTime.split(",")[1].trim();
	}
	console.log(timeOnly);
	return (
		<div className="widget-container">
			<div id="weather-widget">
				<h1>{temp}</h1>
				<h2>{address}</h2>
				<h3>{description}</h3>
				<h4>{currentTime}</h4>
			</div>
			<div
				id="weather-image-widget"
				className={
					+timeOnly.split(":")[0] > 18 ? "night-theme" : "day-theme"
				}
			>
				{/* <img src={dayImg} alt="Weather" /> */}
				<i className={`wi ${weatherIcon}`}></i>
			</div>
		</div>
	);
}
