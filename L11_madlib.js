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

    adjecput    
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
    text("Enter adjective: ", width/2 - 90, 210)
    text("Enter adverb: ", width/2 - 90, 260)
    text("Enter place: ", width/2 - 90, 310)
}
function updateText(){
    console.log("Hello, " + nouninput.value())
}