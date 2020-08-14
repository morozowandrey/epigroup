import i18next from "i18next";

i18next.init({
	fallbackLng: "en",
	resources: {
		ru: {
			translations: require("../locales/ru/translations.json"),
		},
		en: {
			translations: require("../locales/en/translations.json"),
		},
		cze: {
			translations: require("../locales/cze/translations.json"),
		},
	},
	ns: ["translations"],
	defaultNS: "translations",
	returnObjects: true,
	debug: process.env.NODE_ENV === "development",
	interpolation: {
		escapeValue: false, // not needed for react!!
	},
	react: {
		wait: true,
	},
});

i18next.languages = ["ru", "en", "cze"];

export default i18next;
