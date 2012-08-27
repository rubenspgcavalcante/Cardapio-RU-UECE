const config	= require("config").config;
const db 		= require("db");
const panel     = require("panel");


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