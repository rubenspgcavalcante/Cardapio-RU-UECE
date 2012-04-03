self.port.on("loading", function(){
	$(".logo").attr("src", "../images/loader.gif");
});

self.port.on("loaded", function(){
	$(".logo").attr("src", "../images/logo16.png");
});