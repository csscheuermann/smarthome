// public/core.js
//var smarthome = angular.module('smartHome', []);


angular.module('smartHome', []).
    controller('mainController',
        function ($scope, $http) {
        	
//TODO COS: SensorValues Distinc select on years && implement ng-hide
    $scope.filterYear = [];
$scope.currentSmartObject ={};

 
    $scope.$watch('form.type',  function(data) {
     if(data){ 
        $http.get('/sensorValue/'+	$scope.currentIdSensorSelected._id+'/year/'+data)
                .then(function (result) {
                	      paintChart( createChartConfigFromSensorValues(result.data, data));
                	      
 
                    console.log(result);
                }, function (result) {
                    //some error
                    console.log(result);
                });
                
              }}    
      
    );
  
            $http.get('/smartobject')
                .then(function (result) {
                    $scope.smartobjects = result.data;
                    console.log(result);
                }, function (result) {
                    //some error
                    console.log(result);
                });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });


  	
  	
  	
            $scope.loadChart = function loadChart(id, sensorName,limit) {
            	$scope.currentIdSensorSelected = id;

                //Get the Sensor Values
                getSensorValues(id,sensorName,limit);
						fillDropDown(id);
                //Create dataChart Config


            }
            
            
            
            $scope.isEmpty = function (obj) {
    for (var i in obj) if (obj.hasOwnProperty(i)) return false;
    return true;
};
            $scope.loadSmartObject = function loadSmartObject(index){
           
					$scope.currentSmartObject =    $scope.smartobjects[index];
					$scope.latestValue = null;
	}
	
	

				function fillDropDown(id){
     				$http.get('sensorValue/'+id._id+'/years')
     				.then(function (result) {
                    $scope.years = result.data;
                    console.log(result);
                      $scope.filterYear = result.data;
                      $scope.form = {type : $scope.filterYear[0].value};
                }, function (result) {
                    //some error
                    console.log(result);
                });				
				}

            
                function getSensorValues(id,sensorName,limit) {
                $http.get('/sensorValue/' + id._id+"/limit/"+limit)
                    .then(function (result) {
  								$scope.sensorDataValues = result.data;
                        console.log($scope.sensorDataValues);
                        paintChart(  createChartConfigFromSensorValues($scope.sensorDataValues,sensorName));
                    }, function (result) {
                        //some error
                        console.log(result);
                    });
            };
            
            

		function paintChart(config){
   		var ctx = document.getElementById('myChart').getContext('2d'); 	
								if($scope.chart){
										$scope.chart.destroy();
								}								
								$scope.chart = new Chart(ctx, config);      
								$scope.chart.update();		      
                     	window.myLine =  $scope.chart;
		}

            function createChartConfigFromSensorValues(dataValues, sensorName) {
               var count;
               $scope.labels = new Array();
               $scope.values = new Array();
					$scope.years = new Array()
					
					$scope.latestValue = dataValues[0];
                for (count = 0; count < dataValues.length; count++) {
                   $scope.labels.push(dataValues[count].date.toLocaleString());
							$scope.values.push(dataValues[count].value);
							
                }

                return createConfig($scope.labels, $scope.values,sensorName);
            }



            function createConfig(labels, values,sensorName) {

               return {
                    // The type of chart we want to create
                    type: 'line',

                    // The data for our dataset
                    data: {
                        labels: $scope.labels,
                        datasets: [{
                            label:sensorName,
                            lineTension: 0,
                            backgroundColor: 'rgb(96, 125, 139)',
                            borderColor: 'rgb(179, 229, 255)',
                            data: $scope.values,
                        }]
                    },

                    // Configuration options go here
                    options: {
								scales: {
									yAxes: [{
										ticks: { 
											beginAtZero: true		
										}									
										
									}]	,
										xAxes: [{
										ticks: { 
											beginAtZero: true		
										},
										type: 'time',
										distribution: 'series',
										elements: {
												line: {
													tension: 0												
												}										
										}									
										
									}]											
								}
                    }
                };

            }
   
        });


