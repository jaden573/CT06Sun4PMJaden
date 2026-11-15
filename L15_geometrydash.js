let playerX = 100;
let playerY;
let playerSize = 30;
let velocity = 0;
let isGrounded = flase

function setup(){
    createCanvas(600,300)
    circlecolour = [color(255,0,0), color(0,255,0),color(0,0,255)]
    for (let i = 0; i < numCircle; i++){
        circlespeed.push(random(1, 3))
    
    }
}

function draw(){
    for(let i = 0; i<numCircle; i++){
        ellipse(circleX,circleY)
    }
}