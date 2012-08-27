const data      = require("self").data;
const self      = require("self");
const timer     = require("timer");

//------------------- Objects --------------------//
const Objects = require("objects").Objects;

//----------------- My modules -------------------//
const request = require("ru_request");
const notify = require("alert").notify;

Objects.Panel.init();

Objects.Widget.setPanel(Objects.Panel);
Objects.Widget.init();

var time = new Date();

//If isn't sunday and sartuday, there's no menu and no notification
if(time.getDay() != 0 && time.getDay() != 6){
    /**
    * Make the request and notify (notify only if is before 13:00 o'clock)
    */
    Objects.Widget.emit.loading();
    request.ajax(Objects.Widget);
    hour = time.getHours();
    if( hour < 13){
        timer.setTimeout(notify, 4000);
    }
}


// Setting up the listeners
Objects.Widget.on.click();
Objects.Widget.on.error();

Objects.Panel.on.closePanel();
Objects.Panel.on.dayChange();

