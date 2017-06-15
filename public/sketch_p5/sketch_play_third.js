//Collision detection - custom colliders
//move the mouse. The area responsive to collisions doesn't have to
//match the size of the images

var skizo;
var sun;
var bubbly;
var circle;

function setup() {
  var cnv = createCanvas(800,400);
  cnv.parent('processing_canvas');
  skizo = createSprite(150, 200);

  //an animation with frames of different sizes
  var anim = skizo.addAnimation("skizo", "../p5_play/examples/assets/asterisk_normal0001.png", "../p5_play/examples/assets/small_triangle.png", "../p5_play/examples/assets/asterisk_circle0006.png", "../p5_play/examples/assets/small_rectangle.png");
  //slow down
  anim.frameDelay = 8;

  sun = createSprite(400, 200);
  sun.addAnimation("normal", "../p5_play/examples/assets/sun1.png",  "/p5_play/examples/assets/sun3.png");
  //the animation has semi transparent parts I only want the core to be tested for collision
  //so I set a circular collider to it
  //collider type "circle", offset x, offset y, radius
  sun.setCollider("circle", 0,0,60);

  bubbly = createSprite(650, 180);
  bubbly.addAnimation("normal", "../p5_play/examples/assets/bubbly0001.png",  "/p5_play/examples/assets/bubbly0004.png");
  //the animation active area should be a smaller and shifted area
  //collider type "rectangle", offset x, offset y, width, height
  bubbly.setCollider("rectangle", 0, 26, 75, 75);

  circle = createSprite(0,0);
  circle.addAnimation("normal", "../p5_play/examples/assets/asterisk_circle0006.png",  "/p5_play/examples/assets/asterisk_circle0008.png");
  circle.setCollider("circle", -2,2,55);
}



function draw() {
  background(255,255,255);

  //follow the mouse
  //moving sprites with the velocity instead of the position directly
  //improves the collision resolution
  circle.velocity.x = (mouseX-circle.position.x)/10;  
  circle.velocity.y = (mouseY-circle.position.y)/10;

  //setting the position directly is like teleporting an object, possibly
  //inside other objects making the repositioning more arbitrary
  //try this
  //circle.position.x = mouseX;
  //circle.position.y = mouseY;

  circle.collide(skizo);
  circle.collide(sun);
  circle.collide(bubbly);

  skizo.debug = mouseIsPressed;
  sun.debug = mouseIsPressed;
  bubbly.debug = mouseIsPressed;
  circle.debug = mouseIsPressed;

  drawSprites();
}
