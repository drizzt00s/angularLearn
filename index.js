import angular from 'angular';
import uirouter from 'angular-ui-router';

var mainModule = angular.module('loginModule', [uirouter]);
mainModule.controller('userController', function($scope, $log){
	$scope.user = {name:'Fox'};

	$scope.updated = 0;

	$scope.$watch('user', function(newVal, oldVal){
		if(newVal == oldVal){
			return;
		}
		$scope.updated++;
	}, true);

});















