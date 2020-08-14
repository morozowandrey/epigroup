import React from "react";
import styles from "./hero.module.scss";
import CtaButton from "./cta.button";
import { useTranslation } from "react-i18next";

export default function Hero() {
	const [state, setState] = React.useState({});
	const { t } = useTranslation();

	return (
		<div id="hero" className={`${styles.hero}`}>
			<div className={`wrapper`}>
				<h1 className={styles.heroTitle}>
					{t("hero.title")}
					<span className={styles.heroLine}></span>
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
