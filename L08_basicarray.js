let favfood = ["potato chip", "Ramen", "Pizza", "chicken rice", "skittles"];
let yPOS = 400
function setup(){
    createCanvas(400,400)
    background(220)
}
function draw(){
textSize(20);
fill(100)
textAlign(LEFT);
// text("hi" ,0,200);
// text("jaden" ,50,50);
// text("15" , 50,100);
// text("gaming" , 50, 150);
text("my favourite food:", 50,50)
for(let i=0; i<favfood.length; i++){
    text((i+1) + "." + favfood[i],yPOS + i*20)
}
yPOS-=0.6
}