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
        
       $scope.loadChart = function loadChart(id){
											
							//Get the Sensor Values
							getSensorValues(id);
							//Create dataChart Config
						
            
        	}
        
					
							
			function getSensorValues(id){
				$http.get('/sensorValue/'+id._id)
				.then(function (result) {
           			
            			console.log(result.data);	
            			var config = createChartConfigFromSensorValues(result.data);
							//Draw Chart		
								var ctx = document.getElementById('myChart').getContext('2d');
								window.myLine = new Chart(ctx, config);            
			}, function(result) {
            //some error
            console.log(result);
            });
		};
		
		function createChartConfigFromSensorValues(dataValues){
  				var count;
				var labels = new Array();
				var values = new Array();            
            
            for (count =0; count < dataValues.length; count++){
				         labels.push(dataValues[count].date);
				         values.push(dataValues[count].value);
            }
             console.log(labels);
             console.log(values);		
				return createConfig(labels,values);
		}
		
		function createConfig(labels, values){
		
var config = {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: labels,
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: values,
        }]
    },

    // Configuration options go here
    options: {}
};	     		
return config;
		
		}
       
		
  });
    

