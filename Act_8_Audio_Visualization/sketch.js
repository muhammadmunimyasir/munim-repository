let sound;
let fft;
let amp;
let playButton;
let isPlaying = false;

function preload() {
  sound = loadSound('beats.mp3'); // Replace with your audio file
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 255);
  fft = new p5.FFT(0.8, 64); // Smoothness, bins
  amp = new p5.Amplitude();
  
  playButton = createButton('▶ Play / Pause');
  playButton.position(20, 20);
  playButton.mousePressed(togglePlay);
}

function draw() {
  background(0, 0.1); // Slight trails
  noStroke();
  
  let spectrum = fft.analyze();
  let level = amp.getLevel();
  let size = map(level, 0, 1, 10, 300);
  
  // Central pulsing circle based on amplitude
  fill(180, 255, 255);
  ellipse(width / 2, height / 2, size, size);
  
  // Draw frequency bars
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    fill(map(i, 0, spectrum.length, 0, 255), 255, 255);
    rect(x, height, width / spectrum.length, h);
  }
}

// Play/Pause toggle
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}
