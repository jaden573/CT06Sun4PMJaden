let field
let submit
let fruits

function setup(){
    createCanvas(600,400)
    bakcground(220)
    field = createInput()
    field.position(300,200)
    field.size(100,40)

    submit = createButton("Submit")
    submit.position(300,225)
    submit.size(50,20)
    submit.mousePressed(Rescramble)
}

