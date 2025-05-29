let img; // Declare variable 'img'

function preload() {
  img = loadImage('bathspa image.jpg'); // Load the image
}

function setup() {
  createCanvas(800, 600); // Create canvas size
}

function draw() {
  background(200); // Set background color
  image(img, 0, 0); // Display the image at coordinates (0,0)
}
