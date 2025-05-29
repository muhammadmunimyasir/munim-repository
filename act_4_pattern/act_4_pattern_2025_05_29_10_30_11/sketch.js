// Declare a variable to hold the image
let img;

function preload() {
  // Load the image (make sure to provide the correct path to the image)
  img = loadImage('pattern image.jpg'); // Replace with the path to your image
}

function setup() {
  // Create a canvas
  createCanvas(800, 600);
}

function draw() {
  // Set background color
  background(255);
  
  // Display the image on the canvas
  image(img, 0, 0, width, height); // Adjust size as needed
}
