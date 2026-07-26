// write your codes here
let shapecolour = 'blue'

function setup(){
    createCanvas(600,400);
    background(220);
}

function draw(){
    fill(shapecolour);
    circle(300,200,100);
    //random(); -> generate a num between 0 amd 1
}

function mousePressed(){
    shapecolour = 'red';
}

function mouseReleased(){
    shapecolour = 'blue'
}