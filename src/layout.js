import React from "react";
import { Helmet } from "react-helmet";

import Footer from "./components/footer";
import Header from "./components/header";

export default function Template({ children }) {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<meta name="description" content="EPI Group site"></meta>
				<title>EPI Group</title>
				<link
					href="https://fonts.googleapis.com/css?family=Inter|Lora:400,500&display=swap"
					rel="stylesheet"
				></link>
			</Helmet>

			<Header />
			<div>{children}</div>
			{/* <Footer /> */}
		</div>
	);
}
