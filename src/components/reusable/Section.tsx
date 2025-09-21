import React from "react";

interface SectionProps {
	id: string;
	title: string;
	description: string;
	children: React.ReactNode;
}

const Section = ({ id, title, description, children }: SectionProps) => {
	return (
		<section className="section" id={id}>
			<h2 className="section__title">{title}</h2>
			<div className="section__title_separator"></div>
			<p className="section__description">{description}</p>
			{children}
		</section>
	);
};

export default Section;
