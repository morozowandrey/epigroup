import React from "react";

export default function Footer() {
	const [state, setState] = React.useState({});

	return (
		<div className="footer flex-between wrapper">
			<img
				src="../../epi-group-logo_white.svg"
				alt="EPI Group logo"
				className="footer__logo"
			/>
			<div className="footer-links">
				<p className="footer-links__policy">© 2020 EPI GROUP s.r.o</p>
			</div>
		</div>
	);
}
