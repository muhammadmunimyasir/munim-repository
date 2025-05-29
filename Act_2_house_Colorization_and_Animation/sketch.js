let smokeY = 150;
let hueVal = 0;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  // Animated background: cycle through hues
  background(hueVal, 30, 90);
  hueVal = (hueVal + 0.2) % 360;

  drawHouse();
  drawSmoke();

  // Animate smoke rising
  smokeY -= 0.5;
  if (smokeY < 50) {
    smokeY = 150;
  }
}

function drawHouse() {
  stroke(0);
  strokeWeight(2);
  fill(35, 80, 90); // House color

  // House body
  rect(100, 150, 200, 150);

  // Roof
  fill(20, 100, 80);
  triangle(100, 150, 200, 50, 300, 150);

  // Door
  fill(0, 0, 90);
  rect(170, 230, 30, 70);
  fill(0);
  ellipse(185, 265, 5, 5); // Door knob

  // Window
  fill(200, 20, 95);
  rect(210, 160, 40, 40);
  line(230, 160, 230, 200); // Vertical divider
  line(210, 180, 250, 180); // Horizontal divider

  // Chimney
  fill(10, 80, 60);
  rect(270, 100, 20, 50);
}

function drawSmoke() {
  noStroke();
  fill(0, 0, 100, 0.2); // Light transparent smoke
  ellipse(280, smokeY, 30, 30);
}
