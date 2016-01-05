
angular.module('powerIce', ['powerIce.goose', 'powerIce.home',
	'ngRoute'])
  .config(function ($routeProvider, $httpProvider){
	  $routeProvider
		.when('/mongoose', {
      templateUrl: 'app/tutorials/mongoose.html',
      controller: 'GooseController'
	  })
	  .when('/', {
	  	templateUrl: 'app/home/home.html',
	    controller: 'HomeController'
	  })
});


var tutorials = [
	{index:0, name:"hopta", title: "MONGOOSE and ME", likes:0, url:'http://www.google.com'},
	{index:1, name:"mark", title: "EXPRESS YOURSELF", likes:5, url:'http://www.cnn.com'},
	{index:2, name:"egan", title: "ANGLE SHOOTING with ANGULAR", likes:2, url:'http://www.nba.com'},
	{index:3, name:"max", title: "NODE-S the power within you!", likes:3, url:'http://www.yahoo.com'}
];
