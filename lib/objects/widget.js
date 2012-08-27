const config	= require("config").config;
const db        = require("db");
const widgets   = require("widget");

var Widget = {
	panel: {},

	instance: {},

	setPanel: function(panel){
		this.panel = panel;
	},

	init: function(){
		this.instance = widgets.Widget({
		    id: "RU_UECE",
		    label: config.widget.label,
		    panel: this.panel.instance,
		    contentURL: config.path.html + config.widget.filename,
		    contentScriptFile: [config.jquery.path, config.path.js + config.widget.script[0], config.path.js + config.widget.script[1] ],
		    width: config.widget.width,
		});
		this.emit.parent = this;
		this.on.parent = this;

		this.instance.port.emit("init");
	},

	emit: {
		parent: {},

		loading: function(data){

			if(data == undefined) data = null;
			this.parent.instance.port.emit("loading", data);
		},

		loaded: function(data){

			if(data == undefined) data = null;
			this.parent.instance.port.emit("loaded", data);	

		},

		wash: function(data){
			
			if(data == undefined) data = null;
			this.parent.instance.port.emit("wash", data);
		},
	},
		
	on: {
		parent: {},

		click: function(payload){
			
			var thisWidget = this.parent;

			thisWidget.instance.port.on("click", function(payload){
				thisWidget.panel.emit.setMenu(db.todayMenu());
			});

		},

		clean: function(payload){
			var thisWidget = this.parent;

			thisWidget.instance.port.on("clean", function(payload){
				db.insertMenu(payload);
            	thisWidget.emit.loaded();
			});
			
		},

		error: function(){

			this.parent.instance.port.on("error", function(payload){
				//TODO: Error log system
				console.log(payload);
			});
		},
	},
};
exports.Widget = Widget;