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
    contentScriptFile: [config.jquery.path, config.path.js + config.widget.script[0], config.path.js + config.widget.script[1] ],
    width: config.widget.width,
});


widget.port.emit("init");
completeMenu.port.emit("init");
var time = new Date();

//If is sunday or sartuday, there's no menu and no notification
if(time.getDay() != 0 || time.getDay() != 6){
    /**
    * Make the request and notify (notify only if is before 13:00 o'clock)
    */
    widget.port.emit("loading");
    request.ajax(widget);
    hour = time.getHours();
    if( hour < 13){
        timer.setTimeout(notify, 4000);
    }
}

widget.port.on("click", function(){
	completeMenu.port.emit("setMenu", db.todayMenu());
});


widget.port.on("error", function(payload){
    console.log(payload);
});


