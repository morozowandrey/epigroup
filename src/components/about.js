import React from "react";
import CtaButton from "./cta.button";
import { useTranslation } from "react-i18next";

export default function About() {
	const [state, setState] = React.useState({});
	const { t } = useTranslation();

	return (
		<div id="about" className="about flex-center">
			<div className="wrapper">
				<div className="about-content flex-between">
					<div className="about-content-box-1">
						<h2 className="about-content__title">
							{t("about.title")}
						</h2>

						<span className="about-cta_desk">
							<CtaButton
								text={t("about.cta")}
								url="/#contacts"
								textColor="white"
							></CtaButton>
						</span>
					</div>

					<div className="about-content-box-2">
						<p className="about-content__text">
							{t("about.text-1")}{" "}
							<span className="about-content__text_part about-content__text_part_1">
								{t("about.accent-text-1")}
							</span>{" "}
							<span className="about-content__text_part about-content__text_part_2">
								{t("about.accent-text-2")}
							</span>{" "}
							{t("about.text-2")}
						</p>
						<p className="about-content__text">
							{t("about.text-3")}
						</p>

						<span className="about-cta_mob">
							<CtaButton
								text={t("about.cta")}
								url="/#contacts"
								textColor="white"
							></CtaButton>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
