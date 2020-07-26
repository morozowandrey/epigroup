import React from "react";
import Contact from "./contact";
import styles from "./footer.module.scss";

export default function Footer() {
	const [state, setState] = React.useState({});

	return (
		<div className={`${styles.footer} wrapper`}>
			<Contact />
		</div>
	);
}
