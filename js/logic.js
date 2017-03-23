var logic = new Object();
logic.animationFlag = 0;
logic.init = function(){
	var _height = document.documentElement.clientHeight;
	var _mainHeight = _height - 150;
	$("#mainContainer").height(_mainHeight);
}

logic.slideToggle = function(){
	if(logic.animationFlag==0)
	{
		$("#leftMenu").removeClass("pri-left-animation");
		$("#content").removeClass("ctxt-left-animation");
		$("#leftMenu").addClass("pri-right-animation");
		$("#content").addClass("ctxt-right-animation");
		logic.animationFlag = 1;
	}else
	{
		$("#leftMenu").addClass("pri-left-animation");
		$("#content").addClass("ctxt-left-animation");
		$("#leftMenu").removeClass("pri-right-animation");
		$("#content").removeClass("ctxt-right-animation");
		logic.animationFlag = 0;
	}
	
	
}

$(function(){
	logic.init();
});