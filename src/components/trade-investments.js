import React from "react";
import CtaButton from "./cta.button";
import TinySlider from "tiny-slider-react";

export default function TradeInvestments() {
	const [state, setState] = React.useState({});

	const slidesRu = [
		{
			title: "Если вы импортер",
			bullets: [
				"нет необходимости выводить оборотные средства",
				"доступ к low-cost финансированию",
				"возможность сотрудничать с поставщиками на наиболее выгодных условиях и по наиболее выгодным ценам",
				"отсутствие рисков не отгрузки поставщиком товара при оплате по договору",
			],
		},
		{
			title: "Если вы экспортер",
			bullets: [
				"гарантия оплаты отгруженного товара",
				"увеличение объема поставок",
				"расширение клиентской базы за счет более выгодных условий доставки и оплаты",
			],
		},
	];

	const setSliderLineWidth = (currConfig) => {
		let progressBar = document.getElementsByClassName(
			"investments-slider-controls-line__fill"
		)[0];
		let nextSlide;

		if (currConfig === true) {
			nextSlide = window.innerWidth < 1280 ? 1 : settings.items;
		} else if (currConfig.items == 2) {
			nextSlide = currConfig.displayIndex + 1;
		} else {
			nextSlide = currConfig.displayIndex;
		}

		let slideLength = slidesRu.length;
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
							EPI group — независимая трейдинговая компания
						</h2>

						<span className="investments-cta_desk">
							<CtaButton
								text="Узнать о нас больше"
								url="/#contacts"
								textColor="white"
							></CtaButton>
						</span>
					</div>

					<div className="investments-content-box investments-content-box_2">
						{window.innerWidth > 769 ? (
							<div className="">
								<div className="investments-content-listbox">
									<h3 className="investments-content-listbox__title">
										Если вы импортер
									</h3>
									<ul className="investments-content-listbox-list">
										<li className="investments-content-listbox-list__item">
											нет необходимости выводить оборотные
											средства
										</li>
										<li className="investments-content-listbox-list__item">
											доступ к low-cost финансированию
										</li>
										<li className="investments-content-listbox-list__item">
											возможность сотрудничать с
											поставщиками на наиболее выгодных
											условиях и по наиболее выгодным
											ценам
										</li>
										<li className="investments-content-listbox-list__item">
											отсутствие рисков не отгрузки
											поставщиком товара при оплате по
											договору
										</li>
									</ul>
								</div>
								<div className="investments-content-listbox">
									<h3 className="investments-content-listbox__title">
										Если вы экспортер
									</h3>
									<ul className="investments-content-listbox-list">
										<li className="investments-content-listbox-list__item">
											гарантия оплаты отгруженного товара
										</li>
										<li className="investments-content-listbox-list__item">
											увеличение объема поставок
										</li>
										<li className="investments-content-listbox-list__item">
											расширение клиентской базы за счет
											более выгодных условий доставки и
											оплаты
										</li>
									</ul>
								</div>
							</div>
						) : (
							<div className="investments-slider-wrapper">
								<div className="investments-slider">
									<TinySlider
										settings={settings}
										onTransitionEnd={onTransitionEndAction}
										onInit={setSliderLineWidth}
									>
										{slidesRu.map((el, index) => (
											<div
												key={index}
												className="investments-slider-item"
											>
												<div className="investments-content-listbox">
													<h3 className="investments-content-listbox__title">
														{el.title}
													</h3>

													<ul className="investments-content-listbox-list">
														{el.bullets.map(
															(
																bullet,
																index2
															) => (
																<li
																	key={index2}
																	className="investments-content-listbox-list__item"
																>
																	{bullet}
																</li>
															)
														)}
													</ul>
												</div>
											</div>
										))}
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
