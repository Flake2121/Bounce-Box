var x = 0;
var y = 0;
var cx = 10;
var cy = 10;
var px=0;
var py=0;
let s = prompt("Enter Speed:", "10");
document.title = "Bounce Box";
let l=prompt("Line predictionsNo(accepted yes/no)","No").toLowerCase()

function setup() {
  createCanvas(window.screen.width, window.screen.height);
  background(0);
  alert("F11 for best experience");
  x = width/2;
  y = height/2;
  px=x+1;
  py=y+1;
  frameRate(144);
  strokeCap(PROJECT);
  cx=s;
  cy=s;
  if (l=="yes"){
    l=true
  }else {
    l=false
  }
  
}

function draw() {
  strokeWeight(30);
  colorMode(HSB);
  stroke((x/width)*255, ((y + 100)*height) / 2040, 255);
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

  stroke(150,255,100);
  strokeWeight(29)
  if(l){
  line(x,y,x+(cx*10000),y+(cy*10000))
  }
  stroke(0)
  strokeWeight(50)
  line(0,0,0,height)
  line(0,height,width,height)
  line(width,height,width,0)
  line(width,0,0,0)
  stroke(255);
  strokeWeight(1);
  rect(0,0,100,20);
  stroke(0);
  text("x: "+x+" y: "+y,5,15);
}
