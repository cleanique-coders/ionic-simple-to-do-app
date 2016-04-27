angular.module('app.services', [])

.service('TaskService', function($localStorage) {
	return {
		getTaskById : function(id) {
			return $localStorage.tasks.reduce(function(carry, task){
		        if(task.id == id)
		            carry = task;
		        return carry;
		    }, {});
		},
		search : function(keyword) {
			// from keyword given, search from localStorage or can call API
		}
	}
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);

