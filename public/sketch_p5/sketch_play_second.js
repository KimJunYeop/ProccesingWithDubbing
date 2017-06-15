//Moving sprites
var ghost, circle, pulsing;
var direction = 90; //circle initial direction moving down

function setup() {
  var cnv = createCanvas(1000,400);
  cnv.parent('processing_canvas');
  ellipse(50,30,20,30);
  //create the sprites
  ghost = createSprite(700, 200, 50, 100);
  ghost.addAnimation("floating", "../p5_play/examples/assets/ghost_standing0001.png", "/p5_play/examples/assets/ghost_standing0007.png");

  circle = createSprite(500, 200, 50, 100);
  circle.addAnimation("floating", "../p5_play/examples/assets/asterisk_circle0006.png", "/p5_play/examples/assets/asterisk_circle0008.png");

  pulsing = createSprite(300,200,50,100);
  pulsing.addAnimation("floating","../p5_play/examples/assets/cloud_pulsing0001.png","/p5_play/examples/assets/cloud_pulsing0007.png");
}

function draw() {
  background(255,255,255);

  //aside of setting the velocity directly you can move a sprite
  //by providing a speed and an angle
  direction += 2;
  //speed, angle
  if (mouseIsPressed){
    ghost.attractionPoint(.2, mouseX, mouseY);
    circle.attractionPoint(.21,mouseX-10,mouseY-10);
    pulsing.attractionPoint(.23,mouseX+5,mouseY-5);
  }else{
    circle.setSpeed(3, direction);
    pulsing.setSpeed(3,direction);
    ghost.setSpeed(3,direction);
  }

  //you can rotate the sprite according the directio it is moving
  //uncomment this
  //circle.rotateToDirection = true;

  //or by applying a force toward a point
  //force (acceleration), pointx, pointy

  // ghost.attractionPoint(.2, mouseX, mouseY);
  //since the force keeps incrementing the speed you can
  //set a limit to it with maxSpeed
  ghost.maxSpeed = 5;

  //draw the sprite
  drawSprites();
}
