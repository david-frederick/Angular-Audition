'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/users/:userId', {templateUrl: '/albums/albums.html', controller: 'AlbumController'}).
  otherwise({redirectTo: '/view1'});
}]);

app.controller('UserController', ['$http', function($http){
	var userCtrl = this;
	userCtrl.users = [];

	$http.get('http://jsonplaceholder.typicode.com/users').success(function(data){
		userCtrl.users = data;
	});
}]);

app.controller('AlbumController', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams){
	var albumCtrl = this;
	albumCtrl.albums = [];

	$http.get('http://jsonplaceholder.typicode.com/albums').success(function(data){
		albumCtrl.albums = data;
	});
}]);