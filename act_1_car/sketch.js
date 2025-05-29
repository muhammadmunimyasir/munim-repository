function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Car body
  fill(255, 0, 0); // Red color for the car body
  rect(100, 200, 200, 50); // Car body (main part)

  // Car roof
  fill(200, 0, 0); // Darker red for the roof
  rect(130, 170, 140, 40); // Car roof (smaller part)

  // Windows (2 rectangular windows on the roof)
  fill(0, 0, 255, 150); // Blue windows with some transparency
  rect(145, 175, 40, 30); // First window
  rect(215, 175, 40, 30); // Second window

  // Car wheels
  fill(0); // Black color for the wheels
  ellipse(130, 250, 40, 40); // Left wheel
  ellipse(270, 250, 40, 40); // Right wheel

  // Car lights
  fill(255, 255, 0); // Yellow for the lights
  ellipse(100, 225, 20, 20); // Left front light
  ellipse(300, 225, 20, 20); // Right front light
}
