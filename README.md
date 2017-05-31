# slack_lunch_tables

https://slack.com/oauth/authorize?&client_id=8985585440.183772429424&scope=incoming-webhook,commands

https://temp.amybeall.com/authenticate

Use slack to interface with app

/configure channel hooks

reg channel
/lunch_tables [all]
/lunch_tables [name]
/lunch_tables [table]
/lunch_tables [all_names]
/lunch_tables [all_tables]

user channel
/lunch_tables [delete_name]
/lunch_tables [add_name]
/lunch_tables [generate]
/lunch_tables [log]

10am prompt admin to add/delete users

11am cron generates list

2pm cron generates log of lunch groups

if (current_time btw 11-2 ){
	If (new user is added || deleted){
		regenerate list
	}
	if(list regenerated){
		alert reg channel new list has been created
	}
}	

file 1 = array of names
file 2 = temporary table objects

CLI commands for cron jobs

node server.js prompt

node server.js generate

node server.js log
