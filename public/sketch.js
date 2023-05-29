document.body.style.margin = 0
document.body.style.overflow = 'hidden'

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke ()
  frameRate (24)
}

function draw() {
  background(234, 221, 202);
  
  let sig = sin (frameCount * TWO_PI / 360) // [ 0, 1 ]
  
  sig += 1   // [ 000 , 002]
  sig *= 500 // [ 000 , 1000]
  sig += 10  // [ 010 , 1010]
    
  fill(210, 125, 45)

  drawingContext.shadowBlur = 2048;
  drawingContext.shadowColor = 'rgb(210, 125, 45)'

  circle ( width / 2, windowHeight, sig)
}

function windowResized () {
    resizeCanvas (window.innerWidth, window.innerHeight)
}