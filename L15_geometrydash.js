let playerX = 100;
let playerY;
let playerSize = []
let velocity = 3
let circleSize = 50

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