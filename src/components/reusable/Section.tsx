"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import React from "react";
interface SectionProps {
	id: string;
	title: string;
	description: string;
	children: React.ReactNode;
}

const Section = ({ id, title, description, children }: SectionProps) => {
	useScrollAnimations();

	return (
		<section className="section animate-on-scroll" id={id}>
			<h2 className="section__title animate-on-scroll">{title}</h2>
			<div className="section__title_separator animate-on-scroll"></div>
			<p className="section__description animate-on-scroll">{description}</p>
			{children}
		</section>
	);
};

export default Section;
