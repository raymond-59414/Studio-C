var user = document.getElementById('cyn');
var mark = document.getElementById('kev');
var code = document.getElementById('ray');
var grap = document.getElementById('ama');
var cont = document.getElementById('bri');

user.addEventListener('click', function() {
	document.getElementById('usability_depart').style.display = "block";
	document.getElementById('marketing_depart').style.display = "none";
	document.getElementById('code_depart').style.display = "none";
	document.getElementById('graphic_depart').style.display = "none";
	document.getElementById('content_depart').style.display = "none";

});
mark.addEventListener('click', function() {
	document.getElementById('usability_depart').style.display = "none";
	document.getElementById('marketing_depart').style.display = "block";
	document.getElementById('code_depart').style.display = "none";
	document.getElementById('graphic_depart').style.display = "none";
	document.getElementById('content_depart').style.display = "none";
});
code.addEventListener('click', function() {
	document.getElementById('usability_depart').style.display = "none";
	document.getElementById('marketing_depart').style.display = "none";
	document.getElementById('code_depart').style.display = "block";
	document.getElementById('graphic_depart').style.display = "none";
	document.getElementById('content_depart').style.display = "none";
});
grap.addEventListener('click', function() {
	document.getElementById('usability_depart').style.display = "none";
	document.getElementById('marketing_depart').style.display = "none";
	document.getElementById('code_depart').style.display = "none";
	document.getElementById('graphic_depart').style.display = "block";
	document.getElementById('content_depart').style.display = "none";
});
cont.addEventListener('click', function() {
	document.getElementById('usability_depart').style.display = "none";
	document.getElementById('marketing_depart').style.display = "none";
	document.getElementById('code_depart').style.display = "none";
	document.getElementById('graphic_depart').style.display = "none";
	document.getElementById('content_depart').style.display = "block";
});