const path = require('path')

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
  path,
}) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    })
  }

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
