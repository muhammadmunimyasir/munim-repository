function setup() {
  createCanvas(400, 400);
  background(30);
  noLoop();
  drawAlien(width / 2, height / 2, 1);
}

function drawAlien(x, y, s = 1) {
  push();
  translate(x, y);
  scale(s);

  // Body
  fill(50, 205, 50); // bright green
  ellipse(0, 20, 80, 120);

  // Head
  fill(0, 150, 0);
  ellipse(0, -40, 70, 70);

  // Eyes-white
  fill(255);
  ellipse(-20, -45, 25, 35);
  ellipse(20, -45, 25, 35);

  // Eyes-pupils
  fill(0);
  ellipse(-20, -45, 12, 12);
  ellipse(20, -45, 12, 12);

  // Mouth
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(0, -25, 40, 20, 0, PI);

  // Antenna
  stroke(0, 150, 0);
  strokeWeight(4);
  line(-25, -75, -40, -95);
  line(25, -75, 40, -95);
  fill(0, 255, 0);
  noStroke();
  ellipse(-40, -95, 12, 12);
  ellipse(40, -95, 12, 12);

  pop();
}
