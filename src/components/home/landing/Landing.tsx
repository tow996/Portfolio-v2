import React from "react";
import content from "@/content/content.json";
import ContactButtons from "../contactButtons/ContactButtons";
import BackgroundParticles from "./BackgroundParticles";

const Landing = () => {
	return (
		<>
			<div className="landing__wrapper">
				<BackgroundParticles />
				<section id="landing" className="section landing">
					<div className="landing__content">
						<h1 className="landing__title section__title">{content.landing.title}</h1>
						<p className="landing__description section__description">
							{content.landing.description}
						</p>
						<div className="landing__buttons">
							<a href="#projects" className="landing__buttons__call_to_action">
								{content.landing.buttonProjects}
							</a>
						</div>
						<ContactButtons />
					</div>
				</section>
			</div>
		</>
	);
};

export default Landing;
