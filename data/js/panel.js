self.port.on("setMenu", function(menu) {
	if(menu == null){
		$(".info-block span").html("Não definido");
	}

	for(i in menu){
		$("#" + i + " .info-block span").html(menu[i]);
	}

});