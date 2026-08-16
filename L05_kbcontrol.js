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
    background(220);
    let numCircles = floor(random(5,21))
    for(let i=0; i < numCircles;i++){
        let x = random(width)
        let y = random(height)
        let size = random(5,40)
        fill(random(255),random(255),random(255))
        circle(x,y,size);
    }
}
function keyReleased(){
    beckground(220);

}
function draw(){
    if(key === 'c' || key === 'C'){
        circle(100,100,80);}
    if(key === 's' || key === 'S'){
    square(60,60,80)}
        if(key ==='t' || key === 'T'){
            triangle(100,)
        }




}
