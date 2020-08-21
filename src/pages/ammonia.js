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
				background={ammoniaImg}
				modificatorClass={"page-hero_ammonia"}
				title={"Энергетика"}
			/>
			<div className="page-header">
				<Header />
			</div>
			<div className="page">
				<div className="wrapper">
					<div className="page-content">
						<div className="page-content-description page-content-description_standalone">
							<h3 className="page-content-description__title">
								Удобрения
							</h3>
							<p className="page-content-description__text">
								Наша компания предлагает широкий спектр
								удобрений для аграрной промышленности, который
								позволяет удовлетворить потребности клиентов в
								полном объеме.
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
