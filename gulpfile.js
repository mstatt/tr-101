//Plugins and requires
var gulp = require('gulp');
var bump = require('gulp-bump');
 clean = require('gulp-clean');
var runSequence = require('run-sequence');
var clearlines = require('gulp-remove-empty-lines');

//Set up Paths
var DEV_PATH = 'dev/';
var TEST_PATH = 'test/';
var PROD_PATH = 'prod/';


//Clean Test Directories
gulp.task('cleantest', function () {
  console.log('Cleaning Up files and directories');
    return gulp.src(TEST_PATH, {read: false})
        .pipe(clean());
});

//Clean Prod Directories
gulp.task('cleanprod', function () {
  console.log('Cleaning Up files and directories');
    return gulp.src(PROD_PATH, {read: false})
        .pipe(clean());
});

//Build the test directory structure and files
gulp.task('buildtest', function() {
  console.log('Building test directory');
  return gulp.src(DEV_PATH + '**/*')
    .pipe( gulp.dest(TEST_PATH))
});


////Build the prod directory structure and files from test
gulp.task('buildprod', function() {
  console.log('Building production directory');
  return gulp.src(TEST_PATH + '**/*')
    .pipe( gulp.dest(PROD_PATH))
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
runSequence('cleantest','buildtest','indexcleanup','bump');
console.log('Completed publishing test files..............');
});

//Publish files from test to prod
//publishprod
gulp.task('publishprod',function (){
console.log('Starting to Publish production files..............');
runSequence('cleanprod','buildprod');
console.log('Completed publishing production files..............');
});