import angular from 'angular';
import uirouter from 'angular-ui-router';

var mainModule = angular.module('app', [uirouter]);

import homeCtrl from './views/home/homeController.js';
import otherCtrl from './views/other/otherController.js';

mainModule.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home', {
		url:'/home',
		templateUrl:'views/home/home.html',
		controller:homeCtrl
	
	})
	.state('other', {
		url:'/other',
		templateUrl:'views/other/other.html',
		controller:otherCtrl

	});

	$urlRouterProvider.otherwise('/home');
})
.run(function($rootScope){
});

