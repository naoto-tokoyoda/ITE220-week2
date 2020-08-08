// task1
document.getElementById("width").innerHTML = window.innerWidth;
document.getElementById("height").innerHTML = window.innerHeight;

//mouse current location
var locationX = document.getElementById('locationX');
var locationY = document.getElementById('locationY');

function currentMouseLocation(p){
  locationX.innerHTML = p.pageX;
  locationY.innerHTML = p.pageY;
}
addEventListener('mousemove', currentMouseLocation, false);

//refresh the page connecting to onclick in index.html
function refresh(){
	window.location.reload(true);
}

//task2
function changeBackGroundColor(){
	document.getElementById("P1").style.backgroundColor = "lightpink";
}

function appendText(){
	document.getElementById("P3").innerHTML += "<br>Hello ITE220";
}

function showAndHide(){
	var x = document.getElementById("P3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

//task3
document.getElementById("event").onmouseover = function() {mouseOver()};
document.getElementById("event").onmouseout  = function() {mouseOut()};
document.getElementById("event").addEventListener("dblclick", dbClick);
document.getElementById("event").onmousedown = function() {mouseDown()};
document.getElementById("event").onmouseup   = function() {mouseUp()};


function mouseOver() {
	document.getElementById("event").innerHTML = "Mouse Over";
}

function mouseOut() {
	document.getElementById("event").innerHTML = "Mouse Out";
}

function dbClick() {
	document.getElementById("event").innerHTML = "Double Clicked";
}

function mouseDown() {
	document.getElementById("event").innerHTML = "Mouse Down";
}

function mouseUp() {
	document.getElementById("event").innerHTML = "Mouse Up";
}


