'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {
  //$scope.todos = [{name:"t1"},{name:"t2"},{name:"t3"}];
  $http({
  method: 'GET',
  url: '/todos'
}).then(function successCallback(response) {
    $scope.todos = response.data;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

  }]);