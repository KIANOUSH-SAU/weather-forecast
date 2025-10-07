import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Cloud from "./Cloud";
import DaySky from "./day/DaySky";
import Sun from "./Sun";

const RainFall = ({ timeOnlyRef }) => {
	useGSAP(() => {
		gsap.set(".rain-drop", {
			opacity: 0,
			y: -50,
			backgroundColor: "#246dff",
			clipPath: "polygon(30% 10%, 10% 100%, 100% 100%)",
			borderBottomLeftRadius: "100%",
			borderBottomRightRadius: "100%",
		});
		gsap.set(".sun", {
			opacity: 0.5,
		});

		gsap.to(".sun", {
			scale: 1.2,
			duration: 5,
			yoyo: true,
			repeat: -1,
		});

		// Cloud animation
		gsap.to(".cloud", {
			duration: 20,
			x: () => gsap.utils.random([-250, 250]),
			yoyo: true,
			repeat: -1,
			stagger: {
				amount: 10,
				from: "random",
			},
		});
		// Rain animation timeline
		const rainTimeLine = gsap.timeline({ repeat: -1 });

		rainTimeLine.to(".rain-drop", {
			// opacity: 1,
			// y: 500, // Fall to bottom
			keyframes: {
				"0%": { opacity: 0, y: -50 },
				"20%": { opacity: 1, y: 100 },
				"80%": { opacity: 1, y: 400 },
				"100%": { opacity: 0, y: 500 },
			},
			duration: 5,
			stagger: {
				amount: 10,
				from: "random",
			},
		});

		// Step 3: Hide at bottom and reset position
		rainTimeLine.to(".rain-drop", {
			opacity: 0, // Hide when they reach bottom
			y: -50, // Reset to cloud position
			duration: 0,
		});
	}, []);

	return (
		<>
			<DaySky>
				{/* Get the time and render the sky type conditionally */}
				<div className="w-full overflow-hidden">
					<div className="flex gap-2 ">
						<Sun className="sun" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
					</div>
				</div>
			</DaySky>

			<div id="rain" className="w-full h-2x flex gap-2">
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
				<div className="rain-drop w-5 h-10 rounded-lg"></div>
			</div>
		</>
	);
};

export default RainFall;
