import { useGSAP } from "@gsap/react";
import Moon from "./Moon";
import NightSky from "./night/NightSky";
import gsap from "gsap";
import Cloud from "./Cloud";

const Starry = ({ className }) => {
	useGSAP(() => {
		gsap.set(".cloud", {
			opacity: 0,
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
			opacity: 0.05,
		});

		// Star animations with random opacity and brightness
		gsap.set(".star", {
			opacity: () => gsap.utils.random(0.3, 1),
			scale: () => gsap.utils.random(0.5, 1.2),
		});

		gsap.to(".star", {
			opacity: () => gsap.utils.random(0.2, 1),
			duration: () => gsap.utils.random(1.5, 3),
			yoyo: true,
			repeat: -1,
			stagger: {
				amount: 2,
				from: "random",
			},
		});

		// Rotation animation for stars
		gsap.to(".star", {
			rotation: 360,
			duration: 2,
			repeat: -1,
			ease: "none",
			stagger: {
				amount: 1,
				from: "random",
			},
		});
	}, []);

	return (
		<>
			<NightSky>
				<div className="w-full overflow-hidden relative">
					<div className="flex gap-2">
						<Moon className="moon" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
						<Cloud className="cloud" />
					</div>

					{/* Stars layer - positioned above clouds */}
					<div className="absolute inset-0 pointer-events-none">
						{Array.from({ length: 15 }, (_, i) => (
							<div
								key={i}
								className="star absolute bg-gray-100"
								style={{
									width: "4.5px",
									height: "4.5px",
									clipPath:
										"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
									top: `${Math.random() * 70}%`,
									left: `${Math.random() * 90}%`,
								}}
							/>
						))}
					</div>
				</div>
			</NightSky>
		</>
	);
};

export default Starry;
