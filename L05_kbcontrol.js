// write your codes here
function setup () {
    createCanvas(600,400);
    background(220);
}
function draw(){}
function mousePressed() {
    colors = color(random(255), random(255), random(255));
    size = 80;
}
function mouseDragged() {
    fill(colors)
    circle(mouseX,mouseY,size)
    size-=0.5
}