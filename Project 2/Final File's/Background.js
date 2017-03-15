var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2;

function setup(){
  var myCanvas =  createCanvas(windowWidth, windowHeight);
  myCanvas.parent('canvas-container');
  b1 = color(100);
  b2 = color(20);
  setGradient(0, 0, width, height, b2, b1, Y_AXIS);
}

function draw(){
  noStroke();
  var x = mouseX;
  var y = mouseY;
  if(mouseIsPressed){
    ellipse(x, y, 140, 140);
    fill (128, 221, 255, 80);
    blendMode(BLEND);
  }
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(b2, b1, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  } 
}