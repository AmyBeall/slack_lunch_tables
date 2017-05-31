var Express = require('express'),
	App = Express(),
	Path = require('path'),
	Request = require('request'),
	FS = require('fs'),
	Router = Express.Router(); 

var authTokens = require('./authentication');

Request.get('https://slack.com/oauth/authorize?client_id='+authTokens.client_id+'&scope='+authTokens.scope, function(error){
	if(error)console.log(error);
});

// Accepts the post request from Slack
Router.post('/lunch_tables', function(req, res) {  		
	console.log(req);	
});

// apply the routes to our application
App.use('/', Router);

App.get('/', function(req, res) {
	console.log(req);
	res.sendFile(Path.join(__dirname,'index.html'));
});

App.listen(8080, "");
console.log('Server running at http://172.31.13.193:8080/');