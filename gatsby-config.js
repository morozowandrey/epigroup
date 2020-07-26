module.exports = {
	siteMetadata: {
		title: `EPI Group`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		{
			resolve: "gatsby-plugin-anchor-links",
			options: {
				offset: -50,
			},
		},
	],
};
