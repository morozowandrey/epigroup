import React from "react";
import CtaButton from "./cta.button";
import TinySlider from "tiny-slider-react";
import { useTranslation } from "react-i18next";

export default function TradeInvestments() {
	const [state, setState] = React.useState({});
	const { t } = useTranslation();

	const tradeInvestmentsSlides = t("tradeinvestments.slides");

	const setSliderLineWidth = (currConfig) => {
		let progressBar = document.getElementsByClassName(
			"investments-slider-controls-line__fill"
		)[0];
		let nextSlide;

		if (currConfig === true && typeof window !== `undefined`) {
			nextSlide = window.innerWidth < 1280 ? 1 : settings.items;
		} else if (currConfig.items == 2) {
			nextSlide = currConfig.displayIndex + 1;
		} else {
			nextSlide = currConfig.displayIndex;
		}

		let slideLength = tradeInvestmentsSlides.length;
		let progressLength = (nextSlide / slideLength) * 100 + "%";
		console.log("progressLength", progressLength, nextSlide / slideLength);
		progressBar.style.width = progressLength;
	};

	const onTransitionEndAction = (e) => {
		setSliderLineWidth(e);
	};

	const settings = {
		items: 1,
		slideBy: 1,
		mode: "carousel",
		mouseDrag: true,
		swipeAngle: 45,
		loop: true,
		lazyload: true,
		gutter: 0,
		speed: 1000,

		controls: true,
		nav: false,
		controlsContainer: ".investments-slider-controls",
	};

	return (
		<div className="investments">
			<div className="wrapper">
				<div className="investments-content flex-between">
					<div className="investments-content-box investments-content-box_1">
						<h2 className="investments-content__title">
							{t("tradeinvestments.title")}
						</h2>

						<span className="investments-cta_desk">
							<CtaButton
								text={t("tradeinvestments.cta")}
								url="/#contacts"
								textColor="white"
							></CtaButton>
						</span>
					</div>

					<div className="investments-content-box investments-content-box_2">
						{typeof window !== `undefined` &&
						window.innerWidth > 769 ? (
							<div className="">
								{tradeInvestmentsSlides.map((node, index1) => (
									<div
										key={index1}
										className="investments-content-listbox"
									>
										<h3 className="investments-content-listbox__title">
											{node.title}
										</h3>
										<ul className="investments-content-listbox-list">
											{node.arguments.map(
												(argument, index2) => (
													<li
														key={index2}
														className="investments-content-listbox-list__item"
													>
														{argument}
													</li>
												)
											)}
										</ul>
									</div>
								))}
							</div>
						) : (
							<div className="investments-slider-wrapper">
								<div className="investments-slider">
									<TinySlider
										settings={settings}
										onTransitionEnd={onTransitionEndAction}
										onInit={setSliderLineWidth}
									>
										{tradeInvestmentsSlides.map(
											(el, index) => (
												<div
													key={index}
													className="investments-slider-item"
												>
													<div className="investments-content-listbox">
														<h3 className="investments-content-listbox__title">
															{el.title}
														</h3>

														<ul className="investments-content-listbox-list">
															{el.arguments.map(
																(
																	argument,
																	index2
																) => (
																	<li
																		key={
																			index2
																		}
																		className="investments-content-listbox-list__item"
																	>
																		{
																			argument
																		}
																	</li>
																)
															)}
														</ul>
													</div>
												</div>
											)
										)}
									</TinySlider>
								</div>
								<div className="investments-slider-controls-wrapper">
									<div className="investments-slider-controls">
										<button className="investments-slider-controls__prev"></button>
										<button className="investments-slider-controls__next"></button>
									</div>
									<div className="investments-slider-controls-line">
										<span className="investments-slider-controls-line__fill"></span>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
