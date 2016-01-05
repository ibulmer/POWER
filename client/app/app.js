(function(){
	var app = angular.module('powerIce', []);
	app.controller('PowerController', function($scope){
		var vm = this;
		vm.order_item = 'likes',
		vm.order_reverse = false;
		vm.toots = tutorials;
		vm.like = function(index){
          vm.toots[index].likes++;
		}
	});
	
	var tutorials = [
		{index:0, name:"hopta", title: "MONGOOSE and ME", likes:0},
		{index:1, name:"mark", title: "EXPRESS YOURSELF", likes:5},
		{index:2, name:"egan", title: "ANGLE SHOOTING with ANGULAR", likes:2},
		{index:3, name:"max", title: "NODE-S the power within you!", likes:3}
	];
	
})();