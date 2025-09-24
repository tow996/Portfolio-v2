import React, { useEffect, useState } from "react";
import ContactMe from "./ContactMe";

interface ContactModalProps {
	onClose: () => void;
	isOpen: boolean;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose, isOpen }) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setVisible(true); // fade in
		} else {
			setVisible(false); // fade out
		}
	}, [isOpen]);

	const handleClose = () => {
		setVisible(false);
		setTimeout(() => {
			onClose();
		}, 500); // match CSS transition duration
	};

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape" && visible) {
				handleClose();
			}
		};
		document.addEventListener("keydown", handleEsc);
		return () => document.removeEventListener("keydown", handleEsc);
	}, [visible]);

	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget && visible) {
			handleClose();
		}
	};

	return (
		<div
			className={`contact-modal__backdrop ${visible ? "visible" : "hidden"}`}
			onClick={handleBackdropClick}
		>
			<div
				className={`contact-modal__content ${visible ? "modal-fade-in" : "modal-fade-out"}`}
			>
				<button className="contact-modal__close" onClick={handleClose}>
					&times;
				</button>
				<ContactMe />
			</div>
		</div>
	);
};

export default ContactModal;
