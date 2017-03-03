function setup() {
  background(179, 231, 255);
  var myCanvas =  createCanvas(windowWidth, windowHeight);
  myCanvas.parent('canvas-container');
	noStroke();
	rectMode(CENTER);
	frameRate(30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw(){
document.onmousemove = (function() {
  var onmousestop = function() {
    ellipse (mouseX, mouseY, i, i);
    i = i+1;
  }, thread;

  return function() {
    clearTimeout(thread);
    thread = setTimeout(onmousestop, 500);
  };
})();
}