
var font;
var vehicles = [];
var co=0
var x = 3
var speed =12

function preload() {
  font = loadFont('Migaela RUS.otf');
}

function setup() {
  createCanvas(960, 300);
  background(51);
  angleMode(DEGREES);

  // textFont(font);
  // textSize(192);
  // fill(0);
  // noStroke();
  // text('train', 100, 200);

  var points = font.textToPoints('Ankit', 40, 200, 180, {
    sampleFactor: 0.13
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }
}

function draw() {
  background(co);
  co=map(x,-80,400,0,35)

  ellipse(x,1000,0,0);
  if(x>width){speed=-2}
  if(x<0){speed=2}
  x=x+speed
  

  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }



  
}
