import React from "react";
import { useTranslation } from "react-i18next";

export default function PageHero(props) {
	const [state, setState] = React.useState({});
	const { t, i18n } = useTranslation();
	let ln = i18n.language ? i18n.language : i18n.languages[1];

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
