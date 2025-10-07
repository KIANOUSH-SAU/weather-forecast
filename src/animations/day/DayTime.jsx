import RainFall from "../RainFall";
import Snowy from "../Snowy";
import Stormy from "../Stormy";
import Sunny from "../Sunny";

const DayTime = ({ weatherType }) => {
	switch (weatherType) {
		case "sunny":
			return <Sunny />;
		case "rainy":
			return <RainFall />;
		case "stormy":
			return <Stormy />;
		case "snowy":
			return <Snowy />;
	}
};

export default DayTime;
