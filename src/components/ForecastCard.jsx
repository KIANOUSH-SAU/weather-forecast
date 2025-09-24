import rainyImg from "../assets/rainy.png";

export default function ForecastCard() {
	return (
		<table id="forecast-card">
			<thead>
				<tr>
					<th>Hour1</th>
					<th>Hour2</th>
					<th>Hour3</th>
					<th>Hour4</th>
					<th>Hour5</th>
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
					<td>
						<img src={rainyImg} alt="" />
					</td>
				</tr>
				<tr>
					<td>temp1</td>
					<td>temp2</td>
					<td>temp3</td>
					<td>temp4</td>
					<td>temp5</td>
				</tr>
				<tr>
					<td>precipitation1</td>
					<td>precipitation2</td>
					<td>precipitation3</td>
					<td>precipitation4</td>
					<td>precipitation5</td>
				</tr>
			</tbody>
		</table>
	);
}
