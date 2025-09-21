"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import React from "react";
import {
	BiLogoCss3,
	BiLogoDjango,
	BiLogoHtml5,
	BiLogoJavascript,
	BiLogoSass,
	BiLogoTypescript,
} from "react-icons/bi";
import { FaExternalLinkAlt, FaReact, FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiSqlite } from "react-icons/si";

interface ProjectProps {
	title: string;
	description: string;
	technologies: string[];
	image: string;
	links: {
		[key: string]: string | undefined;
	};
}

const iconMap: { [key: string]: React.ReactNode } = {
	// Link Icons
	github: <FaGithub />,
	live: <FaExternalLinkAlt />,
	// Tech Icons
	sass: <BiLogoSass />,
	html: <BiLogoHtml5 />,
	css: <BiLogoCss3 />,
	javascript: <BiLogoJavascript />,
	typescript: <BiLogoTypescript />,
	django: <BiLogoDjango />,
	react: <FaReact />,
	sqlite: <SiSqlite />,
	next: <RiNextjsFill />,
};

const Project = (project: ProjectProps) => {
	useScrollAnimations();
	return (
		<article
			className="project animation-scroll"
			style={{ "--project-image": `url(${project.image})` } as React.CSSProperties}
		>
			<div className="project__tech">
				{project.technologies.map((tech, index) => (
					<span key={index}>{iconMap[tech.toLowerCase()] ?? tech}</span>
				))}
			</div>

			<div className="project__links">
				{Object.entries(project.links).map(([key, url]) => (
					<a key={key} href={url} target="_blank" rel="noopener noreferrer">
						{iconMap[key.toLowerCase()] ?? key}
					</a>
				))}
			</div>

			<div className="project__content">
				<h3 className="project__content__title">{project.title}</h3>
				<p className="project__content__description">{project.description}</p>
			</div>
		</article>
	);
};

export default Project;
