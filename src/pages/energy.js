import React from "react";
import Layout from "../layout";
import PageHero from "../components/page-hero";
import Contact from "../components/contact";
import Header from "../components/header";
import { useTranslation } from "react-i18next";
import energyImg from "../../static/energy-page-bg.jpg";
import Footer from "../components/footer";

const EnergyPage = (props) => {
	const [state, setState] = React.useState({});
	const { t, i18n } = useTranslation();

	const energyPageContentList = t("energyPage.content.list");

	return (
		<div className="page">
			<PageHero
				background={energyImg}
				title={t("energyPage.title")}
				modificatorClass={"page-hero_energy"}
			/>
			<div className="page-header">
				<Header />
			</div>
			<div className="page">
				<div className="wrapper">
					<div className="page-content">
						<div className="page-content-description page-content-description_standalone">
							<div className="page-content-description-block">
								<h3 className="page-content-description__title">
									{t("energyPage.content.title")}
								</h3>
								<p className="page-content-description__text">
									{t("energyPage.content.subtitle")}
								</p>
							</div>

							<div className="page-content-description-block">
								<p className="page-content-description__text page-content-description__text_mb">
									{t("energyPage.content.text")}
								</p>
								<ul className="page-content-blocks-block-content-list page-content-blocks-block-content-list_content">
									{energyPageContentList.map(
										(listItem, listItemIndex) => (
											<li
												className="page-content-blocks-block-content-list__item"
												key={listItemIndex}
											>
												{listItem}
											</li>
										)
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Contact />
			<Footer />
		</div>
	);
};

export default EnergyPage;
