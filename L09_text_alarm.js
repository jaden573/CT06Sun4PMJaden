// write your codes here
let x = 0
let y = 0
function setup(){
    createCanvas(600,400)
    background(220)
}
function draw(){
    background(0)
    textSize(20)
    fill(255,0,0)
   
    text("Bounce!",0 + x,200)
    x+=60
    if(x> width - 60||x){
        x-=60
    }
}