document.body.style.margin   = 0
document.body.style.overflow = `hidden`

// initate variables for drawing 
// the line
let spacing   = 1;
let speed     = 0;
let amplitude = 125;
let period;
let w;

// initate variables for 
// colours
let col  = 170;
let rate = 0.2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // set the length of the line to the 
  // width of the window
  w = width;
  
  // create a new array that is the length
  // of (window / spacing)
  yValues = new Array(floor(w / spacing)); 
}

function draw() {

  // defined below
  col_change();
  
  // set the background colour
  fill('white')
  square(0, 0, width)
  background(205, 114, col, 220);
  
  // defined below
  calculate_line ();
  display_line();
}

// define a fuction that calculates the positioning
// of the line in the window
function calculate_line () {
  
  // increases the speed of the line
  speed += 0.008;
  
  // initiate x variable and set it to speed
  let x = speed
  
  // for every x, calculate a y value on a sine wave
  for (let i = 0; i < yValues.length; i++) {
    yValues[i] = sin(x) * amplitude
  }
  
}

function display_line () {
  // remove stroke
  noStroke()
  
  // set colour to aliceblue
  fill('alicelue')
  
  // for every x value of the line, draw a rect
    for (let x = 0; x < yValues.length; x++) {
    rect(x * spacing, height / 2 + yValues[x], 16, 6);
  }
}

function col_change () {
  
  // change the colour value by the rate
    col += rate;
  
  // if the value leaves the range, reverse the rate
  if (col >= 255 || col <= 170) {
    rate *= -1
  }
}

// adds resizability
function windowResized () {
  resizeCanvas (window.innerWidth, window.innerHeight)
}