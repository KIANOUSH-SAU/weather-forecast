const ForecastCard = ({ hour, weatherIcon }) => {
	return (
		<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[200px]">
			<div className="text-center space-y-3">
				<h1 className="text-sm font-medium text-gray-800 dark:text-gray-800">
					{hour.datetime}
				</h1>
				<div className="flex justify-center">
					<i
						className={`wi ${weatherIcon} text-4xl text-blue-500`}
					></i>
				</div>
				<h2 className="text-2xl font-bold text-gray-800 dark:text-white">
					{hour.temp}°
				</h2>
			</div>
		</div>
	);
};

export default ForecastCard;
