let button
let inputfield
let gas = ""
let word = ["bingbing","lingling","xingxing","chineseF9","crystalmethcartel"]
let randumb = ""

function setup(){
    createCanvas(600,400)
    

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

}
function updateText(){
    gas = inputfield.value()
}