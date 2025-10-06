import DaySky from "./day/DaySky";
import Cloud from "./Cloud";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Snowy = () => {
	useGSAP(() => {
		gsap.set(".cloud", {
			opacity: 0.7,
		});

		gsap.to(".cloud", {
			duration: 15,
			x: () => gsap.utils.random([-210, 210]),
			yoyo: true,
			repeat: -1,
			stagger: {
				amount: 7,
				from: "random",
			},

			opacity: 0.9,
		});

		gsap.set(".snow-flake", {
			opacity: 0,
			y: -50,
			backgroundColor: "white",
		});

		const rainTimeLine = gsap.timeline({ repeat: -1 });

		rainTimeLine.to(".snow-flake", {
			keyframes: {
				"0%": { opacity: 0, y: -50 },
				"20%": { opacity: 0.3, y: 100 },
				"80%": { opacity: 0.7, y: 400 },
				"100%": { opacity: 0, y: 500 },
			},
			duration: 5,
			stagger: {
				amount: 10,
				from: "random",
			},
		});

		rainTimeLine.to(".snow-flake", {
			opacity: 0, // Hide when they reach bottom
			y: -50, // Reset to cloud position
			duration: 0,
		});
	}, []);

	return (
		<>
			<DaySky>
				<div className="w-full overflow-hidden">
					<div className="flex">
						{Array.from({ length: 13 }, (_, i) => (
							<Cloud key={i} className="cloud" />
						))}
					</div>
				</div>
			</DaySky>
			<div id="snow" className="w-full h-2x flex gap-2">
				{Array.from({ length: 80 }, (_, i) => (
					<div
						key={i}
						className="w-2.5 h-2.5 rounded-lg snow-flake"
					></div>
				))}
			</div>
		</>
	);
};

export default Snowy;
