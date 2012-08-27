/**
* Here, all the objects declared in the 'objects/'
* directory will be stored.
*/
// Requires
var RuPanel  = require("objects/panel").Panel;
var RuWidget = require("objects/widget").Widget;

// Linking the widget to the panel
RuWidget.setPanel(RuPanel);

var Objects = {
	Panel:  RuPanel,
	Widget: RuWidget,
};
exports.Objects = Objects;