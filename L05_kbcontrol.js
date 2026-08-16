// write your codes here
function setup () {
    createCanvas(600,400);
    background(220);
}
function draw(){}
function mousePressed() {
    colors = color(random(255), random(255), random(255));
    size = 5;
}
function mouseDragged() {
    fill(colors)
    circle(mouseX,mouseY,size)
    size+=0.5
}

//================================================================
function keyPressed () {
    let numCircles = floor(random(5,21))
    for(let i=0; i < numCircles;++1)
        let x = random(width)
        let y = random(height)
        let size = random(5,40)
        fill(random(255),random(255),random(255))
        circle(x,y,size)
}