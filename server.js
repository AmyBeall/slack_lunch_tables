var Express = require('express'),
	BodyParser = require('body-parser'),
	App = Express(),
	Path = require('path'),
	Request = require('request'),
	FS = require('fs'),
	Router = Express.Router(),
	authTokens = require('./authentication'),
	users = require('./users');

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({ extended: true })); 

// Creates the slack button using authentication tokens
var button = '<html> <a href="https://slack.com/oauth/authorize?scope='+authTokens.scope+'&client_id='
+authTokens.client_id+'&redirect_uri='+authTokens.redirect_uri+'"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a> </html>';

FS.writeFile(Path.join(__dirname,'button.html'), button, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("Button Created!"); 
});

// The endpoint used for authentication - should only be required once
App.get('/authenticate', function(req, res) {

	if(req.query.code){

        var authCode = req.query.code;
        Request.get('https://slack.com/api/oauth.access?client_id='+authTokens.client_id+'&client_secret='+authTokens.client_secret+'&code='+authCode+'&redirect_uri='+authTokens.redirect_uri, function(error, response, body){
                if(error)console.log(error);
                if(response)console.log(response);
                if(body){
                	FS.writeFile(Path.join(__dirname,'team_auth.json'), body, function(err) {
                        if(err) {
                            return console.log(err);
                        }

                        var teamAuth = FS.readFileSync("team_auth.json");
                        var teamAuthCreds = JSON.parse(teamAuth);

                        Request.post({
                          headers: {'Content-type': 'application/json'},
                          url:     teamAuthCreds.incoming_webhook.url,
                          body:   '{"text":"Welcome to Lunch Tables!"}'
                        }, function(error, response, body){
                        	if(error)console.log(error);
                        	if(response)console.log(response);
                          	if(body)console.log(body);
                        });

                        res.sendFile(Path.join(__dirname,'README.md'));
                    });
                }
        });
    } else {
    	
    	res.sendFile(Path.join(__dirname,'button.html'));
    }	
});

// The index of the site leads to the README for information
App.get('/', function(req, res) {
	res.sendFile(Path.join(__dirname,'README.md'));
});

// Accepts the post request from Slack

// The main endpoint that handles most GET requests
Router.post('/lunch_tables', function(req, res) {  		
	console.log(req);	
});

// The endpoint used for editing the list of names
Router.post('/edit', function(req, res) {  	
	
	if(req.body.command === '/add_lunch_guest'){
		users.push(req.body.text);
	

		var usersFile="module.exports=[";

		for(user in users){
			usersFile+='"'+users[user]+'"';
			if(user != users.length-1)usersFile+=',';
		}
		usersFile+="];";

		FS.writeFile(Path.join(__dirname,'users.js'), usersFile, function(err) {
		    if(err) {
		        return console.log(err);
		    }
		});
		Request.post({
		  headers: {'Content-type': 'application/json'},
		  url:     req.body.response_url,
		  body:   '{"text":"'+req.body.text+' has been added"}'
		}, function(error, response, body){
			if(error)console.log(error);
			if(response)console.log(response);
		  	if(body)console.log(body);
		});
		res.status(200).send('Looking Good!');
	}
});

//The endpoint used for generating a new list
Router.post('/generate', function(req, res) {  		
	console.log(req);	
});

// apply the routes to our application
App.use('/', Router);

App.listen(8080, "");
console.log('Server running at http://172.31.13.193:8080/');