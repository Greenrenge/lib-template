module.exports = {
  diff: true,
  extension: ['js'],
  package: './package.json',
  reporter: 'spec',
  slow: 75,
  timeout: 2000,
  ui: 'bdd',
  'watch-files': ['src/**/*.js', 'test/**/*.js'],
  'watch-ignore': ['src/vendor'],
  require: ['./test/setup.js', '@babel/register'],
}
