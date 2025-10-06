const NightSky = ({ children }) => {
	return (
		<div className="relative w-full overflow-hidden">
			{/* Main sky gradient */}
			<div
				className="w-full h-full relative rounded-3xl"
				style={{
					background: `linear-gradient(
                        to bottom,
                        #0B1426 0%,     /* Deep night blue */
                        #1B2951 25%,    /* Dark blue */
                        #2A3B6B 50%,    /* Medium night blue */
                        #3A4D7A 75%,    /* Lighter night blue */
                        #4A5E88 100%    /* Horizon night blue */
                    )`,
					boxShadow: `
                        inset -20px -20px 40px rgba(0, 0, 0, 0.3),
                        inset 20px 20px 40px rgba(255, 255, 255, 0.1)
                    `,
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default NightSky;
