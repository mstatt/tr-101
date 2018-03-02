//Plugins and requires
var gulp = require('gulp');
var bump = require('gulp-bump');
var runSequence = require('run-sequence');
var clearlines = require('gulp-remove-empty-lines');

//Set up Paths
var DEV_PATH = 'dev/';
var TEST_PATH = 'test/';
var PROD_PATH = 'prod/';


//Build the test directory structure and files
gulp.task('buildtest', function() {
  console.log('Building test directory');
  return gulp.src(DEV_PATH + '**/*')
    .pipe( gulp.dest(TEST_PATH))
});

//Clean up Html
gulp.task('indexcleanup', function () {
  console.log('Cleaning up index.html.');
  gulp.src(TEST_PATH + 'index.html')
  .pipe(clearlines({
    removeComments: true
  }))
  .pipe(gulp.dest(TEST_PATH));
});

//Update the version in package.json
gulp.task("bump", function () {
  console.log('Updating the buid version.');
    return gulp.src("./package.json")
        .pipe(bump({ type: "minor" }))
        .pipe(gulp.dest("./"));
});

//In sequence build the test directory, clean up index.html and update version # in the package.json
//publishtest
gulp.task('publishtest',function (){
console.log('Starting to Publish test files..............');
runSequence('buildtest','indexcleanup','bump');
console.log('Completed publishing test files..............');
});