const config    = require("config").config;
const db        = require("db");
const panel     = require("panel");

/**
* This object is like a 'interface' from panel of the sdk
* and the singleton panel from this application.
* @author Rubens Pinheiro
*/
var Panel = {
    instance: null,

    init: function(){
        this.instance = panel.Panel({
            width: config.panel.width,
            height: config.panel.height,
            contentScriptFile: [config.jquery.path, config.path.js + config.panel.script],
            contentURL: config.path.html + config.panel.filename,
        });

        this.on.parent = this;
        this.emit.parent = this;
        this.instance.port.emit("init");
    },

    /*
    * Here i've make an event's micro framework.
    * All events associated to this object are declared here.
    * We have bassically two types, the emitters and the listeners.
    */
    emit: {
        parent: {},

        setMenu: function(data){
            if(data == undefined) data = null;
            this.parent.instance.port.emit("setMenu", data);
        },
    },

    on:{
        parent: {},

        dayChange: function(payload){
            var thisPanel = this.parent;
            thisPanel.instance.port.on("dayChange", function(payload){
                thisPanel.emit.setMenu(db.getMenuByDay(payload));
            });
        },

        closePanel: function(payload){
            var thisPanel = this.parent;
            thisPanel.instance.port.on("closePanel", function(payload){
                thisPanel.instance.hide();
            });
        },
    },
};
exports.Panel = Panel;