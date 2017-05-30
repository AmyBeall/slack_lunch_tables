var request = require('request');

// curl -X POST -H  --data '{"text":"Hello, World!"}' https://hooks.slack.com/services/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
// https://hooks.slack.com/services/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
request.post({
  headers: {'Content-type': 'application/json'},
  url:     'https://hooks.slack.com/services/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',
  body:   '{"text":"<@U024BE7LH|raul>, Hello!"}'
}, function(error, response, body){
	if(error)console.log(error);
	if(response)console.log(response);
  	if(body)console.log(body);
});

request.post({
  headers: {'Content-type': 'application/json'},
  url:     'https://hooks.slack.com/services/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',
  body:   '{"text":"Hi Raul!"}'
}, function(error, response, body){
	if(error)console.log(error);
	if(response)console.log(response);
  	if(body)console.log(body);
});