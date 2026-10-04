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
    background("silver")
    textSize(18)
    textAllign(RIGHT, CENTER)
    text("give me your name", width/2-15)
}
function updatetex(){

}