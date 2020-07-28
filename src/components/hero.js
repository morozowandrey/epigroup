import React from "react";
import styles from "./hero.module.scss";
import CtaButton from "./cta.button";

export default function Hero() {
	const [state, setState] = React.useState({});

	return (
		<div id="hero" className={`${styles.hero}`}>
			<div className={`wrapper`}>
				<h1 className={styles.heroTitle}>
					Мы знаем как добиться максимальной прибыли при проведении
					взаимно успешных торговых сделок
					<span className={styles.heroLine}></span>
				</h1>
				<CtaButton
					text="Отправить запрос"
					url="/#contacts"
					textColor="blue"
				></CtaButton>
			</div>
		</div>
	);
}
