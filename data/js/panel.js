self.port.on("setMenu", function(menu) {
	//If memu or one from indexs isn't set
	if(menu == null || menu['carne']== null){
		$(".info-block span").html("Não definido");
	}
	else{
		for(i in menu){
			$("#" + i + " .info-block span").html(menu[i]);
		}
	}
	if($(".info-block").css("opacity")==0){
		$(".info-block").animate({
	        opacity: 1,
		    }, 700);
	}
});

$(document).ready(function(){
	// Selecting today
	var time = new Date();
	$("#days #day-"+time.getDay()).attr("selected", true);

	$("#days").change(function(event){
	    var select = $(event.target+":selected").val();
		self.port.emit("day-change", select);
	});

	$("#close").click(function(){
		self.port.emit("close-panel");
	});
});