import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
	const [state, setState] = React.useState({});
	const { t } = useTranslation();

	return (
		<div className="footer">
			<div className="flex-between wrapper">
				<img
					src="../../epi-group-logo_white.svg"
					alt="EPI Group logo"
					className="footer__logo"
				/>
				<div className="footer-links">
					<p className="footer-links__policy">
						{t("footer.license")}
					</p>
				</div>
			</div>
		</div>
	);
}
