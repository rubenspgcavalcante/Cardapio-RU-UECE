const Request 	= require("request").Request;
const self		= require("self");
const db		= require("db");
const config	= require("config").config;


/**
* I took this function from: 
* http://javascript.about.com/library/blweekyear.htm
* Thanks, great work!
*/
Date.prototype.getWeek = function() {
var onejan = new Date(this.getFullYear(),0,1);
return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
} 

/**
* Makes a smart request
* Do an ajax call only if there's no entry in db or
* if this entry is too old, week(s) before.
*
* Returns a 'menu' signal to the widget.
*/
function ajaxCall(widget){
    var request = Request({
        url: config.request.url,
        overrideMimeType: config.request.contentType,
        onComplete: function (response) {
        	//Sending the html payload to clear_result.js in widget
            widget.port.emit("wash", response.text)
        }
    });
    request.get();
}

/**
* Makes a smart request
* Do an ajax call only if there's no entry in db or
* if this entry is too old, week(s) before.
*
* Returns a 'menu' signal to the widget.
*/
function smartRequest(widget){
	var today  = new Date();
	var dbDate = new Date(db.retrieveDate());

	if( db.retrieveMenu() == null ||
		today.getWeek() > dbDate.getWeek()){
		//Sends a ajax call to the widget and wait it returns
		ajaxCall(widget);
		widget.port.on("clean", function(payload){
			//We've got the menu in json format (clean)
    		db.insertMenu(payload);
    		widget.port.emit("loaded");
		});
	}
	else{
		widget.port.emit("loaded");
	}

}

exports.ajax = smartRequest;
