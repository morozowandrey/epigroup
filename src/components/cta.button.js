import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { navigate } from "@reach/router";

export default function CtaButton(props) {
	const [state, setState] = React.useState({});

	return (
		<AnchorLink
			to={props.url}
			title={props.text}
			className="cta-btn"
			stripHash
		/>
		// <button
		// 	className="cta-btn"
		// 	onClick={() => {
		// 		navigate(`${props.url}`);
		// 	}}
		// >
		// 	{props.text}
		// </button>
	);
}
