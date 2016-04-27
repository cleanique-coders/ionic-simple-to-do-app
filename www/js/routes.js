angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('simpleToDoApp', {
    url: '/todo-list',
    templateUrl: 'templates/simpleToDoApp.html',
    controller: 'simpleToDoAppCtrl'
  })

  .state('newTodoItem', {
    url: '/new-todo',
    templateUrl: 'templates/newTodoItem.html',
    controller: 'newTodoItemCtrl'
  })

  .state('editTodoItem', {
    url: '/edit-todo/:id',
    templateUrl: 'templates/editTodoItem.html',
    controller: 'editTodoItemCtrl'
  })

  .state('toDoDetails', {
    url: '/todo-details/:id', // pass parameters to page
    templateUrl: 'templates/toDoDetails.html',
    controller: 'toDoDetailsCtrl'
  })

$urlRouterProvider.otherwise('/todo-list')

  

});