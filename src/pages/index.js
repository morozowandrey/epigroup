import React from "react";
import Layout from "../layout";
import Hero from "../components/hero";
import About from "../components/about";
import Contact from "../components/contact";
import Results from "../components/results";
// import ActivitySlider from "../components/activity-slider";
// import LoadableActivitySlider from "../components/activity-slider";
// import TradeInvestments from "../components/trade-investments";
import loadable from "@loadable/component";
// This dynamic import will not be processed server-side
const Other = loadable(() => import("../components/activity-slider"), {
	ssr: false,
});
const Other2 = loadable(() => import("../components/trade-investments"), {
	ssr: false,
});

export default function Index() {
	if (typeof window !== "undefined") {
		// Make scroll behavior of internal links smooth
		require("smooth-scroll")('a[href*="#"]');
	}

	return (
		<Layout>
			<Hero />
			<About />
			{/* <ActivitySlider /> */}
			<Other />
			<Other2 />

			{/* <LoadableActivitySlider /> */}
			{/* <TradeInvestments /> */}
			<Results />
			<Contact />
		</Layout>
	);
}
