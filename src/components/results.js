import React from "react";

export default function Results() {
	const [state, setState] = React.useState({});

	return (
		<div id="results" className="results">
			<div className="wrapper">
				<h2 className="results__title">Факты, цифры, результаты</h2>
				<div className="results-content">
					<div className="results-content-box results-content-box_1">
						<div className="results-content-item">
							<p className="results-content-item__value results-content-item__value_1">
								15+
							</p>
							<p className="results-content-item__desc">
								Лет на рынке
							</p>
						</div>
						<div className="results-content-item">
							<p className="results-content-item__value results-content-item__value_2">
								100+
							</p>
							<p className="results-content-item__desc">
								Успешных проектов
							</p>
						</div>
					</div>
					<div className="results-content-box results-content-box_2">
						<div className="results-content-item">
							<p className="results-content-item__value results-content-item__value_3">
								50+
							</p>
							<p className="results-content-item__desc">
								Партнеров и клиентов
							</p>
						</div>
						<div className="results-content-item results-content-item_last">
							<p className="results-content-item__value results-content-item__value_4">
								20+
							</p>
							<p className="results-content-item__desc">
								Стран по всему миру
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
