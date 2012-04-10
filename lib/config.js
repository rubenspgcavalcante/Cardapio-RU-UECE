const self = require("self");
// Config var in json //

var config = {
    //Global configurations
    "request": {
        "url": "http://www.uece.br/uece/index.php/ru/1769",
        "contentType": "text/html; charset=utf-8",
    },
    
    "path": {
        "html": self.data.url("html/"),
        "css": self.data.url("css/"),
        "images": self.data.url("images/"),
        "js": self.data.url("js/"),
    },

    "jquery": {
        "path": self.data.url("js/")+"jquery-1.7.2.min.js",
        "version": "1.7.2",
    },
    
    //Objects configurations
    "widget": {
        "label": "Cardápio RU UECE",
        "width": 32,
        "filename": "widget.html",
        "script": ["clear_result.js", "widget.js"],
    },
    
    "panel": {
        "width": 490,
        "height": 150,
        "filename": "panel.html",
        "script": "panel.js"
    },
    
    "alert": {
        "title": "Opções de carne",
        "logo_file": "logo.png",
    },
    
    //Enumarations
    "DAY":{
        1: 'seg',
        2: 'ter',
        3: 'qua',
        4: 'qui',
        5: 'sex'
    },

};

exports.config = config;
