# slack_lunch_tables

<-- Authenticate using one of the following methods -->

	The user that downloads that authenticates becomes the user validated to edit the list generation
	
	https://slack.com/oauth/authorize?&client_id=8985585440.183772429424&scope=incoming-webhook,commands

	https://temp.amybeall.com/authenticate

<-- Use slack to interface with app -->

/slash commands configured:

*channel validated

/lunch_tables [all]
	URL used: BaseURL/lunch_tables
/lunch_tables [name]
	URL used: BaseURL/lunch_tables
/lunch_tables [table]
	URL used: BaseURL/lunch_tables
/lunch_tables [all_names]
	URL used: BaseURL/lunch_tables
/lunch_tables [all_tables]
	URL used: BaseURL/lunch_tables

*user validated

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

Use one of the authentication URLs