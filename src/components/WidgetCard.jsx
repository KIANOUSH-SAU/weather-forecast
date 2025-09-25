import rainyImg from "../assets/rainy.png";
import dayImg from "../assets/day-time.png";

export default function WidgetCard({
	temp,
	address,
	description,
	weatherIcon,
}) {
	return (
		<div className="widget-container">
			<div id="weather-widget">
				<h1>{temp}</h1>
				<h2>{address}</h2>
				<h3>{description}</h3>
			</div>
			<div id="weather-image-widget">
				{/* <img src={dayImg} alt="Weather" /> */}
				<i className={`wi ${weatherIcon}`}></i>
			</div>
		</div>
	);
}
