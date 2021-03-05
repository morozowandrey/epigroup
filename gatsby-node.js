const path = require('path')

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
  path,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ['node_modules'],
      alias: {
        TweenMax: 'gsap/dist/gsap.min.js',
        TimelineMax: 'gsap/dist/gsap.min.js',
        // Scrollbar: 'smooth-scrollbar/dist/smooth-scrollbar.js',
        // ScrollMagic: 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
        'animation.gsap':
          'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
        'debug.addIndicators':
          'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js',
      },
    },
  })
}
