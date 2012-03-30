const notifications = require("notifications");
const config = require("config").config;
const db = require("db");

function notify(){
	var menu = db.todayMenu();
	var msg = "";
	if(menu == null){
		msg = "Não definido";
	}
	else{
		msg = menu['carne'];
	}
	notifications.notify({
	  text: msg,
	  iconURL: config.path.images+"logo.png"
	});
}

exports.notify = notify;