// write your codes here
let shapecolour = 'blue'

function setup(){
    createCanvas(600,400);
    background(220);
}

function draw(){
    fill(shapecolour);
    circle(300,200,100);
    //random(); -> generate a num between 0 and 1
    //random(one number); ->generate num between 0 and the number
    //random(low num, high num); -> gen num between low and high num
    //fill(r,g,b); between 0 and 255
    
}

function mousePressed(){
    shapecolour = color(random(255),random(255),random(255));
    circle(random)
}

function mouseReleased(){
    shapecolour = color(random(255),random(255),random(255));
}