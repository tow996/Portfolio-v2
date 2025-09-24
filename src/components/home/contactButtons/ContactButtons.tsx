"use client";

import { useState, useEffect, useRef } from "react";
import { BiLogoGithub } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import ContactModal from "../contactMe/ContactModal";

const ContactButtons = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const buttonsRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => (!entry.isIntersecting ? setIsVisible(true) : setIsVisible(false)),
			{ threshold: 0 },
		);

		if (buttonsRef.current) observer.observe(buttonsRef.current);
		return () => {
			if (buttonsRef.current) {
				observer.unobserve(buttonsRef.current);
			}
		};
	}, []);

	return (
		<>
			<div className="contact-buttons" ref={buttonsRef}>
				<a href="https://github.com/tow996" target="_blank">
					<BiLogoGithub />
				</a>
				<IoIosMail onClick={() => setIsModalOpen(true)} />
			</div>

			<div className={`fixed-buttons ${isVisible ? "visible" : "invisible"}`}>
				<a href="https://github.com/tow996" target="_blank">
					<BiLogoGithub />
				</a>
				<IoIosMail onClick={() => setIsModalOpen(true)} />
			</div>

			<ContactModal
				onClose={() => setIsModalOpen(false)}
				isOpen={isModalOpen ? true : false}
			/>
		</>
	);
};

export default ContactButtons;
