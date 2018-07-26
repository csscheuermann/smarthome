// public/core.js
var smarthome = angular.module('smartHome', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/smartobject')
        .success(function(data) {
            $scope.smartobjects = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
        
 };



