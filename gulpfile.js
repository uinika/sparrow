const Gulp = require("gulp"),
      Connect = require("gulp-connect"),
      Nodemon = require("gulp-nodemon"),
      Less = require("gulp-less"),
      Concat = require("gulp-concat"),
      UglifyJS = require("gulp-uglify"),
      MinifyCSS = require("gulp-clean-css"),
      MinHtml = require("gulp-htmlmin"),
      Replace = require("gulp-replace"),
      Compress = require("gulp-zip"),
      Moment = require("moment"),
      Delete = require("del");

/** gulp */
Gulp.task("default", () => {
 // less
 const lessSource = [
   "./artifact/snippets/global/*.less",
   "./artifact/snippets/snippets/*.less"
 ];
 const lessTarget = "./artifact/"; 
 const combine = () => {
    Gulp.src(lessSource)
      .pipe(Concat("bundle.css"))
      .pipe(Less())
      .pipe(Gulp.dest(lessTarget));
  };
  combine();
  Gulp.watch(lessSource, combine);
  // nodemon
  const serverSource = "./mock/server.js" 
  Nodemon({
    script: serverSource,
    execMap: {js: "node --harmony"},
    env: {"NODE_ENV": "development"}
  });
  // livereload
  const livereloadSource = [
    "./artifact/**/*.js",
    "./artifact/bundle.css",
    "./artifact/**/*.html",
  ];
  Connect.server({
    root: "artifact",
    port: 5001,
    livereload: true
  });
  Gulp.watch(livereloadSource , () => {
    Gulp.src(livereloadSource).pipe(
      Connect.reload()
    );
  });
});

/** gulp build */
Gulp.task("build", () => {
  const source = "./artifact/";
  const target = "./build/";
  // html
  Gulp.src([source + "snippets/**/*.html"])
    .pipe(MinHtml({collapseWhitespace: true}))
    .pipe(Gulp.dest(target + "/snippets"));
  // update index.html /<!--Start-->[\s\S]*<!--End-->/g
  Gulp.src([source + "index.html"])
    .pipe(Replace("bundles/scripts", "bundles/scripts.min"))
    .pipe(Replace("bundles/styles", "bundles/styles.min"))
    .pipe(Gulp.dest(target));
  // css
  Gulp.src([source + "snippets/**/*.less"])
    .pipe(Concat("styles.min.css"))
    .pipe(Less())
    .pipe(MinifyCSS({compatibility: "ie8"}))
    .pipe(Gulp.dest(target + "bundles"));
  // javascript
  Gulp.src([source + "snippets/**/*.js", source + "app.js"])
    .pipe(Concat("scripts.min.js"))
    .pipe(UglifyJS())
    .pipe(Gulp.dest(target + "bundles"));
  // image & fonts
  Gulp.src([source + "assets/**/*"])
    .pipe(Gulp.dest(target + "assets"));
  // library
  Gulp.src([source + "libraries/**/*"])
    .pipe(Gulp.dest(target + "/libraries"));
});

/** gulp release */
Gulp.task("release", ["build"], () => {
  let releaseTime = Moment().format("YYYY.MM.DD HH:mm:ss");
  let releaseName = "release " + releaseTime + ".zip";
  return Gulp.src("./build/**/*")
    .pipe(Compress(releaseName))
    .pipe(Gulp.dest("./release"));
});

/** gulp clean */
Gulp.task("clean", () => {
  Delete([
    "./release/**/*", "./build/**/*"
  ]);
});
