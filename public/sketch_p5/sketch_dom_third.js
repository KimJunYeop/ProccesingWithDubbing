var num = 2000;
var range = 6;

var ax = [];
var ay = [];

var bx = [];
var by = [];

var cx = [];
var cy = [];

function setup() {
  var cnv = createCanvas(710, 400);
  cnv.parent('processing_canvas');
  for ( var i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;

    bx[i] = width / 3;
    by[i] = height / 3;

    cx[i] = width / 1.5;
    cy[i] = height / 1.5;
  }
  frameRate(30);
}

function draw() {
  background(255);

  // Shift all elements 1 place to the left
  for ( var i = 1; i < num; i++ ) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
    bx[i - 1] = bx[i];
    by[i - 1] = by[i];
    cx[i - 1] = cx[i];
    cy[i - 1] = cy[i];
  }

  // Put a new value at the end of the array
  ax[num - 1] += random(-range, range);
  ay[num - 1] += random(-range, range);

  bx[num - 1] += random(-range, range);
  by[num - 1] += random(-range, range);

  cx[num - 1] += random(-range, range);
  cy[num - 1] += random(-range, range);

  // Constrain all points to the screen
  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height);

  bx[num - 1] = constrain(bx[num - 1], 0, width);
  by[num - 1] = constrain(by[num - 1], 0, height);

  cx[num - 1] = constrain(cx[num - 1], 0, width);
  cy[num - 1] = constrain(cy[num - 1], 0, height);



  // Draw a line connecting the points
  for ( var j = 1; j < num; j++ ) {
    stroke(213,23,25);
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
    stroke(23,213,25);
    line(bx[j - 1], by[j - 1], bx[j], by[j]);
    stroke(23,25,213);
    line(cx[j - 1], cy[j - 1], cx[j], cy[j]);
  }
}
