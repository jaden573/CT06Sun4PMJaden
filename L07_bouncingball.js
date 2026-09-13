let pico, popSound;
let x = 0;
let y = 175;
let picowidth = 100;
let ballx = 100
let bally = 50
let ballspeed = 30
let ballsize=10
let r = 100
let g = 100
let b = 100
 function preload(){
     pico = loadImage('assets/pico-a.png');
     popSound = loadSound('assets/pop.mp3');
 }
// function setup (){
//     createCanvas(400,400);
//     background(220);
// }
// function draw(){
//     background(220);
//     if(keyIsDown(LEFT_ARROW)){
//         x-=3;
//     }
//     if(keyIsDown(RIGHT_ARROW)){
//         x+=3;
//     }
//     if(keyIsDown(UP_ARROW)){
//         y-=3;
//     }
//     if(keyIsDown(DOWN_ARROW)){
//         y+=3;
//     }
//     image(pico,x,y,picowidth,100);
//     }
//   function keyPressed(){
//         if(key=== " "){
//             picowidth /=2;
//             popSound.loop ();
//         }
//     }
function setup(){
    createCanvas(600,400);
    popSound.play();
    background(220);
}
// function draw(){
//     noStroke();
//     if(!trail)(background(220);}
//     circle(ballx,bally,ballsize)
//     ballx += ballspeed
//     bally +=ballspeed
//     if(ballx + (ballsize/2) >= width || ballx - (ballsize/2)<=0){
//         ballspeedx = -ballspeedx
//         if(colorchange){
//             r = random(255);g = random(255); b = random(255);
//         }
//         FileList(r,g,b)
//     }
// if(bally)
// function draw(){
//     square(x,y,50)
//     fill(r,g,b)
//     x+=ballspeed
//     if(x<0 || x>575){
//         x-=ballspeed
//         r=random(255);
//         g=random(255);
//         b=random(255);
//     }
// }
function draw(){
    background(220)
    fill(r,g,b)

}