import React from "react";

export default function PageHero(props) {
	const [state, setState] = React.useState({});

	return (
		<div
			id="pagehero"
			className={`page-hero ${props.modificatorClass}`}
			style={{ backgroundImage: `url(${props.background})` }}
		>
			<div className="wrapper">
				<p className="page-hero__title">{props.title}</p>
			</div>
		</div>
	);
}
