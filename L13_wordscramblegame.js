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
    scrambleWord = shuffleWord(currentword)

    putfield = createInput("Enter text")
    putfield.position(250,150)
    putfield.size(200,40)
    putfield.style('font-size', "16px")

    buttom = createButton("display")
    buttom.position(width/2, 200)
    buttom.size(100,30)
    putfield.style('font-size', "16px")

    rescrambleButton = createButton("Rescramble")
    rescrambleButton.position(200,200)
    rescrambleButton.size(100,30)
    rescrambleButton.style('font-size', "16px")

    submitButton = createButton("Submit")
    submitButton.position(400,200)
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
    text("scrambled word: ", width/2, 140);
    text("Score: ", width/2, 265);
    text("Streak: " + "(Max: )", width/2, 285);
    text(message, width/2, 310)
}

function shuffleWord(word){
    let arr = word.split(' ')
    for(let i = arr.length - 1; i>0; i--){
        let j = floor(random(i+1));
        [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    return arr.join(' ')
}

function displayText(){
    displaytext = putfield.value()
}

function rescrambleWord(){

}

function checkAns(){

}