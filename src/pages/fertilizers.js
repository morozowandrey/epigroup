import React from "react";
import Layout from "../layout";
import PageHero from "../components/page-hero";
import Contact from "../components/contact";
import Header from "../components/header";
import { useTranslation } from "react-i18next";
import fertilizerImg from "../../static/fertilizer-page-bg.jpg";

const FertilizersPage = (props) => {
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
				background={fertilizerImg}
				modificatorClass={"page-hero_fertilizers"}
				title={"Энергетика"}
			/>
			<div className="page-header">
				<Header />
			</div>
			<div className="page">
				<div className="wrapper">
					<div className="page-content">
						<div className="page-content-description">
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

						<div className="page-content-blocks">
							<div className="page-content-blocks-group">
								<div
									className={
										state.isOpen1
											? "page-content-blocks-block_open"
											: "page-content-blocks-block"
									}
								>
									<header className="page-content-blocks-block-header flex-between">
										<p className="page-content-blocks-block-header__title">
											Азотные
										</p>

										<div className="input-group">
											<input
												type="checkbox"
												id="hidden-input"
												name="hidden-input"
												onChange={(e) =>
													toggleBlockOpen(1)
												}
											/>
											<label htmlFor="hidden-input"></label>
										</div>
									</header>

									<div className="page-content-blocks-block-content">
										<ul className="page-content-blocks-block-content-list">
											<li className="page-content-blocks-block-content-list__item">
												Концентрат рутиловый
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат ильменитовый
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат цирконовый
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат цирконовый
												порошкообразный
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат ставролитовый
											</li>
										</ul>
									</div>
								</div>
								<div
									className={
										state.isOpen2
											? "page-content-blocks-block_open"
											: "page-content-blocks-block"
									}
								>
									<header className="page-content-blocks-block-header flex-between">
										<p className="page-content-blocks-block-header__title">
											Азотные
										</p>

										<div className="input-group">
											<input
												type="checkbox"
												id="hidden-input2"
												name="hidden-input2"
												onChange={(e) =>
													toggleBlockOpen(2)
												}
											/>
											<label htmlFor="hidden-input2"></label>
										</div>
									</header>

									<div className="page-content-blocks-block-content">
										<ul className="page-content-blocks-block-content-list">
											<li className="page-content-blocks-block-content-list__item">
												Концентрат рутиловый
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат ильменитовый
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат цирконовый
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат цирконовый
												порошкообразный
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат ставролитовый
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="page-content-blocks-group">
								<div
									className={
										state.isOpen3
											? "page-content-blocks-block_open"
											: "page-content-blocks-block"
									}
								>
									<header className="page-content-blocks-block-header flex-between">
										<p className="page-content-blocks-block-header__title">
											Азотные
										</p>

										<div className="input-group">
											<input
												type="checkbox"
												id="hidden-input3"
												name="hidden-input3"
												onChange={(e) =>
													toggleBlockOpen(3)
												}
											/>
											<label htmlFor="hidden-input3"></label>
										</div>
									</header>

									<div className="page-content-blocks-block-content">
										<ul className="page-content-blocks-block-content-list">
											<li className="page-content-blocks-block-content-list__item">
												Концентрат рутиловый
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат ильменитовый
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат цирконовый
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат цирконовый
												порошкообразный
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат ставролитовый
											</li>
										</ul>
									</div>
								</div>
								<div
									className={
										state.isOpen4
											? "page-content-blocks-block_open"
											: "page-content-blocks-block"
									}
								>
									<header className="page-content-blocks-block-header flex-between">
										<p className="page-content-blocks-block-header__title">
											Азотные
										</p>

										<div className="input-group">
											<input
												type="checkbox"
												id="hidden-input4"
												name="hidden-input4"
												onChange={(e) =>
													toggleBlockOpen(4)
												}
											/>
											<label htmlFor="hidden-input4"></label>
										</div>
									</header>

									<div className="page-content-blocks-block-content">
										<ul className="page-content-blocks-block-content-list">
											<li className="page-content-blocks-block-content-list__item">
												Концентрат рутиловый
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат ильменитовый
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат цирконовый
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат цирконовый
												порошкообразный
											</li>
											<li className="page-content-blocks-block-content-list__item">
												Концентрат ставролитовый
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Contact />
		</div>
	);
};

export default FertilizersPage;
