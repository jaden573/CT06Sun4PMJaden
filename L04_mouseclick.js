// write your codes here
let shapecolour = 'blue'

function setup(){
    createCanvas(600,400);
    background(220);
}

function draw(){
    fill(shapecolour);
    circle(300,200,100);
}

function mousePressed(){
    shapecolour = 'red';
    function draw(){
        circle(300, 300,100)
    }
}

function mouseReleased(){
    shapecolour = 'blue'
}