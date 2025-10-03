const Cloud = ({ className }) => {
	return (
		<div
			className={`flex justify-center items-center p-8 ${
				className || ""
			}`}
		>
			<div className="relative">
				{/* Main cloud body */}
				<div
					className="w-32 h-20 bg-gray-200 rounded-full relative"
					style={{
						boxShadow: `
                            inset -8px -8px 16px rgba(0, 0, 0, 0.1),
                            inset 8px 8px 16px rgba(255, 255, 255, 0.9),
                            8px 8px 16px rgba(0, 0, 0, 0.1),
                            -8px -8px 16px rgba(255, 255, 255, 0.9)
                        `,
					}}
				>
					{/* Cloud bumps */}
					<div className="absolute -top-4 left-6 w-16 h-16 bg-gray-200 rounded-full" />
					<div className="absolute top-2 left-20 bottom-10 w-16 h-16 bg-gray-200 rounded-full" />
					<div className="absolute -top-6 left-12 w-20 h-20 bg-gray-200 rounded-full" />
					<div
						className="absolute -top-2 right-4 w-12 h-12 bg-gray-200 rounded-full"
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
	);
};

export default Cloud;
