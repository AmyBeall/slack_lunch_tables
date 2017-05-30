var Express = require('express');
var App = Express();
var Path = require('path');

var Router = Express.Router(); 

// Accepts the post request from Slack
Router.post('/lunch_tables', function(req, res) {  		
	console.log(req);	
});

// apply the routes to our application
App.use('/', Router);

App.get('/', function(req, res) {
	res.sendFile(Path.join(__dirname,'index.html'));
});

App.listen(8080);
console.log('Server running at http://172.31.13.193:8080/');