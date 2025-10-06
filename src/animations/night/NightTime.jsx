import RainFall from "../RainFall";
import Snowy from "../Snowy";
import Stormy from "../Stormy";
import Starry from "../Starry";

const NightTime = ({ weatherType }) => {
	// if (weatherType === "sunny") {
	// 	return <Sunny />;
	// }
	switch (weatherType) {
		case "starry":
			return <Starry />;
		case "rainy":
			return <RainFall />;
		case "stormy":
			return <Stormy />;
		case "snowy":
			return <Snowy />;
	}
};

export default NightTime;
