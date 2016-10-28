const Gulp = require("gulp"),
      Connect = require('gulp-connect'),
      Nodemon = require('gulp-nodemon'),
      Less = require('gulp-less'),
      Concat = require('gulp-concat'),
      UglifyJS = require('gulp-uglify'),
      MinifyCSS = require('gulp-clean-css'),
      MinHtml = require('gulp-htmlmin'),
      Replace = require('gulp-replace'),
      Delete = require('del');

/** gulp */
Gulp.task('default', ['pack'], () => {
  const target = [
    './artifact/index.html',
    './artifact/components/**/*.html',
    './artifact/bundles/**/*'
  ];
  Connect.server({
    root: 'artifact',
    port: 5002,
    livereload: true
  });
  Gulp.watch(target, () => {
    Gulp.src(target)
      .pipe(Connect.reload());
  });
});

/** gulp pack */
Gulp.task('pack', () => {
  const server = './mock/server.js';
  const source = './artifact/components/';
  const target = './artifact/';
  Nodemon({
    script: server,
    execMap: {js: 'node --harmony'},
    env: {'NODE_ENV': 'development'}
  });
  const combine = () => {
    Gulp.src([source + '**/*.less'])
      .pipe(Concat('index.css'))
      .pipe(Less())
      .pipe(Gulp.dest(target));
  };
  combine();
  Gulp.watch([source + '**/*.less', source + 'app.js', source + '**/*.js'], combine);
});

/** gulp core */
Gulp.task('core', () => {
  Gulp.src(['./artifact/libraries/core/*.js'])
    .pipe(Concat('core.js'))
    .pipe(UglifyJS())
    .pipe(Gulp.dest('./artifact/libraries'));
})

/** gulp build */
Gulp.task('build', () => {
  const source = './artifact/';
  const target = './release/';
  // html
  Gulp.src([source + 'components/**/*.html'])
    .pipe(MinHtml({collapseWhitespace: true}))
    .pipe(Gulp.dest(target + '/components'));
  // update index.html /<!--Start-->[\s\S]*<!--End-->/g
  Gulp.src([source + 'index.html'])
    .pipe(Replace('bundles/scripts', 'bundles/scripts.min'))
    .pipe(Replace('bundles/styles', 'bundles/styles.min'))
    .pipe(Gulp.dest(target));
  // css
  Gulp.src([source + 'components/**/*.less'])
    .pipe(Concat('styles.min.css'))
    .pipe(Less())
    .pipe(MinifyCSS({compatibility: 'ie8'}))
    .pipe(Gulp.dest(target + 'bundles'));
  // javascript
  Gulp.src([source + 'components/**/*.js', source + 'app.js'])
    .pipe(Concat('scripts.min.js'))
    .pipe(UglifyJS())
    .pipe(Gulp.dest(target + 'bundles'));
  // image & fonts
  Gulp.src([source + 'assets/**/*'])
    .pipe(Gulp.dest(target + 'assets'));
  // library
  Gulp.src([source + 'libraries/**/*'])
    .pipe(Gulp.dest(target + '/libraries'));
});

/** gulp clean */
Gulp.task('clean', () => {
  Delete([
    './release/**/*'
  ]);
});
