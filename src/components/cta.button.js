import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function CtaButton(props) {
	const [state, setState] = React.useState({});

	return (
		<AnchorLink
			to={props.url}
			title={props.text}
			className={
				props.textColor === "white"
					? `cta-btn cta-btn_white`
					: `cta-btn cta-btn_blue`
			}
			stripHash
		/>
	);
}
