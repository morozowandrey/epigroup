import React from "react";
import { Helmet } from "react-helmet";

import Footer from "./components/footer";
import Header from "./components/header";

import favicon16 from "./images/epi-group-favicon-16.png";
import favicon32 from "./images/epi-group-favicon-32.png";
import favicon196 from "./images/epi-group-favicon-196.png";

export default function Template({ children }) {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<meta name="description" content="EPI Group site"></meta>
				<title>EPI Group</title>
				<link
					href="https://fonts.googleapis.com/css?family=Inter|Lora:300, 400,500&display=swap"
					rel="stylesheet"
				></link>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={favicon16}
				></link>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={favicon32}
				></link>
				<link
					rel="icon"
					type="image/png"
					sizes="196x196"
					href={favicon196}
				></link>
			</Helmet>

			<Header />
			<div>{children}</div>
			<Footer />
		</div>
	);
}
