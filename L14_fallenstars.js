// let field
// let submit
// let fruits
// let currentword
// function setup(){
//     createCanvas(600,400)
//     bakcground(220)

//     currentword = random(fruits)


//     field = createInput()
//     field.position(300,200)
//     field.size(100,40)

//     submit = createButton("Submit")
//     submit.position(300,225)
//     submit.size(50,20)
//     submit.mousePressed(Rescramble)
// }

// function Rescramble(){

// }

let rectX = 300
let rectY = 360
let starX = []
let starY = []
let starSize = []
let starSpeed = []
let numStars = 10

function setup(){
    createCanvas(600,400)


    for(let i = 0; i < numStars; i++){
        starX.push(random(width))
        starY.push(random(-300,-50))
        starSize.push(random(10,20))
        starSpeed.push(random(1,3))
    }
}

function draw(){
    background(0)



    for(let i = 0; i<numStars; i++){
        fill(255,255,0)
        ellipse(starX[i], starY[i], starSize[i])
        starY[i] += starSpeed[i]
    
    
    if(starX[i] > height){
        starY[i] =  random(-200, -50)
        starX[i] = random(width)
        starSpeed[i] = random(2,5);
    }
    }

    rect(rectX,rectY,40,40)
    
}