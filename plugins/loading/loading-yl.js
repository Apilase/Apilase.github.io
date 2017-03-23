var _LoadingHtml = '<div id="loadingDiv" style="position:relative;z-index:2200;top:0px"><div id="coverCloth" style="position:fixed;background-color:#fff;opacity:1;top:0px"></div>'+
    '<div id="sk" class="sk-circle">' +
    '<div class="sk-circle1 sk-child"></div>' +
    '<div class="sk-circle2 sk-child"></div>' +
    '<div class="sk-circle3 sk-child"></div>' +
    '<div class="sk-circle4 sk-child"></div>' +
    '<div class="sk-circle5 sk-child"></div>' +
    '<div class="sk-circle6 sk-child"></div>' +
    '<div class="sk-circle7 sk-child"></div>' +
    '<div class="sk-circle8 sk-child"></div>' +
    '<div class="sk-circle9 sk-child"></div>' +
    '<div class="sk-circle10 sk-child"></div>' +
    '<div class="sk-circle11 sk-child"></div>' +
    '<div class="sk-circle12 sk-child"></div>' +
  '</div></div>';

//呈现loading效果
//$(document.body).append(_LoadingHtml);
//var txt = document.createTextNode(_LoadingHtml);
//document.body.appendChild(txt);
document.write(_LoadingHtml);
document.getElementById("coverCloth").style.width = document.documentElement.clientWidth +"px";
document.getElementById("coverCloth").style.height = document.documentElement.clientHeight + "px";
document.getElementById("sk").style.top = (document.documentElement.clientHeight * 0.5 - 60) + "px";
//监听加载状态改变
document.onreadystatechange = completeLoading;

//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        //var loadingMask = document.getElementById('loadingDiv');
        completeok();
        $("#loadingDiv").hide();
        //loadingMask.parentNode.removeChild(loadingMask);
    }
}
function loadingShow() {
    $("#loadingDiv").show();
}
function loadingHide() {
    $("#loadingDiv").hide();
}