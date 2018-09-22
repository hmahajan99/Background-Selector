var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");
var rotate = document.getElementById("rotate");

var possibleDir = ["right","left"]; 
var dir = "right";

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setGradient() {
	body.style.background = "linear-gradient(to " + dir + ", " + color1.value	+ ", " + color2.value  + ")";
	css.textContent = "background: " + body.style.background + ";";
}

function setRandomGradient() {
	dir = possibleDir[Math.floor(Math.random() * 2)];
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomGradient);

rotate.addEventListener("click", function(){
	if(dir==="left") dir = "right";
	else dir = "left";
	setGradient();
});