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
    var lastCol = "";
    
    while(days<5){
        col = $(table).find("td p strong:eq("+i+")").parent().parent().text();

        //Searchs untill the selection altered
        if(i != 0 && lastCol == col){
            i++;
            continue;
        }
        //Found a new colune!
        else{
            lastCol = col;
            col = col.split("\n");
        }

        //Ok, is this row empty?...
        if(col.length == 1 || col.length == 0){
            i++;
            continue;
        }
        for(j in col){
            //Alright, let's see if the rows have contents too:
            if(col[j].length == 1 || col[j].length == 0){
                continue;
            }
            else{
                //It's not empty! Push this content in the week list
                week[days].push(col[j]);
            }
        }
        i++;
        days++; //The list in 'days' index is full now! Setting to another day
    }
    return clearResult(week); //It returns in JSON format
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
