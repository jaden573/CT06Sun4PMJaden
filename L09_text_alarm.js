// write your codes here
let x = 0
let y = 0
let speed = 2
function setup(){
    createCanvas(600,400)
    background(220)
}
function draw(){
    background(0)
    textSize(20)
    fill(255,0,0)
   
    text("Bounce!",0 + x,200)
    x+=speed
    if(x< width - 60||x-60>0){
        speed = -speed
    }
    let h = hour();
    let m = minute();
    let s = second();
    let string = nf(h,2) + nf(m,2) + nf(s,2);
    textSize(32)
    text(string,100,200);
}
