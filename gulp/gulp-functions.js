const plugins = require('./gulp-plugins'),
  paths = require('./gulp-paths');

/*
 * Retorna se esta sendo executado em ambiente de Dev ou nao (true ou false)
 * 
*/
const isDevMode = () => process.env.NODE_ENV !== 'production';

module.exports = {
  isDevMode
};