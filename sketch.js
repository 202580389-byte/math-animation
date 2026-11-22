let centerX = 300;
let centerY = 235;
let horizontalRadius = 200;
let verticalRadius = 120;
let currentAngle = 0;
let angularSpeed = 0.03;
let isPaused = false;

function setup() {
  let cnv = createCanvas(600, 430);
  cnv.parent("canvas-holder");

  // Keyboard controls for Pause/Resume (SPACE) and Speed (W/S)
  window.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
      event.preventDefault();
      isPaused = !isPaused;
    } else if (event.key === "w" || event.key === "W") {
      angularSpeed += 0.01;
    } else if (event.key === "s" || event.key === "S") {
      angularSpeed = max(0.01, angularSpeed - 0.01);
    }
  });
}

function draw() {
  background(20, 28, 45);

  noFill();
  stroke(90, 110, 140);
  ellipse(centerX, centerY, horizontalRadius * 2, verticalRadius * 2);

  fill(255, 200, 0);
  noStroke();
  circle(centerX, centerY, 14);

  // Calculate elliptical (x, y) position using cosine and sine
  let orbiterX = centerX + horizontalRadius * cos(currentAngle);
  let orbiterY = centerY + verticalRadius * sin(currentAngle);

  stroke(100, 200, 255);
  line(centerX, centerY, orbiterX, orbiterY);

  fill(56, 189, 248);
  noStroke();
  circle(orbiterX, orbiterY, 22);

  // Increment angle each frame to animate the orbit
  if (!isPaused) {
    currentAngle += angularSpeed;
  }

  fill(255);
  textSize(14);
  text("Controls: [SPACE] Pause/Resume  |  [W] Faster  |  [S] Slower", 18, 22);
  text("Center: (" + centerX + ", " + centerY + ")  |  Radius: a = " + horizontalRadius + " px, b = " + verticalRadius + " px", 18, 44);
  text("Angle (θ): " + currentAngle.toFixed(2) + " rad  |  Speed: " + angularSpeed.toFixed(2), 18, 66);
  text("Position: (" + round(orbiterX) + ", " + round(orbiterY) + ")", 18, 88);
}
