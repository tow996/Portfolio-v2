"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

const ThemeToggle = () => {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<a
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
			aria-label="Toggle Theme"
		>
			{resolvedTheme !== "dark" ? <MdSunny /> : <IoMoon />}
		</a>
	);
};

export default ThemeToggle;
