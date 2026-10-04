let texinput;
let aniu;

function setup(){
    createCanvas(700,800);

    texinput = createInput();
    texinput.position = (   width/2, 100);
    
    aniu = createButton("click me");
    aniu.position(width/2, 150);







}
function draw(){
    background("white")
    textSize(18)
    textAlign(RIGHT, CENTER)
    text("give me your name", width/2-15, 110);
}
function updatetex(){
    console.log("Hello, " + texinput.value())
}