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
		.state('education', {
			url: '/education',
			templateUrl: '/education.html',
			controller: 'EducationCtrl'
		})
		.state('leadership', {
			url: '/leadership',
			templateUrl: '/leadership.html',
			controller: 'LeadershipCtrl'
		})
		.state('work', {
			url: '/work',
			templateUrl: '/work.html',
			controller: 'WorkCtrl'
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


/**
 * Custom type for storing data to be displayed for a specific project
 * preview panel.
 */
function ProjectPanelData(name, dateRangeStr, programmingLanguagesStr,
	testingFramework, otherLanguagesOrSoftwareStr, githubLink)
{
	// To catch errors early
	if (arguments.length != 6)
		failWithMessage("Invalid number of arguments");

	this.name = name;
	this.dateRangeStr = dateRangeStr;
	this.programmingLanguagesStr = programmingLanguagesStr;
	this.testingFramework = testingFramework;
	this.otherLanguagesOrSoftwareStr = otherLanguagesOrSoftwareStr;
	this.githubLink = githubLink;
}

var NO_TEST_FRAMEWORK = "";
function getProjectPanelData()
{
	var projectPanelData = [];

	// The first data pushed in is displayed first
	projectPanelData.push(new ProjectPanelData(
		"2D Square Cannonade Desktop Game",
		"September 2016 - Current",
		"C++",
		"Catch",
		"SFML 2.4.0, Git",
		"https://github.com/aaronistheman/SFML-Square-Cannonade-Game/tree/develop"));
	projectPanelData.push(new ProjectPanelData(
		"RateMyLabPartners.com (fake website)",
		"December 2016 - Current",
		"JavaScript",
		"(To be determined)",
		"MEAN framework (MongoDB/Mongoose, Express, AngularJS, Node.js)"
			+ ", Bootstrap, HTML/CSS, Git",
		"https://github.com/aaronistheman/MEAN-RateMyLabPartners/tree/develop"));
	projectPanelData.push(new ProjectPanelData(
		"Personal Webpage (the one you're looking at)",
		"December 2016 - Current",
		"JavaScript",
		NO_TEST_FRAMEWORK,
		"Bootstrap, AngularJS, Git",
		"https://github.com/aaronistheman/aaronistheman.github.io/tree/develop"));
	projectPanelData.push(new ProjectPanelData(
		"Simplified Economic Model",
		"June - September 2016",
		"JavaScript",
		"QUnit",
		"HTML/CSS, Git",
		"https://github.com/aaronistheman/Supply-Demand-Graph-Calculations"));
	projectPanelData.push(new ProjectPanelData(
		"2D Spacecraft Android Game",
		"December 2015 - April 2016",
		"Java",
		"JUnit and Android extensions",
		"Android Studio, Autodesk Inventor, Git",
		"https://github.com/aaronistheman/Android-Spacecraft-Game"));
	projectPanelData.push(new ProjectPanelData(
		"State Capital Quiz Android App",
		"December 2015",
		"Java",
		"JUnit and Android extensions",
		"Android Studio, Git",
		"https://github.com/aaronistheman/Android-State-Capitals-App"));
	projectPanelData.push(new ProjectPanelData(
		"Chat Web Application",
		"December 2015",
		"PHP (back-end), JavaScript (front-end)",
		NO_TEST_FRAMEWORK,
		"MySQL, JSON, HTML/CSS, Git",
		"https://github.com/aaronistheman/PHP-Trivial-Chat-Web-Application"));
	projectPanelData.push(new ProjectPanelData(
		"Game Show Web Game",
		"September - November 2015",
		"JavaScript",
		"QUnit",
		"HTML (Canvas), CSS, Git",
		"https://github.com/aaronistheman/Deal-or-Smarter-Than-a-Millionaire-SpongeBob-Edition"));
	projectPanelData.push(new ProjectPanelData(
		"BS Card Web Game",
		"August - September 2015",
		"JavaScript",
		"QUnit",
		"HTML/CSS, Git",
		"https://github.com/aaronistheman/BS-Card-Web-Game"));
	projectPanelData.push(new ProjectPanelData(
		"Tanks Desktop Game",
		"July - August 2014",
		"C++",
		NO_TEST_FRAMEWORK,
		"SFML 2.1, Git",
		"https://github.com/aaronistheman/Tanks"));
	projectPanelData.push(new ProjectPanelData(
		"Tic Tac Toe with GUI",
		"April 2014",
		"C++",
		NO_TEST_FRAMEWORK,
		"SFML 2.1",
		"https://github.com/aaronistheman/Tic-Tac-Toe-with-GUI"));
	projectPanelData.push(new ProjectPanelData(
		"Checkers with GUI",
		"Summer of 2013",
		"C++",
		NO_TEST_FRAMEWORK,
		"SFML 2.0",
		"https://github.com/aaronistheman/Checkers-with-GUI"));

	return projectPanelData;
}



app.controller('MainCtrl', [
'$scope',
function($scope) {
	$scope.projectPanelData = getProjectPanelData();
}]);

app.controller('EducationCtrl', [
'$scope',
function($scope) {
	
}]);

app.controller('LeadershipCtrl', [
'$scope',
function($scope) {
	
}]);

app.controller('WorkCtrl', [
'$scope',
function($scope) {
	
}]);

app.controller('DevelopmentProcessCtrl', [
'$scope',
function($scope) {
	
}]);
