import React from "react";

const BackgroundParticles = () => {
	return (
		<div className="background">
			{[...Array(20)].map((x, i) => (
				<div className="circle-container" key={i}>
					<div className="circle"></div>
				</div>
			))}
		</div>
	);
};

export default BackgroundParticles;
