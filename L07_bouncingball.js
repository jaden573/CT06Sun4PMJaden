let pico, popSound;
let x = 200;
let y = 200;
let picowidth = 100;
function preload(){
    pico = loadImage('assets/pico-a.png');
    popSound = loadSound('assets/bossaNova.mp3');
}
function setup (){
    createCanvas(400,400);
    background(220);
}
function draw(){
    background(220);
    if(keyIsDown(LEFT_ARROW)){
        x-=3;
    }
    if(keyIsDown(RIGHT_ARROW)){
        x+=3;
    }
    if(keyIsDown(UP_ARROW)){
        y-=3;
    }
    if(keyIsDown(DOWN_ARROW)){
        y+=3;
    }
  
    }
  function keyPressed(){
        if(key=== ""){
            picowidth /=2;
            popSound.play ();
        }
    }