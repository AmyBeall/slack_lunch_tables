# slack_lunch_tables

<-- Authenticate using one of the following methods -->

	Please visit the authenticate URL to click the add to slack button

	https://temp.amybeall.com/authenticate

<-- Use slack to interface with app -->

/slash commands configured:

/lunch_tables [delete_name]
	URL used: BaseURL/edit
/lunch_tables [add_name]
	URL used: BaseURL/edit
/lunch_tables [generate]
	URL used: BaseURL/generate
	

<-- To deploy a single instance -->

Clone from github

run NPM install

Edit authentication.js file with values from Slack

Configure all /slash commands listed above

Add an incoming webhook	

Authenticate using the authenticate method above
