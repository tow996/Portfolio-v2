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
		// Changed tag selector 'header' to BEM class 'header'
		<header
			className={`
                header 
                ${isNavOpen ? "nav-open" : ""} 
                ${hasScrolled ? "scrolled padding-24" : "padding-48"}
            `}
		>
			{/* Changed id="logo" to className="header__logo" */}
			<p className="header__logo">
				<img src="/logo.png" alt="ĐG Logo" />
			</p>
			{/* Changed tag selector 'nav' to BEM class 'header__nav' */}
			<nav className="header__nav">
				<a href="#about" onClick={closeNav}>
					About
				</a>
				<a href="#projects" onClick={closeNav}>
					Projects
				</a>
				{/* Changed id="resume" to className="header__resume" */}
				<a href="/resume.pdf" className="header__resume" target="_blank">
					Resume
				</a>
				<ThemePicker />
			</nav>
			<NavControl isOpen={isNavOpen} toggle={toggleNav} />
		</header>
	);
};

export default Header;
