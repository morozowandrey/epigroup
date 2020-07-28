import React from "react";
import styles from "./about.module.scss";
import CtaButton from "./cta.button";

export default function About() {
	const [state, setState] = React.useState({});

	return (
		<div id="about" className="about flex-center">
			<div className="about-content flex-between">
				<div className="about-content-box-1">
					<h2 className="about-content__title">
						EPI group — независимая трейдинговая компания
					</h2>

					<span className="about-cta_desk">
						<CtaButton
							text="Узнать о нас больше"
							url="/#contacts"
							textColor="white"
						></CtaButton>
					</span>
				</div>

				<div className="about-content-box-2">
					<p className="about-content__text">
						Мы работаем открыто, честно, прозрачно, предлагая
						надежное партнерство каждому заказчику. Главным
						приоритетом нашей деятельности является{" "}
						<span className="about-content__text_part">
							качество и ответственность
						</span>{" "}
						перед каждым нашим партнером.
					</p>
					<p className="about-content__text">
						EPI group предлагает исключительно сертифицированную
						продукцию от надежных поставщиков, которая соответствует
						самым высоким мировым стандартам качества.
					</p>

					<span className="about-cta_mob">
						<CtaButton
							text="Узнать о нас больше"
							url="/#contacts"
							textColor="white"
						></CtaButton>
					</span>
				</div>
			</div>
		</div>
	);
}
