const Sun = ({ className }) => {
	return (
		<div
			className={`flex justify-center items-center p-8 ${
				className || ""
			}`}
		>
			<div className="relative">
				<div
					className="w-20 h-20 bg-amber-200 rounded-full relative flex justify-center items-center"
					style={{
						boxShadow: `
                            inset -8px -8px 16px rgba(0, 0, 0, 0.1),
                            inset 8px 8px 16px rgba(255, 255, 255, 0.9),
                            8px 8px 16px rgba(0, 0, 0, 0.1),
                            -8px -8px 16px rgba(255, 255, 255, 0.9)
                        `,
					}}
				>
					<div className="w-18 h-18 bg-amber-300 rounded-full flex justify-center items-center">
						<div className="w-16 h-16 bg-amber-400 rounded-full flex justify-center items-center">
							<div
								className="w-12 h-12 bg-amber-500 rounded-full"
								style={{
									boxShadow: `
                            inset -8px -8px 16px rgba(0, 0, 0, 0.1),
                            inset 8px 8px 16px rgba(255, 255, 255, 0.9),
                            8px 8px 16px rgba(0, 0, 0, 0.1),
                            -8px -8px 16px rgba(255, 255, 255, 0.9)
                        `,
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sun;
