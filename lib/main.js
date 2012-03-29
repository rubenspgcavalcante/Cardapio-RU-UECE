const data          = require("self").data;
const self          = require("self");
const widgets       = require("widget");
const tabs          = require("tabs");

//------------- Config file -------------//
const config = require("config").config;
//--------------------------------------//

//----------------- My modules -------------------//
const request = require("ru_request");
const db = require("db");
const notify = require("alert").notify;
//-----------------------------------------------//

var widgetPath = config.path.html+"widget.html";
var widget = widgets.Widget({
    id: "RU_UECE",
    label: "Cardápio RU UECE",
    contentURL: widgetPath,
    contentScriptFile: [config.jquery.path, config.path.js+"clear_result.js"],
    width: 42,
});

widget.port.emit("init");
request.ajax(widget);
/**
* Making the request
*
*/

widget.port.on("click", function(payload){
    notify();
});


widget.port.on("error", function(payload){
    console.log(payload);
});


