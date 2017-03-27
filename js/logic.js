var logic = new Object();
logic.animationFlag = 0;
logic.init = function(){
	var _height = document.documentElement.clientHeight;
	var _mainHeight = _height - 150;
	$("#mainContainer").height(_mainHeight);
	
	//content补充内容
	var _LoadingHtml = '<div class="ele-container">'+
				'<div class="ele-wrapper">'+
	'<div class="ele-tail"></div>'+
	'<div class="ele-body">'+
	'<div class="ele-head">'+
		'<div class="ele-eyebrows"></div>'+
		'<div class="ele-eyes"></div>'+
		'<div class="ele-mouth"></div>'+
		'<div class="ele-fang-front"></div>'+
		'<div class="ele-fang-back"></div>'+
		'<div class="ele-ear"></div>'+
	  '</div>'+
	'</div>'+
	'<div class="ele-leg-1 ele-leg-back">'+
	  '<div class="ele-foot"></div>'+
	'</div>'+
	'<div class="ele-leg-2 ele-leg-front">'+
	  '<div class="ele-foot"></div>'+
	'</div>'+
	'<div class="ele-leg-3 ele-leg-back">'+
	  '<div class="ele-foot"></div>'+
	'</div>'+
	'<div class="ele-leg-4 ele-leg-front">'+
	  '<div class="ele-foot"></div>'+
	'</div>'+
  '</div>'+
'</div>';
$("#content").html(_LoadingHtml);
}

logic.infoSlideToggle = function(){
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