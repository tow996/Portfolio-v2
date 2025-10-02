// components/Landing/Landing.tsx
import React from "react";
import content from "@/content/content.json";
import ContactButtons from "../contactButtons/ContactButtons";
import BackgroundParticles from "./BackgroundParticles";
import SplitText from "@/components/reusable/SplitText";

const Landing: React.FC = () => {
	return (
		<div className="landing__wrapper">
			<BackgroundParticles />
			<section id="landing" className="section landing">
				<div className="landing__content">
					<SplitText
						text={content.landing.title}
						tag="h1"
						className="landing__title section__title"
					/>
					<SplitText
						text={content.landing.description}
						tag="p"
						className="landing__description section__description"
						delayStep={20}
					/>
					<div className="landing__buttons">
						<a href="#projects" className="landing__buttons__call_to_action">
							{content.landing.buttonProjects}
						</a>
					</div>
					<ContactButtons />
				</div>
			</section>
		</div>
	);
};

export default Landing;
