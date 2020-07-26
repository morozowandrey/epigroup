import React from "react";
import { Link } from "gatsby";
import Layout from "../layout";
export default function Index() {
	return (
		<Layout>
			<Link to="/contact/">Contact form</Link>
		</Layout>
	);
}
