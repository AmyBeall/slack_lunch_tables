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

--- On Slack ---
Create Slack app and get values for authtication.js file

--- On Server ---
Clone from github

run NPM install

Add authentication.js file with values from Slack
	module.exports = {
	client_id: "",
	client_secret: "",
	scope: "incoming-webhook,commands",
	validation_token: "",
	redirect_uri:"BaseURL/authenticate"
}
Add auth_team.js file with empty object

--- On Slack ---
Configure all /slash commands listed above

Configure redirect URIs:
	BaseURL
	BaseURL/authenticate

Add an incoming webhook	

--- Through web browser---

Authenticate using the authenticate method on the single instance

BaseURL/authenticate