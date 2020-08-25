import React from "react";
import CtaButton from "./cta.button";
import TinySlider from "tiny-slider-react";
import { useTranslation } from "react-i18next";

// slider images
import ammoniaImg from "../../static/ammonia-slide.jpg";
import energyImg from "../../static/energy-slide.jpg";
import fertilizerImg from "../../static/fertilizer-slide.jpg";
import resoursesImg from "../../static/resourses-slide.jpg";
import { Link } from "gatsby";

export default function ActivitySlider() {
	const [state, setState] = React.useState({});
	const { t, i18n } = useTranslation();
	let ln = i18n.language ? i18n.language : i18n.languages[1];

	const activitiesSlides = t("activitieslider.slides");
	const activitiesSlidesImages = [
		energyImg,
		resoursesImg,
		fertilizerImg,
		ammoniaImg,
	];
	const setSliderLineWidth = (currConfig) => {
		let progressBar = document.getElementsByClassName(
			"activity-slider-controls-line__fill"
		)[0];
		let nextSlide;

		if (currConfig === true && typeof window !== `undefined`) {
			nextSlide = window.innerWidth < 1280 ? 1 : settings.items;
		} else if (currConfig.items == 2) {
			nextSlide = currConfig.displayIndex + 1;
		} else {
			nextSlide = currConfig.displayIndex;
		}

		let slideLength = activitiesSlides.length;
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
						<h2
							className={
								ln === "en"
									? "activity-content__title activity-content__title_en"
									: "activity-content__title"
							}
						>
							{t("activitieslider.title-1")} <br />{" "}
							{t("activitieslider.title-2")}
						</h2>
					</div>
					<div className="activity-content-box activity-content-box_2">
						<p className="activity-content__text">
							{t("activitieslider.text")}
						</p>
						<span className="activity-cta">
							<CtaButton
								text={t("activitieslider.cta")}
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
							{activitiesSlides.map((el, index) => (
								<div
									key={index}
									className="activity-slider-item"
								>
									<Link
										to={el.url}
										style={{
											textDecoration: "none",
										}}
									>
										<div
											className="activity-slider-item-content"
											style={{
												backgroundImage: `url(${activitiesSlidesImages[index]})`,
											}}
										>
											<p className="activity-slider-item__title">
												{el.title}
											</p>
											<p className="activity-slider-item__text">
												{el.text}
											</p>
										</div>
									</Link>
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
