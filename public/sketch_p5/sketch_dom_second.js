var cnv;
var d = 30;
var g;
function setup() {
  cnv = createCanvas(700, 700);
  cnv.parent('processing_canvas');
  cnv.mouseMoved(changeSize); // attach listener for
                              // activity on canvas only
  d = 10;
  g = 100;
}

function draw() {
  background(g);
  fill(200);
  ellipse(width/2, height/2, d, d);
}

// this function fires when mouse moves anywhere on
// page
function mouseMoved() {
  g = g + 5;
  if (g > 255) {
    g = 0;
  }
}

// this function fires when mouse moves over canvas
function changeSize() {
  d = d + 2;
  if (d > 100) {
    d = 0;
  }
}
