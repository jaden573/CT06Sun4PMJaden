let GameOver = false;
let rectX = 300;
let rectY = 360;
const rectSize = 40;

let starX = [];
let starY = [];
let starSize = [];
let starSpeed = [];
let numStars = 10;
let score = 0;
let osc
let audioStarted = false

function setup() {
  createCanvas(600, 400);
  
  // Initialize star properties
  for (let i = 0; i < numStars; i++) {
    starX.push(random(width));
    starY.push(random(-300, -50));
    starSize.push(random(10, 20));
    starSpeed.push(random(1, 3));
  }
  osc = new p5.Oscillator();
  osc.start();
  osc.amp(0)
}

function draw() {
  background(0);

  if (!GameOver) {
    // 1. Move and Draw Stars
    for (let i = 0; i < numStars; i++) {
      fill(255, 255, 0);
      noStroke();
      ellipse(starX[i], starY[i], starSize[i]);
      
      // Move star down
      starY[i] += starSpeed[i];
      
      // Reset star when it falls past the canvas bottom height
      if (starY[i] > height) { 
        starY[i] = random(-200, -50);
        starX[i] = random(width);
        starSpeed[i] = random(2, 5);
        score++;
      }
      
      // 2. Collision Detection (Accurate bounding box overlap)
      let starRadius = starSize[i] / 2;
      if (starY[i] + starRadius >= rectY && 
          starX[i] + starRadius >= rectX && 
          starX[i] - starRadius <= rectX + rectSize) {
        GameOver = true;
      }
    }

    // 3. Player Movement & Constraints
    if (keyIsDown(LEFT_ARROW)) {
      rectX -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      rectX += 5;
    }
    rectX = constrain(rectX, 0, width - rectSize);
  }

  // 4. Draw Player Square
  fill(255);
  rect(rectX, rectY, rectSize, rectSize);

  // 5. Game Over Overlay UI
  if (GameOver) {
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    
    textSize(42);
    text("GAME OVER", width / 2, height / 2 - 20);
    
    fill(255);
    textSize(20);
    text("Final Score: " + score, width / 2, height / 2 + 30);
  }
}

function mousePressed(){
    if(!audioStarted){
        
    }
}