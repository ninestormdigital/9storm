const publicRoot = '..',
  root = `${publicRoot}`,
  paths = {
    src: `${root}/src`,
    dist: `${root}/assets`,
    js: 'js',
    css: 'css',
    scss: 'sass',
    img: 'images',
    fonts: []
  },
  vendor = [];

module.exports = {
  root,
  theme: {
    main: {
      scss: {
        src: `${paths.src}/${paths.scss}/main.scss`,
        dist: `${paths.dist}/${paths.css}`,
        filename: 'main.css' 
      }
    }
  },
  clonePathsAndFiles: [
    { src: `${paths.src}/vendors/**/*.css`, dist: `${paths.dist}/${paths.css}` }
  ],
  src: {
    root: paths.src,
    js: {
      all: `${paths.src}/${paths.js}/**/*.js`
    },
    css: `${paths.src}/${paths.css}/**/*.css`,
    scss: `${paths.src}/${paths.scss}/**/*.scss`,
    img: `${paths.src}/${paths.img}/**/*`,
    fonts: paths.fonts,
  },
  dist: {
    root: paths.dist,
    js: {
      all: `${paths.src}/${paths.js}`,
    },
    css: `${paths.dist}/${paths.css}`,
    img: `${paths.dist}/${paths.img}`,
    fonts: `${paths.dist}/fonts`,
  }
};