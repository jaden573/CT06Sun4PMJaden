let button;
let inputfield;
let gas = "";
let word = ["bingbing","lingling","xingxing","chineseF9","crystalmethcartel"];
let randumb = "";
let hint;
let correctletter = "";
function setup(){
    createCanvas(600,400)
    randumb = random(word)
    hint = randumb.charAt(0).toUpperCase();
    for ( let i = 1; i<randumb.length; i++){
        hint = hint + "_ "
    }
    inputfield = createInput();
    inputfield.position(width/2, 100)

    button = createButton("GUESS")
    button.position(height/2 + 300, 100)
    button.mousePressed(updateText)
}
function draw(){
    background(220)
    textSize(18)
    fill("black")
    textAlign("CENTER")
    text(gas, width/2, 300)
    text(hint, width/2, 50)

}
function updateText(){
    gas = inputfield.value()
    correctletter = getCorrectLetters(gas,randumb)
}

function getCorrectLetters(){
    let correctletter = ""
    guess = guess.toLowerCase()
    word = word.toLowerCase()
    for(let i = 0;i<gas.length; i++){
        
    }
}