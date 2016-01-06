angular.module('powerIce.home', ['ngRoute'])
.controller('HomeController', function($scope, $http){
	$http.get('/api/todos')
    .success(function(data) {
        $scope.todos = data;
        cow = data;
        //console.log(data[0]);
    })
    .error(function(data) {
        console.log('Error: ' + data);
    });
	var vm = this;
	vm.order_item = 'likes',
	vm.order_reverse = false;
	vm.toots = tutorials;
	vm.like = function(index){
      vm.toots[index].likes++;
	};
	vm.createTodo = function (){
    
	  // $http.post('/api/todos', {index:index, name:"dog", title: "Chasing Cars", likes:100, url:'http://www.dog.com'})
   //    .success(function(data) {
   //    	  console.log(data[0]);
   //        $scope.todos.push(data);
   //        //console.log(data);
   //    })
   //    .error(function(data) {
   //        console.log('Error: ' + data);
   //   });
   //  index++;
	};
})
var index = 4;
var tutorials = [
	{index:0, name:"hopta", title: "MONGOOSE and ME", likes:0, url:'/#mongoose/'},
	{index:1, name:"mark", title: "EXPRESS YOURSELF", likes:5, url:'http://www.cnn.com'},
	{index:2, name:"egan", title: "ANGLE SHOOTING with ANGULAR", likes:2, url:'/#mongoose/'},
	{index:3, name:"max", title: "NODE-S the POWER within you!", likes:3, url:'http://www.yahoo.com'}
];

 // $scope.createTodo = function() {
 //        $http.post('/api/todos', $scope.myData)
 //            .success(function(data) {
 //                $scope.formData = {}; // clear the form so our user is ready to enter another
 //                $scope.todos = data;
 //                console.log(data);
 //            })
 //            .error(function(data) {
 //                console.log('Error: ' + data);
 //            });
 //    };