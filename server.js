var Express = require('express'),
	App = Express(),
	Path = require('path'),
	Request = require('request'),
	FS = require('fs'),
	Router = Express.Router(),
	authTokens = require('./authentication');

var button = '<html> <a href="https://slack.com/oauth/authorize?scope='+authTokens.scope+'&client_id='+authTokens.client_id+'&redirect_uri=https://temp.amybeall/authenticate"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a> </html>';

FS.writeFile(Path.join(__dirname,'button.html'), button, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("Button Created!");
    
});

App.get('/authenticate', function(req, res) {

	if(req.query.code){
        var authCode = req.query.code;
        Request.get('https://slack.com/api/oauth.access?client_id='+authTokens.client_id+'&client_secret='+authTokens.client_secret+'&code='+authCode, function(error, response, body){
                if(error)console.log(error);
                if(response)console.log(response);
                if(body){
                	FS.writeFile(Path.join(__dirname,'team_auth.json'), body, function(err) {
                        if(err) {
                            return console.log(err);
                        }

                        console.log("The file was saved!");
                        res.sendFile(Path.join(__dirname,'README.md'));
                    });
                }
        });
    }
    
    res.sendFile(Path.join(__dirname,'button.html'));
});

App.get('/', function(req, res) {
	res.sendFile(Path.join(__dirname,'README.md'));
});

// Accepts the post request from Slack
Router.post('/lunch_tables', function(req, res) {  		
	console.log(req);	
});

// apply the routes to our application
App.use('/', Router);



App.listen(8080, "");
console.log('Server running at http://172.31.13.193:8080/');