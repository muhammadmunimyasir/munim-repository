// Weekly data: [HR, IT, Payroll, Support]
let data = [
  [5000, 7000, 28000, 20000], // Mar 2–8
  [10000, 8000, 52000, 19000], // Mar 9–15
  [12000, 15000, 45000, 24000], // Mar 16–22
  [9000, 6000, 36000, 21000], // Mar 23–29
  [6000, 7000, 39000, 23000], // Mar 30–Apr 5
];

let categories = ['HR', 'IT', 'Payroll', 'Support'];
let colors = ['#007B9E', '#F5C842', '#6A4571', '#9BDA4F'];
let weeks = ['Mar 2–8', 'Mar 9–15', 'Mar 16–22', 'Mar 23–29', 'Mar 30–Apr 5'];

function setup() {
  createCanvas(900, 600);
  textFont('Arial');
  textSize(12);
  noLoop();
}

function draw() {
  background(255);
  fill(0);
  textSize(20);
  text("Operations Cost", 30, 30);

  let margin = 60;
  let chartWidth = width - 2 * margin;
  let chartHeight = height - 150;
  let maxVal = 55000;

  // Draw axes
  stroke(200);
  for (let i = 0; i <= 5; i++) {
    let y = map(i, 0, 5, chartHeight + margin, margin);
    line(margin, y, width - margin, y);
    noStroke();
    fill(100);
    textAlign(RIGHT, CENTER);
    text(i * 10000 + 'K', margin - 10, y);
    stroke(200);
  }

  // Bar chart
  let groupWidth = chartWidth / data.length;
  let barWidth = groupWidth / categories.length;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < categories.length; j++) {
      let val = data[i][j];
      let x = margin + i * groupWidth + j * barWidth;
      let y = map(val, 0, maxVal, chartHeight + margin, margin);
      let h = chartHeight + margin - y;

      fill(colors[j]);
      noStroke();
      rect(x, y, barWidth - 5, h);

      // Red circle marker on top of each bar
      stroke('red');
      strokeWeight(2);
      noFill();
      ellipse(x + (barWidth - 5) / 2, y, 10);
    }

    // Draw week labels
    noStroke();
    fill(50);
    textAlign(CENTER);
    text(weeks[i], margin + i * groupWidth + groupWidth / 2, height - 40);
  }

  // Draw legend
  for (let i = 0; i < categories.length; i++) {
    fill(colors[i]);
    rect(700, 50 + i * 25, 15, 15);
    fill(0);
    noStroke();
    textAlign(LEFT, CENTER);
    text(categories[i], 720, 57 + i * 25);
  }
}
