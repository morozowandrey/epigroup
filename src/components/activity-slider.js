import React from "react";
import CtaButton from "./cta.button";

export default function ActivitySlider() {
	const [state, setState] = React.useState({});

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
				<div className="activity-slider"></div>
			</div>
		</div>
	);
}
