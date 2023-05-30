document.body.style.margin = 0
document.body.style.overflow = 'hidden'

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke ()
  frameRate (24)
}

function draw() {
  background(234, 221, 202);
  
  // defines a variable sig, to hold the radius of the ball
  let sig = sin (frameCount * TWO_PI / 360) // [ 0, 1 ]
  
  // change the rage of the radius sig 
  sig += 1   // [ 000 , 002]
  sig *= 500 // [ 000 , 1000]
  sig += 10  // [ 010 , 1010]
   
  // set the fill colour
  fill(210, 125, 45)

  // draw a shadow at the balls edge
  drawingContext.shadowBlur = 2048;
  drawingContext.shadowColor = 'rgb(210, 125, 45)'

  // draw the ball
  circle ( width / 2, windowHeight, sig)
}

// add resizability
function windowResized () {
    resizeCanvas (window.innerWidth, window.innerHeight)
}