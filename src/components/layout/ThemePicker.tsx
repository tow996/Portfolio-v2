"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

const ThemeToggle = () => {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isSpinning, setIsSpinning] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const toggleTheme = () => {
		const newTheme = resolvedTheme === "dark" ? "light" : "dark";

		setIsSpinning(true);

		setTimeout(() => {
			setIsSpinning(false);
		}, 400);

		if (!document.startViewTransition) {
			setTheme(newTheme);
			return;
		}

		document.startViewTransition(() => {
			setTheme(newTheme);
		});
	};

	const iconClass = isSpinning ? "theme-icon-spinning" : "theme-icon-wrapper";

	return (
		<span onClick={toggleTheme} aria-label="Toggle Theme" className={iconClass}>
			{resolvedTheme !== "dark" ? <MdSunny /> : <IoMoon />}
		</span>
	);
};

export default ThemeToggle;
