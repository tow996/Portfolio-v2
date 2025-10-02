import React from "react";
import content from "@/content/content.json";
import {
	BiLogoCss3,
	BiLogoDjango,
	BiLogoGithub,
	BiLogoHtml5,
	BiLogoJavascript,
	BiLogoPython,
	BiLogoSass,
	BiLogoTypescript,
	BiLogoVisualStudio,
} from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { FaLinux, FaReact } from "react-icons/fa";
import { IoLogoWindows } from "react-icons/io5";
import { SiMysql, SiSqlite } from "react-icons/si";
import Section from "@/components/reusable/Section";

const AboutMe = () => {
	return (
		<Section
			id="about-me"
			title={content.aboutMe.title}
			description={content.aboutMe.description}
		>
			<div className="about-me__languages">
				<BiLogoJavascript />
				<BiLogoTypescript />
				<RiNextjsFill />
				<FaReact />
				<BiLogoHtml5 />
				<BiLogoCss3 />
				<BiLogoSass />
				<BiLogoPython />
				<BiLogoDjango />
				<BiLogoGithub />
				<SiSqlite />
				<SiMysql />
				<BiLogoVisualStudio />
				<IoLogoWindows />
				<FaLinux />
			</div>
		</Section>
	);
};

export default AboutMe;
