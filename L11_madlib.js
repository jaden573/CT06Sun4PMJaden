let nouninput;
let verbput;
let adjecput;
let adverbput;
let placeput;
let aniu;
let storytext;
let storyTemplate;

function setup(){
    createCanvas(600,600);

    storyTemplate = [
        "The {adj} {noun} decided to {verb} {adjective} at the {place}",
        "One day, a {adj} {noun} wwanted to (verb} {adjective} in {place}",
        "Did you hear about the {adj} {noun} that tried to {verb} {adjective} near {place}"
    ];

    nouninput = createInput();
    nouninput.position (     width/2, 100);
    
    verbput = createInput();
    verbput.position( width/2, 150)

    adjecput = createInput();
    adjecput.position( width/2, 200);
    
    adverbput = createInput();
    adverbput.position(width/2, 250)

    placeput = createInput();
    placeput.position(width/2, 300)

    aniu = createButton("Generate story");
    aniu.position(          width/2, 350);
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
    console.log("The " + adjecput.value() + " " + nouninput.value() + " " +  verbput.value() + " " + adverbput.value() + " in the " + placeput.value())
    




}
