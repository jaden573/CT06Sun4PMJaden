let button
let inputfield
let gas = ""
function setup(){
    createCanvas(600,400)
    

    inputfield = createInput();
    inputfield.position(widtht/2, 300)

    button = createButton("GUESS")
    button.position(height/2 + 50, 300)
    button.mousePressed(updateText)
}
function draw(){
    background(220)
    textSize(18)
    fill("black")
    textAllign("CENTER")
    text(gas)

}
function updateText(){
    gas = inputfield.value()
}