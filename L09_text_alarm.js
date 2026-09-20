// write your codes here
// let x = 0
// let y = 0
// let speed = 2
let bgsound
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
    background(220)

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
            setInterval(alarm,500);
            }
        }
function alarm(){
    
}