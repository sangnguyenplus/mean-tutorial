angular.module('baseCtrl',[])

.controller('baseController',['$scope','$http', function($scope, $http) {
	$scope.greeting = 'Every one';
}]);