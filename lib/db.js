const db = require("simple-storage");
const config = require("config").config;

function insertMenu(menu){
    var today = new Date();
    var data = {"date" : today, "menu" : menu};
    db.storage.data = data;
}

function retrieveDate(){
	if(db.storage.data == undefined) return null;
    var date = db.storage.data.date;
    return date;
}

function retrieveMenu(){
	if(db.storage.data == undefined) return null;
	var menu = db.storage.data.menu;
    return menu;
}

function todayMenu(){
	var menu = retrieveMenu();
	if(menu == null)
		return null;

	var today = new Date().getDay();
	var day = config.DAY[today];
	return menu[day];
}

function getMenuByDay(selectedDay){
	var menu = retrieveMenu();
	if(menu == null)
		return null;
	return menu[selectedDay];
}

exports.insertMenu		= insertMenu;
exports.retrieveDate	= retrieveDate;
exports.retrieveMenu	= retrieveMenu;
exports.todayMenu		= todayMenu;
exports.getMenuByDay	= getMenuByDay;
