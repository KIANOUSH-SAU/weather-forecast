import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Moon = ({ className }) => {
	useGSAP(() => {
		gsap.set(".moon", {
			y: -80,
		});
		gsap.to(".moon", {
			y: -70,
			duration: 4,
			yoyo: true,
			repeat: -1,
			ease: "power2.inOut",
		});
	}, []);

	return (
		<div
			className={`moon w-20 h-20 rounded-full absolute top-28 right-0 transform -translate-x-16 rotate-30 ${
				className || ""
			}`}
			style={{
				backgroundColor: "#C4C4C473",
				boxShadow: "0 0 2rem 0.6rem #C4C4C49C",
				borderRight: "0.7rem solid #EBEBEB",
			}}
		/>
	);
};

export default Moon;
