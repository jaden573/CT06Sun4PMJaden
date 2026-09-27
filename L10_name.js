let r = 220
let g = 220
let b = 220
let countdownTimer = 60
let countdownID;

function setup(){
    createCanvas(400,400)
    background(220)
}
let countdown;
function draw(){
    background(r,g,b)
    countdownID = setInterval(countdown,1000);
}
function countdown(){
    if(countdown>0){
        countdownTimer--;
    }else{
        clearInterval
    }
}