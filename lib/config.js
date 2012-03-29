const self = require("self");
// Config var in json //

var config = {
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

    //Days enum
    "DAY":{
        1: 'seg',
        2: 'ter',
        3: 'qua',
        4: 'qui',
        5: 'sex'
    }

};

exports.config = config;
