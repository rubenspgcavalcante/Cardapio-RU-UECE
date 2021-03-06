const Request   = require("request").Request;
const self      = require("self");
const db        = require("db");
const config    = require("config").config;


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
function ajaxCall(interfaceWidget){
    var request = Request({
        url: config.request.url,
        overrideMimeType: config.request.contentType,
        onComplete: function (response) {
            //Sending the html payload to clear_result.js in widget
            interfaceWidget.emit.wash(response.text);
        }
    });
    request.get();
}

function isOld(){
    var today  = new Date();
    var dbDate = new Date(db.retrieveDate());

    //If today is after the db entry week...
    if(today.getWeek() > dbDate.getWeek()){
        return true;
    }
    //If today week is not greater than db entry week, but is in another month or year
    else if(today > dbDate) return true;

    return false;
        
}

/**
* Makes a smart request
* Do an ajax call only if there's no entry in db or
* if this entry is too old, week(s) before.
*
* Returns a 'menu' signal to the widget.
*/
function smartRequest(interfaceWidget){
    if( db.retrieveMenu() == null || isOld() ){
        //Sends a ajax call to the widget and wait it returns
        ajaxCall(interfaceWidget);
        interfaceWidget.on.clean();
    }
    else{
        interfaceWidget.emit.loaded();
    }

}

exports.ajax = smartRequest;
