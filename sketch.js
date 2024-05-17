var x = 0;
var y = 0;
var cx = 1
var cy = 1
function setup() {
  createCanvas(window.screen.width, window.screen.height);
  background(0);
  x = width / 2;
  y = height / 2;
}

function draw() {
  noStroke();
  //background(220);
  colorMode(HSB);
  fill(x, (y + 200) / 8, 255);
  ellipse(x, y, 30, 30);
  if (y + cy >= height - 15 || y + cy <= 15) {
    cy *= -1;
  }
  if (x + cx >= width - 15 || x + cx <= 15) {
    cx *= -1;
  }
  x += cx;
  y += cy;
}
