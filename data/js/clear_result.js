/**
* Gets the last R.U.s lunch menu.
*
*/

/**********************
Helper functions declarations
***********************/
function clearResult(menu){

    var week = { 
        'seg': "",
        'ter': "",
        'qua': "",
        'qui': "",
        'sex': ""
    };
    var j=0;
    for(i in week){
        week[i] = { 
            'carne':    menu[j][0],
            'carbo1':   menu[j][1],
            'carbo2':   menu[j][2],
            'carbo3':   menu[j][3],
            'salada':   menu[j][4],
            'sobremesa':menu[j][5]
        }
        j++;
    }
    return week;
}

/******************
Events functions declarations
*******************/
function getData(data) {
    var table = $(data+":last-child").find("table#alter").html();
    table = table.replace(/(&nbsp;|\\n)/g, "");
    var days=0;
    var week = new Array();
    for(var i=0;i<6;i++) week[i] = new Array();
    i = 0;
    while(days<4){
        row = $(table).find("tbody tr td:eq("+ i +")").text();
        row = row.split("\n");

        if(row.length == 1 || row.length == 0){
            i++;
            continue;
        }
        for(j in row){
            if(row[j].length == 1 || row[j].length == 0){
                continue;
            }
            else{
                week[days].push(row[j]);
            }
        }
        i++;
        days++;
    }
    return clearResult(week);
}

$(document).ready(function(){

    $(".logo, .label").click(function(){
        self.port.emit("click");
    });


    /**
    * Signal coming from lib ru_request
    * msg contains the RU menu in HTML style.
    */
    self.port.on("wash", function(msg) {
        var res = getData(msg);
        self.port.emit("clean", res);
    });

});
