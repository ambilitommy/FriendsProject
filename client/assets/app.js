var angularapp = angular.module('anguApp',['ngRoute']);
angularapp.config(function($routeProvider){
  console.log("entered config");
  $routeProvider
  .when('/',{
    templateUrl:'partials/displayall.html',
    controller:'newController'
  })
  .when('/new',{
    templateUrl:'partials/new.html',
    controller:'newController'
  })
  .when('/edit',{
    templateUrl:'partials/edit.html',
    controller:'editController'
  })
});
