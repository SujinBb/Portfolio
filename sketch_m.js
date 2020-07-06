var button;
var _self;

function setup() {
  createCanvas(1280,800);
  background(255);
button1 = createButton('VIDEO')
  button1.mousePressed(LinkClik1);
  button1.position(250,300);
  button1.size(200,150);
 button1.style("font-family", "Impact");
  button1.style("background-color","#fff");
 button1.style("color","#000");
 button1.style('font-size', '30px');
 
 button2 = createButton('ILLUST')
  button2.mousePressed(LinkClik2);
  button2.position(550,300);
  button2.size(200,150);
 button2.style("font-family", "Impact");
  button2.style("background-color","#fff");
 button2.style("color","#000");
 button2.style('font-size', '30px');
 
 button3 = createButton('ART WORK')
  button3.mousePressed(LinkClik3);
  button3.position(850,300);
  button3.size(200,150);
 button3.style("font-family", "Impact");
  button3.style("background-color","#fff");
 button3.style("color","#000");
 button3.style('font-size', '30px');
}
function randomColor() {
  var a = random(0, 255);
  var b = random(0, 255);
  var c = random(0, 255);
  background(a, b, c);

}

function draw() { 
  var d = random(0, 255);
  var e = random(0, 255);
  var f = random(0, 255);
  fill(d,e,f);
  noStroke();
  ellipse(mouseX, mouseY, 40, 40);
 
}
function LinkClik1(){
 window.open("vimeo.html", _self);
}

function LinkClik2(){
 window.open("td.html", _self);
}

function LinkClik3(){
 window.open("mirror.html", _self);
}

