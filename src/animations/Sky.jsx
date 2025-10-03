const Sky = ({ children }) => {
	return (
		<div className="relative w-full overflow-hidden">
			{/* Main sky gradient */}
			<div
				className="w-full h-full relative rounded-3xl"
				style={{
					background: `linear-gradient(
                        to bottom,
                        #87CEEB 0%,     /* Sky blue */
                        #98D8E8 25%,    /* Light blue */
                        #B8E6F0 50%,    /* Pale blue */
                        #D6F2FF 75%,    /* Very light blue */
                        #E8F8FF 100%    /* Almost white */
                    )`,
					boxShadow: `
                        inset -20px -20px 40px rgba(0, 0, 0, 0.05),
                        inset 20px 20px 40px rgba(255, 255, 255, 0.5)
                    `,
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Sky;
