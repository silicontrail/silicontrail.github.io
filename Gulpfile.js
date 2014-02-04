var gulp = require('gulp')

    // live reloading
    // must have chrome plugin: http://goo.gl/p363XQ
    // TODO live reload without chrome plugin
  , watch = require('gulp-watch')
  , reload = require('gulp-livereload')
  , server = require('tiny-lr')() // create server

    // gulp plugins
  , uglify = require('gulp-uglify')
  , concat = require('gulp-concat')

    // y'arr trezur m'ap
  , paths = {
        scripts: './lib/js/**/*.js'
      , styles: './lib/css/**/*.css'
    }

gulp.task('scripts', function () {
  return gulp.src(paths.scripts)
    .pipe(watch({ name: 'scripts' }))
    .pipe(uglify({ outSourceMaps: true }))
    .pipe(concat('build.js'))
    .pipe(gulp.dest('.'))
    .pipe(reload(server))
})

gulp.task('styles', function () {
  return gulp.src(paths.styles)
    .pipe(watch({ name: 'styles' }))
    .pipe(gulp.dest('.'))
    .pipe(reload(server))
})

// live reload server
gulp.task('listen', ['scripts', 'styles'], function (next) {
  server.listen(35729, function (err) {
    if (err) return console.error(err)
    next()
  })
})

gulp.task('default', ['listen'])
