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
   
.controller('editTodoItemCtrl', function($scope, $stateParams) {
	$scope.task = $scope.$storage.tasks.reduce(function(carry, task){
        if(task.id == $stateParams.id)
            carry = task;
        return carry;
    }, {});

    $scope.update = function() {
    	// find value in $scope.tasks
    	// replace $scope.tasks[$index] = $scope.task;
    }
})
   
.controller('toDoDetailsCtrl', function($scope, $stateParams) {
	$scope.task = $scope.$storage.tasks.reduce(function(carry, task){
        if(task.id == $stateParams.id)
            carry = task;
        return carry;
    }, {});
})
 