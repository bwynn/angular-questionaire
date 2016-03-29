angular.module('AppRoutes', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/questionForm.html',
        controller: 'formCtrl'
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'resultsCtrl'
      })
      .otherwise({
        templateUrl: 'views/questionForm.html',
        controller: 'formCtrl'
      })
  }]);
