import WidgetCard from "./WidgetCard";
export default function Header({
	temp,
	address,
	description,
	datetime,
	weatherIcon,
}) {
	return (
		<WidgetCard
			temp={temp}
			address={address}
			description={description}
			datetime={datetime}
			weatherIcon={weatherIcon}
		/>
	);
}
