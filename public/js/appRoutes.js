angular.module('appRoutes',[]).config(['$stateProvider', '$urlRouterProvider','$locationProvider',
 function($stateProvider, $urlRouterProvider,$locationProvider){
 /*Điều hướng 404*/
  $urlRouterProvider.otherwise("/404.html");
  $urlRouterProvider.when('/_=_', '/');
  /*Thiết lập các state*/
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html",
      controller: 'baseController'
    })
    .state('list', {
      url: "/list-post",
      templateUrl: "views/list.html",
      controller: 'baseController'
    })
    .state('create', {
      url: "/create-post",
      templateUrl: "views/create.html",
      controller: 'baseController'
    })
	/*===============404 NOT FOUND================*/
	.state('404', {
		url: "/404.html",
		templateUrl : 'views/404.html',
      	title: '404 - Không tìm thấy trang yêu cầu'
	});
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $locationProvider.hashPrefix('!');
}]);