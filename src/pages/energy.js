import React from "react";
import Layout from "../layout";
import PageHero from "../components/page-hero";
import Contact from "../components/contact";
import Header from "../components/header";
import { useTranslation } from "react-i18next";
import energyImg from "../../static/energy-page-bg.jpg";

const EnergyPage = (props) => {
	const [state, setState] = React.useState({});
	const { t, i18n } = useTranslation();

	function toggleBlockOpen(val) {
		if (val === 1) {
			setState({
				isOpen1: !state.isOpen1,
				isOpen2: state.isOpen2,
				isOpen3: state.isOpen3,
				isOpen4: state.isOpen4,
			});
		} else if (val === 2) {
			setState({
				isOpen1: state.isOpen1,
				isOpen2: !state.isOpen2,
				isOpen3: state.isOpen3,
				isOpen4: state.isOpen4,
			});
		} else if (val === 3) {
			setState({
				isOpen1: state.isOpen1,
				isOpen2: state.isOpen2,
				isOpen3: !state.isOpen3,
				isOpen4: state.isOpen4,
			});
		} else if (val === 4) {
			setState({
				isOpen1: state.isOpen1,
				isOpen2: state.isOpen2,
				isOpen3: state.isOpen3,
				isOpen4: !state.isOpen4,
			});
		}
	}

	return (
		<div className="page">
			<PageHero
				background={energyImg}
				title={"Энергетика"}
				modificatorClass={"page-hero_energy"}
			/>
			<div className="page-header">
				<Header />
			</div>
			<div className="page">
				<div className="wrapper">
					<div className="page-content">
						<div className="page-content-description page-content-description_standalone">
							<div className="">
								<h3 className="page-content-description__title">
									Энергетика
								</h3>
								<p className="page-content-description__text">
									Наша команда имеет огромный опыт работы в
									разных сегментах энергетики, что позволяет
									нам понимать текущую ситуацию и тренды
									развития на рынках природного газа, нефти и
									угольной промышленности.
								</p>
							</div>
							<div className="">
								<p className="page-content-description__text page-content-description__text_mb">
									Наш опыт является гарантией конкурентных
									условий поставки энергоресурсов нашим
									клиентам.
								</p>
								<ul className="page-content-blocks-block-content-list page-content-blocks-block-content-list_content">
									<li className="page-content-blocks-block-content-list__item">
										выгодные условия сотрудничества
									</li>
									<li className="page-content-blocks-block-content-list__item">
										мировые стандарты качества
									</li>
									<li className="page-content-blocks-block-content-list__item">
										беспрерывная и эффективная работа
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Contact />
		</div>
	);
};

export default EnergyPage;
