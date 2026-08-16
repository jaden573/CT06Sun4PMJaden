// write your codes here
let r,g,b;
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
    background(220);
    console.log("key:",key);
    console.log("keycode:",keyCode);
}
// function draw(){
//     background(220);
//     if(key === 'x' || key === 'X'){

//     }
//     if(key === 'c' || key === 'C'){
//         circle(x,y,size);}
//     if(key === 's' || key === 'S'){
//     square(x,y,size)}
//         if(key ==='t' || key === 'T'){
//             triangle(x1,y1,x2,y2,x3,y3)
//         }
// }
function draw(){
    circle(300,200,50)
    fill()
}
function keyPressed(){
    if(keyCode === '38'){
        
        
    }
    if(keyCode === '40')
       
        r=0
        g=0
        b=0
}