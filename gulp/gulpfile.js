'use strict';

const gulp = require('gulp'),
  plugins = require('./gulp-plugins'),
  paths = require('./gulp-paths'),
  functions = require('./gulp-functions');

const isDevMode = functions.isDevMode();

/*
* Minifica as imagens e exporta elas para a pasta de destino
* 
*/
gulp.task('optimize-img', () => {
  return gulp.src(paths.src.img)
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(paths.dist.img));
});


/*
 * Transpila os arquivos scss e para css
 * 
*/
gulp.task('scss-to-css', () => {
  let objTheme = [];
  
  if (plugins.argv.theme !== undefined && paths.theme[plugins.argv.theme] !== undefined)
    objTheme.push(paths.theme[plugins.argv.theme]);
  else
    Object.keys(paths.theme).forEach((key) => {
      if (paths.theme[key].scss !== undefined) 
        objTheme.push(paths.theme[key]);
    });

  const tasks = objTheme.map((theme) => {
    return gulp.src(theme.scss.src)
      .pipe(isDevMode ? plugins.sourcemaps.init() : plugins.emptyPipe())
      .pipe(plugins.sass({ style: 'compact', sourcemap: true }).on('error', plugins.sass.logError))
      .pipe(plugins.cssImport())
      .pipe(isDevMode ? plugins.sourcemaps.write() : plugins.emptyPipe())
      .pipe(plugins.concat(theme.scss.filename))
      .pipe(isDevMode ? plugins.emptyPipe() : plugins.cssmin())
      .pipe(gulp.dest(theme.scss.dist !== undefined ? theme.scss.dist : paths.dist.css));
  });

  return plugins.merge(tasks);  
});

/*
 * Gulp Run Tasks
 * 
*/
gulp.task('dev', gulp.series('optimize-img', 'scss-to-css'));

gulp.task('prod', gulp.series('dev'));

gulp.task('watch', () => {
  gulp.watch(paths.src.scss, gulp.series('scss-to-css'));
});

gulp.task('default', gulp.series('dev', 'watch'));


/*
 * Compila os arquivos js
 * ==== (No modelo que está estruturada a aplicação da UOL não se compila arquivos js) ====
 * 
*/
/*
gulp.task('compile-js', () => {
  let objTheme = [];
  if (plugins.argv.theme !== undefined && paths.theme[plugins.argv.theme] !== undefined)
    objTheme.push(paths.theme[plugins.argv.theme]);
  else
    Object.keys(paths.theme).forEach((key) => {
      if (paths.theme[key].js !== undefined)
        objTheme.push(paths.theme[key]);
    });

  const tasks = objTheme.map((theme) => {
    return gulp.src(theme.js.src)
      .pipe(isDevMode ? plugins.sourcemaps.init() : plugins.emptyPipe())
      .pipe(plugins.concat(theme.js.filename))
      .pipe(theme.js.filename.indexOf('vendor') < 0 ? plugins.babel({ presets: ['@babel/env'] }) : plugins.emptyPipe())
      .pipe(isDevMode ? plugins.sourcemaps.write() : plugins.emptyPipe())
      .pipe(isDevMode || theme.js.filename.indexOf('vendor') >= 0 ? plugins.emptyPipe() : plugins.uglify())
      .pipe(gulp.dest(theme.js.dist !== undefined ? theme.js.dist : paths.dist.js));
  });

  return plugins.merge(tasks);
});
*/