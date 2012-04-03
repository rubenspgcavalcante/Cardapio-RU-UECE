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
	  title: config.alert.title,
	  text: msg,
	  iconURL: config.path.images + config.alert.logo_file
	});
}

exports.notify = notify;
