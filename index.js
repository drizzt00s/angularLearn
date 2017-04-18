import angular from 'angular';
import uirouter from 'angular-ui-router';
import homeRoute from './views/home/homeController';
import otherRoute from './views/other/otherController';

var mainModule = angular.module('app', [uirouter]);

homeRoute();
otherRoute();

mainModule.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home', {
		url:'/home',
		templateUrl:'views/home/home.html',
		controller:'homeCtl'
	
	})
	.state('other', {
		url:'/other',
		templateUrl:'views/other/other.html',
		controller:'otherCtl'
	});

	$urlRouterProvider.otherwise('/other');
})

.run(function($rootScope){
});

