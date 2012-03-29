const notifications = require("notifications");

const config = require("config").config;
const db = require("db");

function todayMenu(){
	var menu = db.retrieveMenu();
	var today = new Date().getDay();
	var day = config.DAY[today];

	return menu[day]['carne'];

}

function notify(){
	notifications.notify({
	  text: todayMenu(),
	  iconURL: config.path.images+"logo.png"
	});
}

exports.notify = notify;