let pico, popSound;
let x = 200;
let y = 200;
let picowidth = 100;
let ballx = 100
let bally = 50
let ballspeed = 3
// function preload(){
//     pico = loadImage('assets/pico-a.png');
//     popSound = loadSound('assets/pop.mp3');
// }
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
    background(220);
}
function draw(){
    circle(ballx, bally, 10);
    ballx+=ballspeed
    bally-=ballspeed
    if(ballx>500){
        ballx-=random(3)*ballspeed
    }
    if(ballx<100){}
    if(bally>350){
        bally
    }
}
