let button
let inputfield
function setup(){
    createCanvas(600,400)

    inputfield = createInput();
    inputfield.position(widtht/2, 300)

    button = createButton()
    button.position(height/2 + 50, 300)
    button.mousePressed(updateText)
}
function draw(){
    background(220)
    textSize(18)
    text
}