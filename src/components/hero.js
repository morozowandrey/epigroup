import React from "react";
import styles from "./hero.module.scss";
import CtaButton from "./cta.button";
import { useTranslation } from "react-i18next";

export default function Hero() {
	const [state, setState] = React.useState({});
	const { t, i18n } = useTranslation();

	let ln = i18n.language ? i18n.language : i18n.languages[1];

	return (
		<div id="hero" className="hero">
			<div className="wrapper">
				<h1 className="hero__title">
					{t("hero.title")}
					<span className="hero__line"></span>
				</h1>
				<CtaButton
					text={t("hero.cta")}
					url="/#contacts"
					textColor="blue"
				></CtaButton>
			</div>
		</div>
	);
}
