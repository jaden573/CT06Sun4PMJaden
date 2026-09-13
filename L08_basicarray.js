let favfood = ["potato chip", "Ramen", "Pizza", "chicken rice", "skittles"];
let yPOS = 400
let lineGap = 30;
let bgSound
function preload(){
    bgSound = loadSound('assets/star_wars_theme')
}
function setup(){
    createCanvas(400,400)
 
}
function draw(){
       background(220)
textSize(20);
fill(100)
textAlign(LEFT);
// text("hi" ,0,200);
// text("jaden" ,50,50);
// text("15" , 50,100);
// text("gaming" , 50, 150);
text("my favourite food:", 50,50)
for(let i=0; i<favfood.length; i++){
    text((i+1) + "." + favfood[i],200,yPOS+30 + i*lineGap)
}
yPOS-=0.6

if(yPOS< -favfood.length * lineGap){
    yPOS = height
}
}