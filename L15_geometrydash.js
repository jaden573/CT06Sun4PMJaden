let playerX = 100;
let playerY;
let playerSize = 30;
let velocity = 0;
let isGrounded = false
let spikeX = []
let spikeWidth = 20
let spikeHeight = 30
let spikeSpeed = 5
let score = 0
let gameOver = false

function setup(){
    createCanvas(600,400);
    textAlign(CENTER,CENTER);
    playerY = height - playerSize;
    for(let i = 0; i < 3; i++){
        spikeX.push(width + i*300);
    }
    }


function draw(){
    background(0)

    if(!gameOver){

    
    velocity += 0.8
    playerY += velocity

    if(playerY >= height - playerSize){
        playerY = height - playerSize;
        isGrounded = true
        velocity = 0;
    } else {
        isGrounded = false
    }
    
    fill(0,255,0)
    rect(playerX, playerY, playerSize, playerSize)

    fill(255)
    textSize(20)
    text("Press space to jump", width/2, 30)

    fill(255,0,0)
    for(let i = 0; i < spikeX.length; i++){
        spikeX[i] -= spikeSpeed;

        if (spikeX[i] < -spikeWidth){
            spikeX[i] = width + random(100,300)
        }
        triangle(spikeX[i], height, spikeX[i] + spikeWidth/2, height - spikeHeight, spikeX[i] + spikeWidth, height);
        if(spikeX[i] + spikeWidth<playerX){
        score += 1
    }
    if(playerX + playerSize >spikeX[i] &&
        playerX < spikeX[i] + spikeWidth&&
        playerY + playerSize > height - spikeHeight
    ){gameOver=true}
    }
    

    text("Score: " + score/20, width/2, 60)}
    else{
        fill(255,0,0);
        textSize(32);
        text("Game Over!!!", width/2, hieght/2 )
    }
}

function keyPressed(){
    if(key === ' ' && isGrounded){
        velocity = -12
    }
}