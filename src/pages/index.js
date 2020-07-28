import React from "react";
import Layout from "../layout";
import Hero from "../components/hero";
import About from "../components/about";
import Contact from "../components/contact";
export default function Index() {
	if (typeof window !== "undefined") {
		// Make scroll behavior of internal links smooth
		require("smooth-scroll")('a[href*="#"]');
	}

	return (
		<Layout>
			<Hero />
			<About />
			<Contact />
		</Layout>
	);
}
