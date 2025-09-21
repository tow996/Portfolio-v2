import "@/styles/main.scss";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";
import { Jost, Joti_One } from "next/font/google";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });
const joti = Joti_One({ subsets: ["latin"], variable: "--font-joti-one", weight: "400" });

export const metadata: Metadata = {
	title: "Portfolio - Đorđo Glogovac",
	description: "Personal portfolio of fullstack developer Đorđo Glogovac",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning className={`${jost.variable} ${joti.variable}`}>
			<body>
				<ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
