import React from "react";
import CtaButton from "./cta.button";
import TinySlider from "tiny-slider-react";

// slider images
import ammoniaImg from "../../static/ammonia-slide.jpg";
import energyImg from "../../static/energy-slide.jpg";
import fertilizerImg from "../../static/fertilizer-slide.jpg";
import resoursesImg from "../../static/resourses-slide.jpg";

export default function ActivitySlider() {
	const [state, setState] = React.useState({});

	const slidesRu = [
		{
			title: "Энергетика",
			text:
				"Наша команда имеет огромный опыт работы в разных сегментах энергетики, что позволяет нам понимать текущую ситуацию и тренды развития на рынках природного газа, нефти и угольной промышленности.",
			img: energyImg,
		},
		{
			title: "Полезные ископаемые и металлы",
			text:
				"За счет диверсификации в географическом отношении и стратегических связей в различных странах с нами вы будете иметь возможность принимать участие в ограниченных, специализированных поставках полезных ископаемых, металлов и производной продукции",
			img: resoursesImg,
		},
		{
			title: "Удобрения",
			text:
				"Наша компания предлагает широкий спектр удобрений для аграрной промышленности, который позволяет удовлетворить потребности клиентов в полном объеме.",
			img: fertilizerImg,
		},
		{
			title: "Aммиак",
			text:
				"Мы предлагаем аммиак исключительно сертифицированного качества от надежных поставщиков, который соответствует самым высоким мировым стандартам качества.",
			img: ammoniaImg,
		},
	];

	const setSliderLineWidth = (currConfig) => {
		let progressBar = document.getElementsByClassName(
			"activity-slider-controls-line__fill"
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

	const onTransitionStartAction = (e) => {
		// let el = document.getElementsByClassName(
		// 	"activity-slider-controls-line__fill"
		// )[0];
		// el.className += " sliderAnim";
	};
	const onTransitionEndAction = (e) => {
		setSliderLineWidth(e);
		// progressBar.className = progressBar.className.replace(
		// 	/\bsliderAnim\b/,
		// 	""
		// );
	};

	const settings = {
		items: 2,
		slideBy: 2,
		mode: "carousel",
		mouseDrag: true,
		swipeAngle: 45,
		loop: true,
		lazyload: true,
		gutter: 64,
		speed: 1000,

		controls: true,
		nav: false,
		controlsContainer: ".activity-slider-controls",

		responsive: {
			1280: {
				items: 2,
				slideBy: 2,
				center: false,
				gutter: 64,
			},
			360: {
				items: 1,
				slideBy: 1,
				center: true,
				gutter: 0,
			},
		},
	};

	return (
		<div id="activity" className="activity">
			<div className="wrapper">
				<div className="activity-content flex-between">
					<div className="activity-content-box activity-content-box_1">
						<h2 className="activity-content__title">
							Основные направления <br /> сферы деятельности
						</h2>
					</div>
					<div className="activity-content-box activity-content-box_2">
						<p className="activity-content__text">
							Мощная научно-техническая база предприятия позволяет
							нам решать задачи любой сложности
						</p>
						<span className="activity-cta">
							<CtaButton
								text="Отправить запрос"
								url="/#contacts"
								textColor="blue"
							></CtaButton>
						</span>
					</div>
				</div>
				<div className="activity-slider-wrapper">
					<div className="activity-slider">
						<TinySlider
							settings={settings}
							onTransitionStart={onTransitionStartAction}
							onTransitionEnd={onTransitionEndAction}
							onInit={setSliderLineWidth}
						>
							{slidesRu.map((el, index) => (
								<div
									key={index}
									className="activity-slider-item"
								>
									<div
										className="activity-slider-item-content"
										style={{
											backgroundImage: `url(${el.img})`,
										}}
									>
										<p className="activity-slider-item__title">
											{el.title}
										</p>
										<p className="activity-slider-item__text">
											{el.text}
										</p>
									</div>
								</div>
							))}
						</TinySlider>
					</div>
					<div className="activity-slider-controls-wrapper">
						<div className="activity-slider-controls">
							<button className="activity-slider-controls__prev"></button>
							<button className="activity-slider-controls__next"></button>
						</div>
						<div className="activity-slider-controls-line">
							<span className="activity-slider-controls-line__fill"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
