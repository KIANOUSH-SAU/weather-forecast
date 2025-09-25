import WidgetCard from "./WidgetCard";
export default function Header({ temp, address, description, weatherIcon }) {
	return (
		<WidgetCard
			temp={temp}
			address={address}
			description={description}
			weatherIcon={weatherIcon}
		/>
	);
}
