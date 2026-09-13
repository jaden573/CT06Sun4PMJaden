let ballx=40
let bally=200
function setup(){
    createCanvas(800,600);
    background(220);
}
// function draw(){
//     fill(0,0,0)
//     triangle(150,200,250,400,50,400)
//     stroke(255,0,0,)
//     strokeWeight(10)
//     fill(0,0,0)
//     circle(400,300,150)
//     square(550,200,150)
// }
function draw(){
    for(let i=0; i<11; i++){
        circle(ballx,bally,40)
        fill(0 +i*50)
        ballx+=80
        bally+=20
    }
}
/*revision notes
css is Cascading Style Sheet
heading in html is h1 to h7
must have in html -> body, title, html, head
declare a variable-> let variable_name = value;
must have functions in p5js -> setup() and draw()
in for loop be very careful of initial variable declaration
for loop syntax-> for(let i =0; i<5; i++)
for loop syntax-> for(declaration; condition, increment)
to create new canvas-> createCanvas(width, height)
coordinate system-> top left is (0,0), move right if x increase, move down y increase, no -ve value
function that run only once-> function setup()
function that run multiple times-> function draw()w
*/