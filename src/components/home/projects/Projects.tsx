import React from "react";
import content from "@/content/content.json";
import Project from "./Project";
import Section from "@/components/reusable/Section";

const Projects = () => {
	return (
		<Section
			id="projects"
			title={content.projects.title}
			description={content.projects.description}
		>
			<div className="projects padding-24">
				{content.projects.projectsData.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</Section>
	);
};

export default Projects;
