//pong clone
//mouse to control both paddles

var paddleA, paddleB, ball, wallTop, wallBottom;
var mrKim;
var mrKimImage;
var bagImage;
var guardImage;
var airport;
var MAX_SPEED = 10;

function setup() {
  var cnv = createCanvas(800,400);
  cnv.parent('processing_canvas');
  //frameRate(6);

  mrKimImage = loadImage('/images/mrkim.png');
  bagImage = loadImage('/images/bag.png');
  guardImage = loadImage('/images/guard.png');
  airport = loadImage('/images/airport.jpg');


  paddleA = createSprite(30, height/2, 50, 50);
  paddleA.addImage(guardImage);
  paddleA.immovable = true;

  paddleB = createSprite(width-28, height/2, 10, 50);
  paddleB.addImage(mrKimImage);
  paddleB.immovable = true;

  wallTop = createSprite(width/2, -30/2, width, 30);
  wallTop.immovable = true;

  wallBottom = createSprite(width/2, height+30/2, width, 30);
  wallBottom.immovable = true;

  ball = createSprite(width/2, height/2, 10, 10);
  ball.addImage(bagImage);
  ball.maxSpeed = MAX_SPEED;


  ball.setSpeed(MAX_SPEED, -180);
}

function draw() {
  background(airport,0,0);
  // var mrkimimage = image(mrKim,700,0,100,300);
  paddleA.position.y = constrain(mouseY, paddleA.height/2, height-paddleA.height/2);
  paddleB.position.y = constrain(mouseY, paddleA.height/2, height-paddleA.height/2);

  ball.bounce(wallTop);
  ball.bounce(wallBottom);

  if(ball.bounce(paddleA)) {
    var swing = (ball.position.y-paddleA.position.y)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()+swing);
  }

  if(ball.bounce(paddleB)) {
    var swing = (ball.position.y-paddleB.position.y)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()-swing);
  }

  if(ball.position.x<0) {
  ball.position.x = width/2;
  ball.position.y = height/2;
  ball.setSpeed(MAX_SPEED, 0);
  }

  if(ball.position.x>width) {
  ball.position.x = width/2;
  ball.position.y = height/2;
  ball.setSpeed(MAX_SPEED, 180);
  }

  drawSprites();

}
