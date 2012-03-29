const db = require("simple-storage");

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

exports.insertMenu   = insertMenu;
exports.retrieveDate = retrieveDate;
exports.retrieveMenu = retrieveMenu;
