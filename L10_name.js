let r = 220
let g = 220
let b = 220
let countdownTimer = 60
let countdownID;
let userinput;
let usertext = "ENTER TEXT HERE";
function setup(){
    createCanvas(400,400)
    userinput = createInput();
    userinput.position(width/2)
    userinput.input(updateText);
}
function draw(){
    background(220)
    textSize(24)
    textAlign(CENTER,CENTER)
    text(usertext,width/2,height/2)
    textSize(12)
    text("Enter name", 50, height-70)
}

function updateText(){
    usertext = this.value()
}
// function draw(){
//     background(r,g,b)
//     countdownID = setInterval(countdown,5000);
//     textSize(24)
   
//     text(countdownTimer,width/2,height/2);
// }
// function countdown(){
//     if(countdown>0){
//         countdownTimer--;
//         r = random(0,255)
//         g = random(0,255)
//         b = random(0,255)
//     }else{
//         clearInterval(countdownID)
//     }
// }
