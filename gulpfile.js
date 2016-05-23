// Modules
// --------------------------------------------------------- //
var gulp            = require('gulp'),
    gulpsync        = require('gulp-sync')(gulp),
    requireDir      = require('require-dir');


// Config & Paths
// --------------------------------------------------------- //
gulp.config = {
  compressed: true,
  format: 'default',
  localhost: '127.0.0.1',
  port: '3001'
};

gulp.paths = {
  default: {
    basePath: 'www/',
    scripts: 'src/js/**/*.js',
    scriptsDest: 'www/js',
    styles: 'src/css/**/*.sass',
    stylesDest: 'www/css',
    images: 'src/img/**/*.*',
    imagesDest: 'www/img',
    pages: 'src/**/*.pug',
    pagesDest: 'www/',
    fontsDest: 'www/fonts',
  }
};

gulp.paths = gulp.paths[gulp.config.format];


// Tasks
// --------------------------------------------------------- //
requireDir('gulp_tasks');


// Watch
// --------------------------------------------------------- //
gulp.task('watch',function(){
  gulp.watch(gulp.paths.styles, ['styles']);
  gulp.watch(gulp.paths.scripts, ['scripts']);
  gulp.watch(gulp.paths.pages, ['pages']);
  gulp.watch(gulp.paths.images, ['images']);
  gulp.task('reload');
});

// Build
gulp.task('build', gulpsync.sync([
  'clean',
  'styles',
  'scripts',
  'pages',
  'images',
  'libs'
  ])
);

// Default
gulp.task('default', gulpsync.sync([
  'build',
  'watch',
  'connect-sync'
  ])
);
