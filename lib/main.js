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
	width: config.panel.width,
	height: config.panel.height,
	contentScriptFile: [config.jquery.path, config.path.js + config.panel.script],
	contentURL: config.path.html + config.panel.filename,
});

var widget = widgets.Widget({
    id: "RU_UECE",
    label: config.widget.label,
    panel: completeMenu,
    contentURL: config.path.html + config.widget.filename,
    contentScriptFile: [config.jquery.path, config.path.js + config.widget.script],
    width: config.widget.width,
});


widget.port.emit("init");
completeMenu.port.emit("init");
/**
* Make the request and notify
*/
request.ajax(widget);
timer.setTimeout(notify, 1000);

widget.port.on("click", function(){
	completeMenu.port.emit("setMenu", db.todayMenu());
});


widget.port.on("error", function(payload){
    console.log(payload);
});


