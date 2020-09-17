"use strict";

var app = angular.module('personalWebpage', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		})
		.state('leadership', {
			url: '/leadership',
			templateUrl: '/leadership.html',
			controller: 'LeadershipCtrl'
		})
		.state('development-process', {
			url: '/development-process',
			templateUrl: '/development-process.html',
			controller: 'DevelopmentProcessCtrl'
		});

	// default template
	$urlRouterProvider.otherwise('home');
}]);


// Causes the program to fail and creates an alert
// showing the message
function failWithMessage(message)
{
	message = "Error: " + message;
	alert(message);
	throw message;
}



// The given width and height are what the image should be SHRINKED
// to (or EXPANDED, but beware of image resolution)
function ImageData(src, width, height)
{
	this.src = src;
	this.width = width;
	this.height = height;
}

/**
 * Custom type for storing data to be displayed for a specific project
 * preview panel.
 */
function ProjectPanelData(name, dateRangeStr, programmingLanguagesStr,
	testingFramework, otherLanguagesOrSoftwareStr,
	funNote, biggestChallenge, biggestRegret,
	bigProjectStatus,
	imageData,
	githubLink)
{
	// To catch errors early
	if (arguments.length != 11)
		failWithMessage("Invalid number of arguments");

	this.name = name;
	this.dateRangeStr = dateRangeStr;
	this.programmingLanguagesStr = programmingLanguagesStr;
	this.testingFramework = testingFramework;
	this.otherLanguagesOrSoftwareStr = otherLanguagesOrSoftwareStr;

	this.funNote = funNote;
	this.biggestChallenge = biggestChallenge;
	this.biggestRegret = biggestRegret;

	this.bigProjectStatus = bigProjectStatus;

	if (!(imageData instanceof ImageData))
		failWithMessage("Improper ImageData for project with name: " + name);
	this.imageData = imageData;

	this.githubLink = githubLink;
}

var NO_TEST_FRAMEWORK = "";

var NO_FUN_NOTE = false;
var NO_BIGGEST_CHALLENGE = false;
var NO_BIGGEST_REGRET = false;

var IS_BIG_PROJECT = "big-project"; 	// the CSS class indicating big project
var IS_NOT_BIG_PROJECT = ""; 	// indicates no CSS class

var NO_IMAGE_YET = new ImageData("images/no-image-yet.JPG", 696, 465);
var NO_GITHUB_REPO = "";

function getProjectPanelData()
{
	var projectPanelData = [];

	// The first data pushed in is displayed first
	projectPanelData.push(new ProjectPanelData(
		"RateMyLabPartners.com (fake website)",
		"December 2016, March 2017",
		"JavaScript",
		NO_TEST_FRAMEWORK,
		"MEAN framework (MongoDB/Mongoose, Express, AngularJS, Node.js)"
			+ ", Bootstrap, HTML/CSS, Git",
		NO_FUN_NOTE,
		NO_BIGGEST_CHALLENGE,
		NO_BIGGEST_REGRET,
		IS_NOT_BIG_PROJECT,
		new ImageData("images/rate-my-lab-partner.JPG", 575, 318),
		"https://github.com/akaloti/MEAN-RateMyLabPartners/tree/develop"));
	projectPanelData.push(new ProjectPanelData(
		"Personal Webpage (the one you're looking at)",
		"December 2016",
		"JavaScript",
		NO_TEST_FRAMEWORK,
		"Bootstrap, AngularJS, Git",
		"The photo for this project's panel was made with eight screenshots.",
		"Finding a photo of myself that I thought was webpage-worthy :-)",
		"Not using a CSS variable framework.",
		IS_NOT_BIG_PROJECT,
		new ImageData("images/personal-webpage.png", 683, 384),
		"https://github.com/akaloti/akaloti.github.io/tree/develop"));
	projectPanelData.push(new ProjectPanelData(
		"2D Square Cannonade Desktop Game (unfinished)",
		"September 2016 - December 2016",
		"C++",
		"Catch",
		"SFML 2.4.0, Git",
		"I was aware that the Boost library had an implementation of "
			+ "the A* algorithm, but I wanted to code my own implementation "
			+ " because I was curious about the process of doing so.",
		"Implementing the A* algorithm. I faced some of the trickiest bugs "
			+ "that I could ever recall facing.",
		NO_BIGGEST_REGRET,
		IS_BIG_PROJECT,
		new ImageData("images/square-cannonade.JPG", 1209, 633),
		"https://github.com/akaloti/SFML-Square-Cannonade-Game/tree/develop"));
	projectPanelData.push(new ProjectPanelData(
		"Simplified Economic Model",
		"June - September 2016",
		"JavaScript",
		"QUnit",
		"HTML/CSS, Git",
		"My first attempt at integration testing.",
		"Switching from my first (bad) approach to the MVC format.",
		NO_BIGGEST_REGRET,
		IS_BIG_PROJECT,
		new ImageData("images/economics.png", 443, 317),
		"https://github.com/akaloti/Supply-Demand-Graph-Calculations"));
	projectPanelData.push(new ProjectPanelData(
		"Shift/Runs Interface Project",
		"April - May 2016",
		"Python (back-end), JavaScript (front-end)",
		"unittest (\"PyUnit\") and Django's extensions",
		"Django, HTML/CSS, Git",
		NO_FUN_NOTE,
		NO_BIGGEST_CHALLENGE,
		"When I made this project, I didn't know Django had support for forms"
			+ " as part of the framework, so I ended up implementing a lot"
			+ " of form logic that I shouldn't have... Always check the docs!",
		IS_NOT_BIG_PROJECT,
		new ImageData("images/shift-project.JPG", 407, 354),
		NO_GITHUB_REPO));
	projectPanelData.push(new ProjectPanelData(
		"2D Spacecraft Android Game (\"Outer Space Legion\")",
		"December 2015 - April 2016",
		"Java",
		"JUnit and Android extensions",
		"Android Studio, Autodesk Inventor, Git",
		NO_FUN_NOTE,
		"Using an additional thread for the input,"
			+ " because the thread-related bugs were tricky.",
		"That the enemy entities spawn at random spots (once the player "
			+ "has progressed enough through a given level). This made the "
			+ "game too luck-dependent, in my opinion.",
		IS_BIG_PROJECT,
		new ImageData("images/outer-space-legion.png", 180, 320),
		"https://github.com/akaloti/Android-Spacecraft-Game"));
	projectPanelData.push(new ProjectPanelData(
		"State Capital Quiz Android App",
		"December 2015",
		"Java",
		"JUnit and Android extensions",
		"Android Studio, Git",
		NO_FUN_NOTE,
		NO_BIGGEST_CHALLENGE,
		NO_BIGGEST_REGRET,
		IS_NOT_BIG_PROJECT,
		new ImageData("images/state-capitals-quiz.png", 683, 384),
		"https://github.com/akaloti/Android-State-Capitals-App"));
	projectPanelData.push(new ProjectPanelData(
		"Chat Web Application",
		"December 2015",
		"PHP (back-end), JavaScript (front-end)",
		NO_TEST_FRAMEWORK,
		"MySQL, JSON, HTML/CSS, Git",
		"My first web project involving a back-end.",
		NO_BIGGEST_CHALLENGE,
		NO_BIGGEST_REGRET,
		IS_NOT_BIG_PROJECT,
		new ImageData("images/trivial-chat.jpg", 548, 308),
		"https://github.com/akaloti/PHP-Trivial-Chat-Web-Application"));
	projectPanelData.push(new ProjectPanelData(
		"Game Show Web Game",
		"September - November 2015",
		"JavaScript",
		"QUnit",
		"HTML (Canvas), CSS, Git",
		"This game is a fusion of 'Deal or No Deal',"
			+ " 'Are You Smarter Than a 5th Grader?',"
			+ " and 'Who Wants to Be a Millionaire?'.",
		NO_BIGGEST_CHALLENGE,
		"Violating the 'Don't Repeat Yourself' principle repeatedly, by not"
			+ " reusing certain JavaScript custom types that I wrote.",
		IS_BIG_PROJECT,
		new ImageData("images/game-show-fusion.png", 683, 384),
		"https://github.com/akaloti/Deal-or-Smarter-Than-a-Millionaire-SpongeBob-Edition"));
	projectPanelData.push(new ProjectPanelData(
		"BS Card Web Game",
		"August - September 2015",
		"JavaScript",
		"QUnit",
		"HTML/CSS, Git",
		NO_FUN_NOTE,
		NO_BIGGEST_CHALLENGE,
		"Designing the project in a multiplayer-unfriendly way.",
		IS_NOT_BIG_PROJECT,
		new ImageData("images/bs.jpg", 640, 360),
		"https://github.com/akaloti/BS-Card-Web-Game"));
	projectPanelData.push(new ProjectPanelData(
		"Tanks Desktop Game",
		"July - August 2014",
		"C++",
		NO_TEST_FRAMEWORK,
		"SFML 2.1, Git",
		"To make each tank sprite, I created a 3D model of the tank with"
			+ " Autodesk Inventor. Then I rotated the tank to get a view"
			+ " from above, took a screenshot, and edited it.",
		NO_BIGGEST_CHALLENGE,
		NO_BIGGEST_REGRET,
		IS_BIG_PROJECT,
		new ImageData("images/tanks.JPG", 541, 304),
		"https://github.com/akaloti/Tanks"));
	projectPanelData.push(new ProjectPanelData(
		"Tic Tac Toe with GUI",
		"April 2014",
		"C++",
		NO_TEST_FRAMEWORK,
		"SFML 2.1",
		"This was the third (of four times) that I tried to program "
			+ "tic-tac-toe, for whatever reason.",
		NO_BIGGEST_CHALLENGE,
		NO_BIGGEST_REGRET,
		IS_NOT_BIG_PROJECT,
		new ImageData("images/tic-tac-toe.JPG", 658, 318),
		"https://github.com/akaloti/Tic-Tac-Toe-with-GUI"));
	projectPanelData.push(new ProjectPanelData(
		"Checkers with GUI",
		"Summer of 2013",
		"C++",
		NO_TEST_FRAMEWORK,
		"SFML 2.0",
		"My first personal project that had over 1000 lines of code.",
		NO_BIGGEST_CHALLENGE,
		NO_BIGGEST_REGRET,
		IS_BIG_PROJECT,
		new ImageData("images/checkers.jpg", 612, 408),
		"https://github.com/akaloti/Checkers-with-GUI"));

	return projectPanelData;
}



var NAVBAR_HOME_ID = "#navbar-home";
var NAVBAR_LEADERSHIP_ID = "#navbar-leadership";
var NAVBAR_DEVELOPMENT_PROCESS_ID = "#navbar-development-process";
var NAVBAR_UNORDERED_LIST_ID = "#navbar-unordered-list";

function makeAllNavbarButtonsInactive()
{
	$(NAVBAR_UNORDERED_LIST_ID).children().removeClass("active");
}

app.controller('MainCtrl', [
'$scope',
function($scope) {
	$scope.projectPanelData = getProjectPanelData();
	$scope.NO_TEST_FRAMEWORK = NO_TEST_FRAMEWORK;
	// $scope.NO_FUN_NOTE = NO_FUN_NOTE;
	// $scope.NO_BIGGEST_CHALLENGE = NO_BIGGEST_CHALLENGE;
	// $scope.NO_BIGGEST_REGRET = NO_BIGGEST_REGRET;
	$scope.NO_GITHUB_REPO = NO_GITHUB_REPO;

	makeAllNavbarButtonsInactive();
	$(NAVBAR_HOME_ID).addClass("active");
}]);

app.controller('LeadershipCtrl', [
'$scope',
function($scope) {
	makeAllNavbarButtonsInactive();
	$(NAVBAR_LEADERSHIP_ID).addClass("active");
}]);

app.controller('DevelopmentProcessCtrl', [
'$scope',
function($scope) {
	makeAllNavbarButtonsInactive();
	$(NAVBAR_DEVELOPMENT_PROCESS_ID).addClass("active");
}]);
