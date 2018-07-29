// public/core.js
//var smarthome = angular.module('smartHome', []);


angular.module('smartHome', []).
    controller('mainController', 
      function ($scope, $http){
  			$scope.formData = {};


  $http.get('/smartobject')
        .then(function (result) {
            $scope.smartobjects = result.data;
            console.log(result);
        }, function(result) {
            //some error
            console.log(result);
        });
        

//	$scope.getSensorById = function () {
   // $http.get('/sensor/5b597781612bdb3420fefe37')
      //  .then(function (result) {
         //   $scope.sensor = result.data;
           // console.log(result);
        //}, function(result) {
            //some error
          //  console.log(result);
       // });
//};

  });
    

