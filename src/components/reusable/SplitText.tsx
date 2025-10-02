"use client";

import React, { useEffect, useRef } from "react";
import type { ElementType } from "react";

// This function splits strings to multiple spans
const splitToSpans = (text: string): string => {
	const parts = text.split(/(\s+)/);
	let wordCount = 0;

	return parts
		.map((part) => {
			if (/^\s+$/.test(part)) {
				return `<span class="char space">${"&nbsp;".repeat(part.length)}</span>`;
			}
			const className = wordCount % 2 === 0 ? "char" : "char-2";
			wordCount++;
			return part
				.split("")
				.map(
					(char, charIndex) =>
						`<span class="${className}" style="animation-delay: ${charIndex * 30}ms;">${char}</span>`,
				)
				.join("");
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
			elementRef.current.innerHTML = splitToSpans(text);
		}
	}, [text, delayStep]);

	return <Tag ref={elementRef} className={className} aria-label={text} />;
};

export default SplitText;
