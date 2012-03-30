const data      = require("self").data;
const self      = require("self");
const widgets   = require("widget");
const panel		= require("panel")
const timer     = require("timer");

//------------- Config file -------------//
const config = require("config").config;
//--------------------------------------//

//----------------- My modules -------------------//
const request = require("ru_request");
const db = require("db");
const notify = require("alert").notify;
//-----------------------------------------------//

var completeMenu = panel.Panel({
	width: 360,
	height: 200,
	contentScriptFile: [config.jquery.path, config.path.js+"panel.js"],
	contentURL: config.path.html+"panel.html",
});

var widget = widgets.Widget({
    id: "RU_UECE",
    label: "Cardápio RU UECE",
    panel: completeMenu,
    contentURL: config.path.html+"widget.html",
    contentScriptFile: [config.jquery.path, config.path.js+"clear_result.js"],
    width: 42,
});


widget.port.emit("init");
completeMenu.port.emit("init");
/**
* Make the request and notify
*
*/
request.ajax(widget);
id = timer.setTimeout(notify(), 3000);
timer.clearTimeout(id);


widget.port.on("click", function(){
	completeMenu.port.emit("setMenu", db.todayMenu());
	
});


widget.port.on("error", function(payload){
    console.log(payload);
});


