import React from "react";
import styles from "./about.module.scss";

export default function About() {
	const [state, setState] = React.useState({});

	return (
		<div id="about" className={`${styles.about} wrapper`}>
			<h1>About</h1>
		</div>
	);
}
