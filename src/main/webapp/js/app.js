var App = angular.module('App', [
'ngRoute',
'controllers',
'services'
]);

App.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/agente/agente.html',
		controller: 'agenteController'
	})

	.when('/create', {
		templateUrl: 'views/create.html',
		controller: 'CreateCtrl'
	})

	.when('/edit/:id', {
		templateUrl: 'views/edit.html',
		controller: 'EditCtrl'
	})
});

App.value('API', 'http://localhost:8080/angular-app/service/');