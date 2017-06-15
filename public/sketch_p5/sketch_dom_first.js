var canvas, text;
var text2;
var mouseNum=0;
var greeting;
var input;

function setup() {
  canvas = createCanvas(600, 400);
  canvas.position(700,400);


  input = createInput();
  input.position(750,470);

  button = createButton('submit');
  button.position(930,470);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(750, 400);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  var name = input.value();
  greeting.html('안녕? '+name+'아 반가워~!');
  input.value('');

  for (var i=0; i<50; i++) {
    push();
    fill(random(255),random(255), random(255));
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}
