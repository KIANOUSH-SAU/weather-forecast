const ForecastCard = ({ hour, weatherIcon }) => {
	{
		console.log(hour);
	}
	return (
		<>
			<div id="forecast-card" className="">
				<h1>{hour.datetime}</h1>
				<h2>{hour.temp}</h2>
				<i className={`wi ${weatherIcon}`}></i>
			</div>
		</>
	);
};

export default ForecastCard;
