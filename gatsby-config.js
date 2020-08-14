module.exports = {
	siteMetadata: {
		title: `EPI Group`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				// add relative path to your layout component
				component: `${__dirname}/src/layout.js`,
			},
		},
		{
			resolve: "gatsby-plugin-anchor-links",
			options: {
				offset: -50,
			},
		},
	],
};
