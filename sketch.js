var showName = false;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(20, 20, 40);

  // Moon (follows mouse)
  noStroke();
  fill(200, 200, 255);
  ellipse(mouseX, mouseY, 120, 120);

  // Portal (glowing effect)
  fill(60, 0, 100, 150);
  stroke(random(150, 255), 0, 255);
  strokeWeight(4);
  rect(200, 200, 100, 200);

  // Gia silhouette
  fill(0);
  stroke(150, 0, 150);
  triangle(250, 180, 220, 300, 280, 300);

  // Ground
  stroke(100);
  line(0, 300, 500, 300);

  // Show name only after click
  if (showName) {
    fill(200);
    textSize(70);
    text("Gia Vey", 125, 250);
  }
}

function mousePressed() {
  showName = true;
}