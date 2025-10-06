"use client";

import React, { useEffect, useRef } from "react";
import type { ElementType } from "react";

// Function to split text into word and character spans
const splitToSpans = (text: string, delayStep: number): string => {
	const parts = text.split(/(\s+)/);
	let wordCount = 0;
	let charDelay = 0;

	return parts
		.map((part) => {
			if (/^\s+$/.test(part)) {
				return `<span class="char space">${"&nbsp;".repeat(part.length)}</span>`;
			}

			const wordClass = wordCount % 2 === 0 ? "word" : "word-2";
			const charClass = wordCount % 2 === 0 ? "char" : "char-2";
			wordCount++;

			const wordContent = part
				.split("")
				.map((char) => {
					const charSpan = `<span class="${charClass}" style="animation-delay: ${charDelay}ms;">${char}</span>`;
					charDelay += delayStep;
					return charSpan;
				})
				.join("");

			// The 'display: inline-block;' style is crucial for correct layout
			return `<span class="${wordClass}" style="display: inline-block;">${wordContent}</span>`;
		})
		.join("");
};

interface SplitTextProps {
	text: string;
	tag?: ElementType;
	className?: string;
	delayStep?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
	text,
	tag: Tag = "span",
	className = "",
	delayStep = 30,
}) => {
	const elementRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (elementRef.current) {
			// Pass delayStep to correctly calculate animation delays
			elementRef.current.innerHTML = splitToSpans(text, delayStep);
		}
	}, [text, delayStep]);

	// Added a minimal inline style to the main container just in case
	// it helps with flow, but the SCSS word styles are the primary fix.
	return (
		<Tag
			ref={elementRef}
			className={className}
			aria-label={text}
			style={{ display: "block" }}
		/>
	);
};

export default SplitText;
