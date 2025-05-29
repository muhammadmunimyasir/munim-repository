let particles = [];

function setup() {
  createCanvas(800, 600);
  noStroke();
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(20, 30, 40, 100); // Slight transparency for trailing effect

  for (let p of particles) {
    p.update();
    p.display();
  }

  // Add title text
  fill(255);
  textSize(28);
  textAlign(CENTER);
  text("Interactive Flow", width / 2, 40);
}

// Particle class to handle each particle's behavior
class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(5, 15);
    this.speed = random(1, 3);
    this.angle = random(TWO_PI);
    this.color = color(random(100, 255), random(100, 255), random(100, 255), 180);
  }

  update() {
    // Natural floating motion
    this.x += cos(this.angle) * this.speed * 0.5;
    this.y += sin(this.angle) * this.speed * 0.5;

    // Interaction with mouse
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    let distance = dist(this.x, this.y, mouseX, mouseY);

    if (distance < 150) {
      this.x += dx * 0.01;
      this.y += dy * 0.01;
      this.size = map(distance, 0, 150, 25, 5);
    } else {
      this.size = 5;
    }

    // Wrap around screen edges
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
}
