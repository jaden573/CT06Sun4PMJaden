let r = 220
let g = 220
let b = 220
let countdownTimer = 60
let countdownID;
let userinput;
let inputb;
let usertext = "userinput";
let tex = "inputb";
let bgcolorpicker
let rectolourpick;
let textcolourpick;
function setup(){
    createCanvas(400,400)
    userinput = createInput();
    userinput.position(width/2 - 90, 600)
    userinput.input(updateText);
    inputb = createInput();
    inputb.position(width/2 - 90, 625)
    inputb.input(updateTex)
    bgcolorpicker = createColorPicker(220);
    bgcolorpicker.position(width/2 - 90, height+250)
    rectolourpick = createColorPicker(220)
    rectolourpick.position(width/2 - 90, height + 275)
    textcolourpick = createColorPicker(220);
    textcolourpick.position(width/2 - 90, height + 295)
}
function draw(){
    background(bgcolorpicker.value())
    rect(100,150,200,90,50)
    fill(rectolourpick.value());
    textSize(24)
    textAlign(CENTER,CENTER)
    fill(textcolourpick.value())
    text(usertext,width/2,height/2)
    text(tex, width/2, height/2 + 25)
    textSize(12)
    text("Enter name", 50, height-70)
    text("Age", 50, height-45)
    
}

function updateText(){
    usertext = this.value()}

function updateTex(){
    tex = this.value()}



    
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
