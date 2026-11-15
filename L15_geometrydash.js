// let circleX = [100,200,300]
// let circleY = [50,100,150]
// let circlespeed = []
// let circlecolour = []
// let numCircle = 3
// let circleSize = 50

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