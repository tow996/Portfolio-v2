import AboutMe from "@/components/home/aboutMe/AboutMe";
import Landing from "@/components/home/landing/Landing";
import Projects from "@/components/home/projects/Projects";
import React from "react";
import "@/styles/home/_index.scss";
import ContactMe from "@/components/home/contactMe/ContactMe";

const Home = () => {
	return (
		<main>
			<Landing />
			<AboutMe />
			<Projects />
			<ContactMe />
		</main>
	);
};

export default Home;
