import React from "react";
import Layout from "../layout";
import PageHero from "../components/page-hero";
import Contact from "../components/contact";
import Header from "../components/header";
import { useTranslation } from "react-i18next";
import ammoniaImg from "../../static/ammonia-page-bg.jpg";

const AmmoniaPage = (props) => {
	const [state, setState] = React.useState({});
	const { t, i18n } = useTranslation();

	return (
		<div className="page">
			<PageHero
				background={ammoniaImg}
				modificatorClass={"page-hero_ammonia"}
				title={t("ammoniaPage.title")}
			/>
			<div className="page-header">
				<Header />
			</div>
			<div className="page">
				<div className="wrapper">
					<div className="page-content">
						<div className="page-content-description page-content-description_standalone">
							<h3 className="page-content-description__title">
								{t("ammoniaPage.content.title")}
							</h3>
							<p className="page-content-description__text">
								{t("ammoniaPage.content.text")}
							</p>
						</div>
					</div>
				</div>
			</div>

			<Contact />
		</div>
	);
};

export default AmmoniaPage;
