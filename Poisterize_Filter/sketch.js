let img;

function preload() {
  // Load the image
  img = loadImage('bathspa image.jpg');
}

function setup() {
  createCanvas(800, 600);
  // Set the image to the canvas size
  img.resize(width, height);
}

function draw() {
  // Background color
  background(255);
  
  // Apply posterize effect
  let levels = 4; // Change this value to increase or decrease the effect
  let newImage = createImage(img.width, img.height);
  
  newImage.loadPixels();
  img.loadPixels();

  for (let i = 0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i];
    let g = img.pixels[i + 1];
    let b = img.pixels[i + 2];

    // Posterizing colors
    r = floor(r / (256 / levels)) * (256 / levels);
    g = floor(g / (256 / levels)) * (256 / levels);
    b = floor(b / (256 / levels)) * (256 / levels);

    newImage.pixels[i] = r;
    newImage.pixels[i + 1] = g;
    newImage.pixels[i + 2] = b;
    newImage.pixels[i + 3] = img.pixels[i + 3]; // Alpha channel
  }

  newImage.updatePixels();
  
  // Display the modified image
  image(newImage, 0, 0);
}
