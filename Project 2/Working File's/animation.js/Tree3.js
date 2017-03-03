function setup(){
  var myCanvas =  createCanvas(400, 500);
  myCanvas.parent('Tree3');
  background (179, 231, 255);
  noStroke();
}

var t = 127;
var c = 0;

function draw(){
  if (c <= t) {
    fill(114, 231, 55);
    triangle(0, 300, 400, 300, 200, 150);
  } else {
    fill(179, 231, 255);
    triangle(0, 300, 400, 300, 200, 150);
  }
  if (c <= t) {
    fill(114, 231, 55);
    triangle(20, 245, 375, 245, 200, 90);
  } else {
    fill(179, 231, 255);
    triangle(20, 245, 375, 245, 200, 90);
  }
  if (c <= t) {
    fill(114, 231, 55);
    triangle(50, 190, 350, 190, 200, 90);
  } else {
    fill(179, 231, 255);
    triangle(50, 190, 350, 190, 200, 90);
  }
  if (c <= t) {
    fill(114, 231, 55);
    triangle(80, 150, 320, 150, 200, 50);
  } else {
    fill(179, 231, 255);
    triangle(80, 150, 320, 150, 200, 50);
  }
  if (c <= t) {
    fill(114, 231, 55);
    triangle(115, 100, 285, 100, 200, 0);
  } else {
    fill(179, 231, 255);
    triangle(115, 100, 285, 100, 200, 0);
  }
  
  if (c <= t) {
    fill (77, 51, 25);
    rect (175, 300, 50, 200);
  } else {
    fill (77, 51, 25);
    rect (175, 200, 50, 300);
    fill(255);
  }
  
  c = c + 1;
}