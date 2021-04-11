var hr,mn,sec;
var scAngle;
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);
  translate(200,200);
  hr = hour();
  mn = minute();
  sec = second();
  angleMode(DEGREES);
  scAngle = map(sec,0,60,0,360);
  push()
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,90,0)
  pop()

  hrAngle = map(hr%12,0,12,0,360);
  push()
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,40,0)
  pop()
  
  mnAngle = map(mn,0,60,0,360);
  push()
  rotate(mnAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,60,0)
  pop()
  noFill();
  arc(0,0,180,180,-90,scAngle-60,OPEN)
  stroke(255,0,0);
  strokeWeight(7)
  arc(0,0,200,200,-90,mnAngle-60,OPEN)
  stroke(0,255,0);
  strokeWeight(7)
  arc(0,0,220,220,-90,hrAngle-60,OPEN)
  stroke(0,0,255);
  strokeWeight(7);
}