import rainyImg from "../assets/rainy.png";

export default function ForecastCard({
	hours,
	forecastImg,
	foreCastTemp,
	precipitation,
}) {
	return (
		<table id="forecast-card">
			<thead>
				<tr>
					<th>
						{hours[0].datetime}
						{console.log(hours[0])}
					</th>
					<th>{hours[1].datetime}</th>
					<th>{hours[2].datetime}</th>
					<th>{hours[3].datetime}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<img src={rainyImg} alt="" />
					</td>
					<td>
						<img src={rainyImg} alt="" />
					</td>
					<td>
						<img src={rainyImg} alt="" />
					</td>
					<td>
						<img src={rainyImg} alt="" />
					</td>
				</tr>
				<tr>
					<td>{hours[0].temp}</td>
					<td>{hours[1].temp}</td>
					<td>{hours[2].temp}</td>
					<td>{hours[3].temp}</td>
				</tr>
				<tr>
					<td>{hours[0].precip}</td>
					<td>{hours[0].precip}</td>
					<td>{hours[0].precip}</td>
					<td>{hours[0].precip}</td>
				</tr>
			</tbody>
		</table>
	);
}
