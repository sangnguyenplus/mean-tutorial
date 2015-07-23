angular.module('appRoutes',[]).config(['$stateProvider', '$urlRouterProvider','$locationProvider',
 function($stateProvider, $urlRouterProvider,$locationProvider){
 /*Điều hướng 404*/
  $urlRouterProvider.otherwise("/404.html");
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
      controller: 'ListPostController'
    })
    .state('create', {
      url: "/create-post",
      templateUrl: "views/create.html",
      controller: 'CreatePostController'
    })
    .state('detail', {
      url: "/post/detail/:id",
      templateUrl : 'views/detail.html',
      controller :'DetailPostController'
    })
    .state('edit', {
      url: "/post/edit/:id",
      templateUrl : 'views/edit.html',
      controller :'DetailPostController'
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