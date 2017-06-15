var song, analyzer;
var array_x = new Array();
var array_y = new Array();
function preload() {
  song = loadSound('music/amor.mp3');
}

function setup() {
  var canvas = createCanvas(1000, 600);
  canvas.parent('sketch-holder');
  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
  for(var i = 0; i < 100; i++){
    array_x[i] = (Math.random()*1000);
    array_y[i] = (Math.random()*600);
  }
}

function draw() {
  background(255);

  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  fill(133,234,118);
  stroke(255);

  // Draw an ellipse with size based on volume
  for(var i = 0 ; i < 100; i++){
    ellipse(array_x[i],array_y[i],10+rms*600,10+rms*600);
  }

  // ellipse(width/3, height/1.5,10+rms*200, 10+rms*200);
  // ellipse(30,40,10+rms*400,10+rms*400);
  // ellipse(width/4, height/1.7,10+rms*800, 10+rms*800);
  // ellipse(width/3.5, height/1.9, 10+rms*800, 10+rms*800);
  // ellipse(width-50,height-30,10+rms*100,10+rms*100);
}
