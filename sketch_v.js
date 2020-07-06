var bgColor = 0;
var textColor = 0;
var _self;

function setup() { 
createCanvas(1280,800);
  bgColor = random(255);
  textColor = random(255);
  
 } 
 
 function draw() { 
  background(bgColor);
  fill(textColor);
  textSize(60);
  textAlign(CENTER);
  textFont('Impact');
  text('Go to the Video',620, 390);

   if (frameCount % 50 == 0) {
    bgColor = color(random(255), random(255), random(255));
  	textColor = color(random(255), random(255), random(255));
   }
  }
  
  function mousePressed(){
  window.open("https://vimeo.com/433556505", _self);
}
