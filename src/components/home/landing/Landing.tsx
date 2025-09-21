import React from "react";
import content from "@/content/content.json";

const Landing = () => {
	return (
		<div className="landing__wrapper">
			<section id="landing" className="section landing">
				<div className="landing__content">
					<h1 className="landing__title section__title">{content.landing.title}</h1>
					<p className="landing__description section__description">
						{content.landing.description}
					</p>
					<div className="landing__buttons">
						<a href="#projects">{content.landing.buttonProjects}</a>
						<a href="#projects">{content.landing.buttonContact}</a>
					</div>
				</div>
				<div className="scroll_down">
					<div className="scroll_down__mouse"></div>
				</div>
			</section>
		</div>
	);
};

export default Landing;
