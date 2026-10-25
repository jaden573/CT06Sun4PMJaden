let putfield
let buttom
let displaytext

function setup(){
    createCanvas(600,400)
    putfield = createInput("Enter text")
    putfield.position(300,150)
    putfield.size(200,40)
    putfield.style('font-size', "16px")

    buttom = createButton("display")
    buttom.position(width/2, 200)
    buttom.size(100,30)
    putfield.style('font-size', "16px")

    buttom.mousePressed(displaytext)
}


function draw(){
    textSize(20)
    fill("BLACK")
    textAlign("CENTER")
    text(displaytext,300,250)
}

function displaytext(){
    displaytext = putfield.value()
}