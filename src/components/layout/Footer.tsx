import React from "react";
import content from "@/content/content.json";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="padding-24">
			<p>{content.layout.footerText}</p>
			<p>
				<a href={content.layout.footerUrl} target="_blank" rel="noopener noreferrer">
					{content.layout.footerLink} <FaGithub></FaGithub>
				</a>
			</p>
		</footer>
	);
};

export default Footer;
