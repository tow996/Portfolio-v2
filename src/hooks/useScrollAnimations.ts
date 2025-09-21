import { useEffect } from "react";

const useScrollAnimations = () => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const el = entry.target as HTMLElement;
					if (entry.isIntersecting) {
						el.classList.add("in-view");
						observer.unobserve(el);
					}
				});
			},
			{
				threshold: 0.2,
			},
		);

		const elements = document.querySelectorAll(".animate-on-scroll");
		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);
};

export default useScrollAnimations;
