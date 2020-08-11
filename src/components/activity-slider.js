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

	const onTransitionStartAction = (e) => {
		let el = document.getElementsByClassName(
			"activity-slider-controls-line__fill"
		)[0];
		el.className += " sliderAnim";
	};
	const onTransitionEndAction = (e) => {
		let el = document.getElementsByClassName(
			"activity-slider-controls-line__fill"
		)[0];
		el.className = el.className.replace(/\bsliderAnim\b/, "");
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
			// 768: {
			//   edgePadding: 120
			// },
			// 360: {
			//   edgePadding: 0
			// }
		},
	};

	let slidesRu = [
		{
			title: "Энергетика",
			text:
				"Наша команда имеет огромный опыт работы в разных сегментах энергетики, что позволяет нам понимать текущую ситуацию и тренды развития на рынках природного газа, нефти и угольной промышленности.",
			img: energyImg,
		},
		{
			title: "Полезные ископаемые и металлы",
			text:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod laudantium quae consequuntur voluptatum hic iste fugiat dolore vel accusamus ratione. Aspernatur assumenda ducimus autem!",
			img: resoursesImg,
		},
		{
			title: "Удобрения",
			text:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil sapiente, aut iure sed facilis eos optio incidunt labore, tenetur dolorum, nam fugiat molestias magnam hic.",
			img: fertilizerImg,
		},
		{
			title: "Aммиак",
			text:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sit facilis qui odio officia delectus laudantium beatae. Reprehenderit necessitatibus commodi sunt molestias",
			img: ammoniaImg,
		},
	];

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
