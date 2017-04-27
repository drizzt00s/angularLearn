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
	console.log('main module runs');
})
.controller('calcContoller', function($scope){
	$scope.price = 12;
	$scope.num = 1;

	$scope.totalPrice = function(){
		return $scope.price * $scope.num;
	};

	$scope.totalPrice2 = $scope.price * $scope.num;

	$scope.$watch('price', function(newVal, oldVal){
		$scope.totalPrice2 = newVal * $scope.num;
	});
	$scope.$watch('num', function(newVal, oldVal){
		$scope.totalPrice2 = newVal * $scope.price;
	});
})
.controller('userController', function($scope, $log){
	$scope.name = 'admin';
	$scope.pword = '123456';

	$log.info('userController->name:' + $scope.name);
	$log.info('userController->pword:' + $scope.pword);

})
.controller('infoController', function($scope, $log){
	$scope.love = '足球';

	$log.info('infoController->love:' + $scope.love);
	$log.info('infoController->name:' + $scope.name);
	$log.info('infoController->pword:' + $scope.pword);

})
.controller('loginController', function($scope){
	$scope.login = function(){
		if($scope.uname === 'admin' && $scope.pword === 'pas'){
			alert('登录成功');
		} else {
			alert('登录失败');
		}
	};

	$scope.reset = function(){
		$scope.uname = '';
		$scope.pword = '';
	}
});



