angular.module('Todo')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "views/todo.tmpl.html",
    controller: "todoCtrl",
    controllerAs: "todoCtrl"
  })
}]);