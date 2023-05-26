document.body.style.margin = 0
document.body.style.overflow = 'hidden'

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke ()
  frameRate (24)
}

function draw() {
  background(0);
  
  let sig = sin (frameCount * TWO_PI / 360) 
  // (360 / 24 fps) = 15s seconds per breath cycle
  
  sig += 1   // [ 000 , 002]
  sig *= 500 // [ 000 , 1000]
  sig += 10  // [ 010 , 1010]
  
  // console.log(sig) // check the size of the ball
  
  fill('deeppink')
  drawingContext.shadowBlur = 128;
  drawingContext.shadowColor = 'deeppink'
  
  circle ( width / 2, windowHeight, sig)
}

function windowResized () {
    resizeCanvas (window.innerWidth, window.innerHeight)
}