let nouninput;
let verbput;
let adjecput;
let adverbput;
let placeput;
let aniu;

function setup(){
    createCanvas(600,600);

    nouninput = createInput();
    nouninput.position (     width/2, 100);
    
    verbput = createInput();
    verbput.position( width/2, 150)

    aniu = createButton("click me");
    aniu.position(          width/2, 450);
    aniu.mousePressed(updateText)
    
}
function draw(){
    background("silver")
    textSize(18)
    textAlign(RIGHT, CENTER)
    text("Enter noun: ", width/2-90, 110);
    text("Enter verb: ", width/2 - 90, 160)
    text("Enter adjective")
}
function updateText(){
    console.log("Hello, " + nouninput.value())
}