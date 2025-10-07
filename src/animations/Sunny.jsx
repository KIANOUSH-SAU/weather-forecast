import DaySky from "./day/DaySky";
import Sun from "./Sun";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Cloud from "./Cloud";
const Sunny = ({ className }) => {
	useGSAP(() => {
		gsap.set(".cloud", {
			opacity: 0.3,
		});

		gsap.to(".sun", {
			scale: 1.3,
			duration: 2,
			yoyo: true,
			repeat: -1,
		});
		gsap.to(".cloud", {
			duration: 20,
			x: () => gsap.utils.random([-250, 250]),
			yoyo: true,
			repeat: -1,
			stagger: {
				amount: 10,
				from: "random",
			},

			opacity: 0.1,
		});
	}, []);

	return (
		<>
			<DaySky>
				<div className="w-full overflow-hidden">
					<div className="flex gap-2">
						<Sun className="sun" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
					</div>
				</div>
			</DaySky>
		</>
	);
};

export default Sunny;
