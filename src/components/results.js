import React from "react";
import { useTranslation } from "react-i18next";

export default function Results() {
	const [state, setState] = React.useState({});
	const { t } = useTranslation();

	return (
		<div id="results" className="results">
			<div className="wrapper">
				<h2 className="results__title">{t("results.title")}</h2>
				<div className="results-content">
					<div className="results-content-box results-content-box_1">
						<div className="results-content-item">
							<p className="results-content-item__value results-content-item__value_1">
								{t("results.year.value")}
							</p>
							<p className="results-content-item__desc">
								{t("results.year.text")}
							</p>
						</div>
						<div className="results-content-item">
							<p className="results-content-item__value results-content-item__value_2">
								{t("results.projects.value")}
							</p>
							<p className="results-content-item__desc">
								{t("results.year.text")}
							</p>
						</div>
					</div>
					<div className="results-content-box results-content-box_2">
						<div className="results-content-item">
							<p className="results-content-item__value results-content-item__value_3">
								{t("results.clients.value")}
							</p>
							<p className="results-content-item__desc">
								{t("results.clients.text")}
							</p>
						</div>
						<div className="results-content-item results-content-item_last">
							<p className="results-content-item__value results-content-item__value_4">
								{t("results.countries.value")}
							</p>
							<p className="results-content-item__desc">
								{t("results.countries.text")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
