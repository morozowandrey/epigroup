import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageMenu = (props) => {
	const [state, setState] = React.useState({});
	const { t, i18n } = useTranslation();

	const [values, setValues] = useState({
		language: "en",
		active: "en",
	});

	console.log(state.active);

	function handleChange(lang) {
		i18n.changeLanguage(lang);
		setState({ active: lang });

		setValues((oldValues) => ({
			...oldValues,
			[lang]: lang,
		}));
	}

	return (
		<div className="language-menu">
			<button
				className="language-menu__item"
				style={state.active === "ru" ? { color: "#fff" } : {}}
				onClick={(e) => handleChange("ru")}
			>
				Ru
			</button>
			<button
				className="language-menu__item"
				style={state.active === "en" ? { color: "#fff" } : {}}
				onClick={(e) => handleChange("en")}
			>
				Eng
			</button>
			{/* <button
				className="language-menu__item"
				style={state.active === "cze" ? { color: "#fff" } : {}}
				onClick={(e) => handleChange("cze")}
			>
				Cze
			</button> */}
		</div>
	);
};

export default LanguageMenu;
