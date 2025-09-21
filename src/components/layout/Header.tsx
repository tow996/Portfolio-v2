"use client";

import React, { useState, useCallback, useEffect } from "react";
import ThemePicker from "./ThemePicker";
import NavControl from "./NavControl";

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [hasScrolled, setHasScrolled] = useState(false);

	const toggleNav = useCallback(() => {
		setIsNavOpen((prev) => !prev);
	}, []);

	const closeNav = useCallback(() => {
		setIsNavOpen(false);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setHasScrolled(true);
			} else {
				setHasScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={` ${isNavOpen ? "nav-open" : ""} ${hasScrolled ? "scrolled padding-24" : "padding-48"}`}
		>
			<p id="logo">
				<img src="/logo.png" alt="ĐG Logo" />
			</p>
			<nav>
				<a href="#about" onClick={closeNav}>
					About
				</a>
				<a href="#projects" onClick={closeNav}>
					Projects
				</a>
				<a href="#contact" onClick={closeNav}>
					Contact
				</a>
				<a href="/resume.pdf" id="resume" target="_blank">
					Resume
				</a>
				<ThemePicker />
			</nav>
			<NavControl isOpen={isNavOpen} toggle={toggleNav} />
		</header>
	);
};

export default Header;
