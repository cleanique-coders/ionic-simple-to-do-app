angular.module('app.controllers', [])

.run(function($rootScope, $localStorage, $sessionStorage){

	$rootScope.$storage = $localStorage;
	$rootScope.$session = $sessionStorage;

	if($rootScope.$storage.tasks === undefined) {
		$rootScope.$storage.tasks = [];
	}
	
	$rootScope.tasks = [
		{
			id: 1,
			name: 'to do 1'
		},
		{
			id: 2,
			name: 'to do 2'
		},
		{
			id: 3,
			name: 'to do 3'
		}
	];

	$rootScope.title = 'Simple ToDo App';
})
  
.controller('simpleToDoAppCtrl', function($scope) {
	$scope.removeTask = function(task) {
		if(confirm('Are you sure want to delete this task?')) {
          $scope.$storage.tasks.splice($scope.$storage.tasks.indexOf(task), 1);
      	}
	}
})
   
.controller('newTodoItemCtrl', function($scope) {
	$scope.name = '';
	$scope.description = '';

	$scope.save = function() {
		$scope.$storage.tasks.unshift({
			id: Math.floor((Math.random() * 10000) + 1),
			name: $scope.name,
			description: $scope.description
		});
	}
})
   
.controller('editTodoItemCtrl', function($scope, $stateParams, TaskService) {

 	$scope.task = TaskService.getTaskById($stateParams.id);

    $scope.update = function() {
    	// do update
    }
})
   
.controller('toDoDetailsCtrl', function($scope, $stateParams, TaskService) {
    $scope.task = TaskService.getTaskById($stateParams.id);
})
 