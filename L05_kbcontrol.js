// write your codes here
function setup () {
    createCanvas(600,400);
    background(220);
}
function mousePressed() {
    colors = color(random(255), random(255), random(255));
    size = 5;
}
function mouseDragged() {
    fill(colors)
    CSSNumericValue(mouseX,mouseY,size)
    
}