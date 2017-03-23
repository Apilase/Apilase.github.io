var _LoadingHtml = '<div id="loading" class="ele-box"><div class="ele-container">'+
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
'</div></div>';

//呈现loading效果
//$(document.body).append(_LoadingHtml);
//var txt = document.createTextNode(_LoadingHtml);
//document.body.appendChild(txt);
document.write(_LoadingHtml);
//监听加载状态改变
document.onreadystatechange = completeLoading;
//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        var loadingMask = document.getElementById('loading');
       //$("#loadingDiv").hide();
        loadingMask.parentNode.removeChild(loadingMask);
    }
}
// function loadingShow() {
    // $("#loadingDiv").show();
// }
// function loadingHide() {
    // $("#loadingDiv").hide();
// }
/*****************日期转换*******************/
function formatedate(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
}
function formatetime(time) {
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    return (h < 10 ? ('0' + h) : h) + ':' + (m < 10 ? ('0' + m) : m) + ':' + (s < 10 ? ('0' + s) : s);
}
function ShowTime(value, rowData, rowIndex) {
    try {
        var NewDtime = new Date(parseInt(value.slice(6, 19)));
        value = formatedate(NewDtime) + " " + formatetime(NewDtime);
    }
    catch (e) { }
    return value;
}
function ShowTime2(value, rowData, rowIndex) {
    try {
        var NewDtime = new Date(parseInt(value.slice(6, 19)));
        value = formatetime(NewDtime);
    }
    catch (e) { }
    value = value.substring(0,5);
    return value;
}
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
////////////////////////////////////////////////////////////////////////////
//审核状态
function getSHstatus(status) {
    var s = "";
    switch (status) {
        case 0: s = "未审核";
            break;
        case 1: s = "通过审核";
            break;
        case 3: s = "审核中";
            break;
        case 2: s = "未通过审核";
            break;
        case 4: s = "上传失败";
            break;
        default: s = "错误";
            break;
    }
    return s;
}