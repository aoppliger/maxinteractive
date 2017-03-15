function setup(){
  var myCanvas =  createCanvas(windowWidth, windowHeight);
  myCanvas.parent('canvas-container');
  background(124);
}

function draw(){
  var x = mouseX;
  var y = mouseY;
  if(mouseIsPressed){
    ellipse(x, y, 80, 80);
    fill (128, 221, 255);
    noStroke();
    blendMode(DIFFERENCE);
  }
}