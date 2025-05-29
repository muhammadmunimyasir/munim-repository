let y;          
let speed = 0;  
let gravity = 0.2;
let bounce = -5;
let hueVal = 0;

function setup() {
  createCanvas(800, 400);
  colorMode(HSB);           // Use HSB color mode for smooth color shifting
  textFont('Helvetica');
  textSize(64);
  textAlign(CENTER, CENTER);
  y = height / 2;
}

function draw() {
  background(0);            // Black background

  // Update color hue for dynamic effect
  hueVal = (hueVal + 1) % 360;

  // Add a glow effect using a soft ellipse behind the text
  noStroke();
  fill(hueVal, 100, 100, 0.2); // Transparent colored glow
  ellipse(width / 2, y, 250, 100);

  // Draw the text with changing hue
  fill(hueVal, 100, 100);
  text("MINERVA", width / 2, y);

  // Bouncing animation
  speed += gravity;
  y += speed;

  if (y > height / 2) {
    y = height / 2;
    speed = bounce;
  }
}
