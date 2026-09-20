// write your codes here
// let x = 0
// let y = 0
// let speed = 2
let bgsound
let coloR = 220;
let coloB = 220;
let coloG = 220;
let alarminterval;
function preload(){
    bgsound = loadSound('assets/bossaNova.mp3'); 
}
function setup(){
    createCanvas(600,400)
    background(220)
}
// function draw(){
//     background(0)
//     textSize(20)
//     fill(255,0,0)
   
//     text("Bounce!",x ,200)
//     x+=speed
//     if(x< width - 60||x-60>0){
//         speed = -speed
//     }
//     let h = hour();
//     let m = minute();
//     let s = second();
//     let string = nf(h,2) + nf(m,2) + nf(s,2);
//     textSize(32)
//     fill("gold")
//     text(string,100,200);
// }

let countdown = 5
function draw(){
    background(coloR,coloG,coloB)

    textSize(32)
    text("Click to start countdown", width / 2, height - 50)

    textSize(100)
    text(countdown, width/2, height/2)
}

function mousePressed(){
    interval = setInterval(updateCountdown, 1000)
   
}
 function updateCountdown(){
        if (countdown > 0) {
            countdown -= 1;
        } else{
            clearInterval(interval);
            alarminterval = setInterval(alarm,500);
            }
        }
function alarm(){
    coloR = random(220);
    coloG = random(220);
    coloB = random(220);
    bgsound.play
}

if(key === ' '){
    countdown = 5
    
    coloR = 220;
    coloB = 220;
    coloG = 220;
    coloB;
    clear
}
