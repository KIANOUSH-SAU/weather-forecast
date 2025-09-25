import rainyImg from "../assets/rainy.png";
import dayImg from "../assets/day-time.png";

export default function WidgetCard({ temperature }) {
	return (
		<div className="widget-container">
			<div id="weather-widget">
				<h1>{temperature}</h1>
				<h2>Sakarya / Serdivan</h2>
				<h4>24/09/2024 14:42</h4>
			</div>
			<div id="weather-image-widget">
				<img src={dayImg} alt="Weather" />
			</div>
		</div>
	);
}
