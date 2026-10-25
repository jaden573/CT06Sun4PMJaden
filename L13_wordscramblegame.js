let putfield;
let buttom;
let displaytext;
let currentword, scrambleWord, input, rescrambleButton, submitButton;
let score = 0;
let streak = 0;
let maxStreak = 0;
let message = "";
let words = ["hello"]

function setup(){
    createCanvas(600,400)
    background(220)

    currentword = random(words)

    putfield = createInput("Enter text")
    putfield.position(250,150)
    putfield.size(200,40)
    putfield.style('font-size', "16px")

    buttom = createButton("display")
    buttom.position(width/2, 175)
    buttom.size(100,30)
    putfield.style('font-size', "16px")

    rescrambleButton = createButton("Rescramble")
    rescrambleButton.position(200,175)
    rescrambleButton.size(100,30)
    rescrambleButton.style('font-size', "16px")

    submitButton = createButton("Submit")
    submitButton.position(400,175)
    submitButton.size(100,30)
    submitButton.style('font-size', "16px")


    buttom.mousePressed(displayText)
    rescrambleButton.mousePressed(rescrambleWord)
    submitButton.mousePressed(checkAns)
}


function draw(){
    background(220)
    textSize(20)
    fill("BLACK")
    textAlign("CENTER")
    text(displaytext,300,250);
    text("Word scramble game", width/2, 100);
    text("random word: ", width/2, 200);
    text("Score: ", width/2, 225);
    text("Streak: " + "(Max: )", width/2, 250);
    text(message, width/2, 275)
}

function shuffleWord(word){
    
}

function displayText(){
    displaytext = putfield.value()
}

function rescrambleWord(){

}

function checkAns(){

}