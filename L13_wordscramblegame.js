let putfield;
let buttom;
let displaytext;
let currentword, scrambleWord, input, rescrambleButton, submitButton;
let score = 0;
let streak = 0;
let maxStreak = 0;
let message = "";

function setup(){
    createCanvas(600,400)
    background(220)

    putfield = createInput("Enter text")
    putfield.position(300,150)
    putfield.size(200,40)
    putfield.style('font-size', "16px")

    buttom = createButton("display")
    buttom.position(width/2, 200)
    buttom.size(100,30)
    putfield.style('font-size', "16px")

    rescrambleButton = createButton("Rescramble")
    rescrambleButton.position(200,150)
    rescrambleButton.size(100,30)
    putfield.style('font-size', "16px")

    submitButton = createButton()
    

    buttom.mousePressed(displayText)
}


function draw(){
    textSize(20)
    fill("BLACK")
    textAlign("CENTER")
    text(displaytext,300,250)
}

function displayText(){
    displaytext = putfield.value()
}