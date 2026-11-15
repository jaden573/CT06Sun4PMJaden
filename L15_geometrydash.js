let playerX = 100;
let playerY;
let playerSize = 30;
let velocity = 0;
let isGrounded = false

function setup(){
    createCanvas(600,400);
    textAlign(CENTER,CENTER);
    playery = height - playerSize;
    }


function draw(){
    background(0)
    velocity += 0.8
    playerY += velocity
    
}