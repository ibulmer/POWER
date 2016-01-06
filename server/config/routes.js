module.exports = function(app, express) {
	app.get('/', function(req, res){
		res.sendfile("index.html");
	});
	app.get('/stuff', function(req, res){
		console.log(req);
		console.log("===================");
		console.log(res);
		res.sendfile('index.html');
	});
};
		