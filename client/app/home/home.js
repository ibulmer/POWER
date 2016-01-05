angular.module('powerIce.home', ['ngRoute'])
.controller('HomeController', function($scope){
	var vm = this;
	vm.order_item = 'likes',
	vm.order_reverse = false;
	vm.toots = tutorials;
	vm.like = function(index){
      vm.toots[index].likes++;
	}
})
var tutorials = [
	{index:0, name:"hopta", title: "MONGOOSE and ME", likes:0, url:'/#mongoose/'},
	{index:1, name:"mark", title: "EXPRESS YOURSELF", likes:5, url:'http://www.cnn.com'},
	{index:2, name:"egan", title: "ANGLE SHOOTING with ANGULAR", likes:2, url:'/#mongoose/'},
	{index:3, name:"max", title: "NODE-S the POWER within you!", likes:3, url:'http://www.yahoo.com'}
];