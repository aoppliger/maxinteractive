
function setup() {
  createCanvas(400, 400);
  noLoop();
}
function draw() {
  var r = random(0,400);
  background(50);
  noStroke();
  fill(255);
  text("Hi, Interactive Class!", 50, 50);
  text("RandomX", r, 200);
  text("RandomY", 200, r);
  text("Sooo random!", r, r);
}
