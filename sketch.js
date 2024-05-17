var x = 0;
var y = 0;
var cx = 10;
var cy = 10;
var px=0;
var py=0;


function setup() {
  createCanvas(window.screen.width, window.screen.height);
  background(0);
  x = (width / 2)+1;
  y = (height / 2)+1;
  px=x-2
  py=y-2
  frameRate(144);
  strokeCap(PROJECT);
}

function draw() {
  strokeWeight(30);
  colorMode(HSB);
  stroke((x/width)*255, ((y + 200)*height) / 2040, 255);
  line(px,py,x,y);
  if (y + cy >= height - 15 || y + cy <= 15) {
    cy *= -1;
    
  }
  if (x + cx >= width - 15 || x + cx <= 15) {
    cx *= -1;
  }
  py=y;
  px=x;
  x += cx;
  y += cy;
  
}
