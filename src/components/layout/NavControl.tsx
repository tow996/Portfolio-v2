"use client";

import React from "react";

interface NavControlProps {
	isOpen: boolean;
	toggle: () => void;
}

const NavControl: React.FC<NavControlProps> = ({ isOpen, toggle }) => {
	return (
		<div className={`navControl ${isOpen ? "open" : ""}`} onClick={toggle}>
			<div className="bar"></div>
			<div className="bar"></div>
			<div className="bar"></div>
		</div>
	);
};

export default NavControl;
