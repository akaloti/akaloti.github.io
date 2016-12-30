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
		.state('projects', {
			url: '/projects',
			templateUrl: '/projects.html',
			controller: 'ProjectsCtrl'
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

app.controller('MainCtrl', [
'$scope',
function($scope) {

}]);

app.controller('EducationCtrl', [
'$scope',
function($scope) {
	
}]);

app.controller('ProjectsCtrl', [
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
