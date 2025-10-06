"use client";

import React, { useState } from "react";
import content from "@/content/content.json";
import Project from "./Project";
import Section from "@/components/reusable/Section";

const Projects = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	const handleExpand = (index: number) => {
		setExpandedIndex((prev) => (prev === index ? null : index));
	};

	return (
		<Section
			id="projects"
			title={content.projects.title}
			description={content.projects.description}
		>
			<div className="projects">
				{content.projects.projectsData.map((project, index) => (
					<Project
						key={index}
						index={index}
						expanded={expandedIndex === index}
						onExpand={handleExpand}
						{...project}
					/>
				))}
			</div>
		</Section>
	);
};

export default Projects;
