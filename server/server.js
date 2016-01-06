//set up ==========================================
var express  = require('express');
var app      = express();  
var mongoose = require('mongoose');

//configuration ===================================

mongoose.connect('mongodb://localhost/Mvp');

require('./config/middleware.js')(app, express);
var tutorialSchema = mongoose.Schema({
	  index:{ type: Number, required: true, unique: true }, 
	  name: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    likes: { type: Number, required: true },
    url: { type: String, required: true}
});

var Tutorial = mongoose.model('Tutorial', tutorialSchema);

var learnNode = new Tutorial({index:10, name: 'Joe', title: "LearnAllTheThings", likes:9, url:'http://www.nhl.com' });
learnNode.save(function(err, data){
	if (err){
		console.log("oh noes an error in saving to the database: ", err);
	} else {
		console.log("successfully saved: ", data);
	}
});

app.get('/api/todos', function(req, res) {

      // use mongoose to get all todos in the database
      Tutorial.find(function(err, todos) {

          // if there is an error retrieving, send the error. nothing after res.send(err) will execute
          if (err)
              res.send(err)

          res.json(todos); // return all todos in JSON format
      });
  });
//saving and getting data from the server ================
app.post('/api/todos', function(req, res) {
	console.log('request body equals ',req.body);
	Tutorial.find(function(err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err){
                res.send(err)
            } else {
              console.log(res.json(todos));
              res.json(todos); // return all todos in JSON format
            }
        });

        // create a todo, information comes from AJAX request from Angular
        // Todo.create({
        //     text : req.body.text,
        //     done : false
        // }, function(err, todo) {
        //     if (err)
        //         res.send(err);

        //     // get and return all the todos after you create another
        //     Todo.find(function(err, todos) {
        //         if (err)
        //             res.send(err)
        //         res.json(todos);
        //     });
        // });

});




//
require('./config/routes.js')(app, express);


//start the app on Port 8080 =======================
app.listen(8080);
console.log("App listening on port 8080");
