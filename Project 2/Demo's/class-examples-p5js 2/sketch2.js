function setup() {
  var myCanvas =   createCanvas(windowWidth, windowHeight);
  myCanvas.parent('canvas-container');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(#000000);
}