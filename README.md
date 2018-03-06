# Task Runners 101:

1st things 1st, I use the term solutions developer, because thats what developers are expected to provide.
IMO the best devs are the really lazy ones because they understand the following “Keep it DRY” or ” Don’t Repeat Yourself”.
If you encounter the same issue twice there had better not be a 3rd unless a process is being developed to alleviate it! Non-functional requirements and processes are the largest unnacounted for cause in project delays, cost over-runs and the leading cause of IT project scope creep. As an solutions developer it is your job to plan for and architecht solutions that mitigate this as much as possible.

Thats where task runners come in to help streamline processes, to run repetitive tasks faster, cleaner and cheaper. Task runners are toolkits that help you automate painful or time-consuming tasks in your development workflow. Platform-agnostic - Integrations are built into all major IDEs and people are using TR's with PHP, .NET, Node.js, Java, and other platforms.

What are the main ones?
Brunch.js, Gulp.js, Broccoli.js, Cake.js, Grunt.js

What can they do?

1) HTML cleanup/optimization (Speed up page loads)
2) JavaScript obfuscation (Base level security and speed up page loads)
3) JavaScript uglification. (Speed up page loads)
4) Evaluates JavaScript files for syntax errors and formatting issues
5) Live page reloads
6) CSS purification/minification (Speed up page loads)
7) CSS autoprefixing 
8) File concatenation
9) Directory management
10) Image Compression (Speed up page loads)
11) Push to Github
12) FTP to server
13) Generating sourcemaps.
14) and so much more to speed up and optimize your develpment pipeline.

We are going to be installing and using gulp.js for a quick example of html page optimization.

# TR-101 directory structure as follows:
Project Folder(TR-101)

tr-101/

|- dev/

   |- index.html
   
gulpfile.js

README.md

package.json

package-lock.json


*** ">>" means run this from the command terminal without the ">>" ***

# Some introduction
Install NODE.JS:
-- Install Node:
http://nodejs.org

--Open a command prompt and navigate to your project directory
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
--The gulp-htmlmin plug-in to minify html
--This will concat files by your operating systems newLine.
--The gulp-uglify plug-in to concat and compress js files.
--The run-sequence plug-in to run sequential commands.

# Install
Here are all of the commands to run(once Node is installed):

(Open a command prompt and navigate to the project directory)

********************** Command to install npm **********************
>>npm install

********************** Single line command to install all plugins ***************
>>npm install gulp gulp-cli gulp-htmlclean gulp-clean-css gulp-concat gulp-uglify run-sequence gulp-bump del gulp-remove-empty-lines gulp-clean gulp-htmlmin --save-dev

# Run
************************************************

--Open the index.html file in the dev directory.

--Notice the comments and empty lines

--Open the package.json file in the dev directory.

--Notice the version #


**********************Run the following command in the terminal***************
>>gulp publishtest


--Now open the test/index.html file with a text editor.

--Notice that there are no blanklines or comments.

--Notice that the contents are minified.

--Now open the package.json file in the project directory with a text editor.

--Notice that version # has been incremented.

**********************Run the following command in the terminal***************
>>gulp publishprod

--Now all of the files from the test directory are in the production folder ready for deployment.

************************************************
####Extra npm commands:
-Remove unused packages from the directory to keep things lean.

>>npm prune


************************************************

Part II: (Javascript Obfuscation)

https://github.com/mstatt/tr-102

Part III: (Live reload)

https://github.com/mstatt/tr-103

Part IV: (CSS File management)

https://github.com/mstatt/tr-104
************************************************



Helpful Link:
https://gist.github.com/renarsvilnis/ab8581049a3efe4d03d8
