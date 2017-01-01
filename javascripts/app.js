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



/**
 * Custom type for storing data to be displayed for a specific project
 * preview panel.
 */
function ProjectPanelData(name, dateRangeStr, programmingLanguagesStr,
	testingFramework, otherLanguagesOrSoftwareStr, githubLink)
{
	this.name = name;
	this.dateRangeStr = dateRangeStr;
	this.programmingLanguagesStr = programmingLanguagesStr;
	this.testingFramework = testingFramework;
	this.otherLanguagesOrSoftwareStr = otherLanguagesOrSoftwareStr;
	this.githubLink = githubLink;
}

function getProjectPanelData()
{
	var projectPanelData = [];

	// The first data pushed in is displayed first
	projectPanelData.push(new ProjectPanelData(
		"2D Square Cannonade Desktop Game",
		"September 2016 - Current",
		"C++",
		"Catch",
		"SFML, Git",
		"https://github.com/aaronistheman/SFML-Square-Cannonade-Game/tree/develop"));
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
