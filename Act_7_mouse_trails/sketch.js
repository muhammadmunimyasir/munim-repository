let trail = [];

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(0, 20); // Slight transparency creates fading effect

  // Add current mouse position to trail
  trail.push({ x: mouseX, y: mouseY });

  // Limit trail length
  if (trail.length > 50) {
    trail.shift();
  }

  // Draw the trail
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    let alpha = map(i, 0, trail.length, 0, 255); // Fading effect
    fill(255, alpha);
    ellipse(pos.x, pos.y, 20, 20);
  }
}
