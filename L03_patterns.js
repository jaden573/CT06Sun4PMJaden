function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  

//   // Recap 1: Repeating Circles
//   fill(50,100,400);
//   ellipse(75,200,100);
  
//   fill(600,223,180)
//   ellipse(225,200,100);
  
//   fill(5,0,15)
//   ellipse(375,200,100);
  
//   fill(34,47,80)
//   ellipse(525,200,100)

  // to do loop for(let i=0; i<11; i++ )
// for(let i=0; i<5; i++){
//   fill(50*i)
//   circle(50 + (i*50), 200,40)


  // Task 1: Colour Gradient
// for(let i=0; i<100; i+=10){
//   fill(300-(10*i));
//   rect(50 + (i*3), 150, 30,30)}
  // Task 2: Colour Loop
  // for(let i=0; i <300; i++){
  //   noStroke();
  //   fill(i*255/300);
  //   rect(50+i,275,1,50)
  // }
  // let spacing=50;
  // for(let i=0;i<8;i++){
  //   if(i%2==0){
  //     fill(0);
  //   }else{
  //     fill(255);
  //   }
  //   circle(spacing + i*spacing,200,40)
  // }

 
  // Task 3: Row of Circles
//new var and divide canvas width by 2, new var&divide total circle width by 2, find gap&circle radius, find starting x, add gap&radius, create loop for 5 circle
  // for(let i=0;i<5;i++)
  // circle((30*i)+15,15,30)
  // Task 4: Grid of Circles

function setup() {
  let circleDiameter = 30;
  let numCircles = 5;
  let totalWidth = numCircles * circleDiameter;
  let startX = (width - totalWidth) / 2 + circleDiameter / 2;
  let startY = (height - totalWidth) / 2 + circleDiameter / 2;

  for (let row = 0; row < numCircles; row++) {
    let rowY = startY + (circleDiameter * row);

    for (let i = 0; i<numCircles; i++) {
      let x = startX + i * circleDiameter;
      ellipse(x, rowY, circleDiameter, circleDiameter)
    }
  }
}
