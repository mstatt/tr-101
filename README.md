# tr-101
1st things 1st, I use the term solutions developer, because thats what developers are expected to provide.
IMO the best devs are the really lazy ones because they understand the following “Keep it DRY” or ” Don’t Repeat Yourself”.
If you encounter the same issue twice there had better not be a 3rd unless a process is being developed to alleviate it!

Thats where task runners come in, to run repetitive tasks faster, cleaner and cheaper.

What are the main ones?
Brunch.js, Gulp.js, Broccoli.js, Cake.js, Grunt.js

What can they do?

0) Live page reloads during development.
1) Image compression
2) File reduction
3) File compression
4) Push to git
5) FTP up to a server
6) Autoprefixes css
7) HTML cleanup

Set up your directory structure as follows:
****************************************************
Project Folder(TR-101)

-test

-prod

-dev

--index.html

--css

--js

--img

--assets


*** ">>" means run this from the command terminal without the ">>" ***

Install NODE.JS:
****************************************************
-- Install Node:
http://nodejs.org

--CMD to the working directory:
--open a command prompt and navigate to your project directory
##--npm install
-Initialize npm (You can skip this as you already have the package.json file)
##--npm init 
**(You can answer the questions asked, if you do not know the answer just hit the enter key)**
****This will create a package.json file in the Project directory****
--Install Gulp
--The --save-dev flag adds the package to your developer dependency list,
--This is a list of dependencies that you need only for developing the package.
--Add task plug-ins
--The htmlclean plug-in cleans all comments out of your templates by default.
--The htmlclean plug-in to minify CSS
--This will concat files by your operating systems newLine.
--The gulp-uglify plug-in to concat and compress js files.
--The run-sequence plug-in to run sequential commands.


Here are all of the commands to run(once Node is installed):

(Open a command prompt and navigate to the project directory)
>>npm install

//----------Single line command to install all plugins-------------//

>>npm install gulp gulp-htmlclean gulp-clean-css gulp-concat gulp-uglify run-sequence gulp-bump del gulp-remove-empty-lines --save-dev

Now open your gulpfile.js with a text editor (Ensure that the following is included):
******************** Below this line****************
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
******************** Above this line****************
--Save the gulp file.

************************************************

--Open the index.html file in the dev directory.
--Notice the comments and empty lines

--Open the package.json file in the dev directory.
--Notice the version #


**********************Run the following command in the terminal***************
>>gulp publishtest


--Now open the index.html file in the test directory with a text editor.
--Notice that there are no blanklines or comments.

--Now open the package.json file in the project directory with a text editor.
--Notice that version # has been incremented.

************************************************
####Extra npm commands:
-Remove unused packages

npm prune


************************************************
Helpful Link:
https://gist.github.com/renarsvilnis/ab8581049a3efe4d03d8
