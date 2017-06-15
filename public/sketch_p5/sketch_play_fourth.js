//asteroid clone (core mechanics only)
//arrow keys to move + x to shoot

var bullets;
var asteroids;
var smile;
var die;
var MARGIN = 40;
var life = 10;
var speed = 2.5;

function setup() {
  var cnv = createCanvas(800,600);
  cnv.parent('processing_canvas');

  smile =  createSprite(100, 200, 50, 100);
  smile.addAnimation("floating", "../p5_play/examples/assets/asterisk_circle0006.png", "/p5_play/examples/assets/asterisk_circle0008.png");

  die = loadImage('/images/die.jpg');
  asteroids = new Group();

  for(var i = 0; i<8; i++) {
    var ang = random(360);
    var px = width/2 + 1000 * cos(radians(ang));
    var py = height/2+ 1000 * sin(radians(ang));
    createAsteroid(3, px, py);
    }
}

function draw() {
  background(0);

  fill(255);
  textAlign(CENTER);
  text("Avoid stone! your life : " + life, width/2, 20);
  text("your speed : " + speed,width/2,30);

  for(var i=0; i<allSprites.length; i++) {
  var s = allSprites[i];
  if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
  if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
  if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
  if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
  }

  smile.velocity.x = (mouseX-smile.position.x)/10;
  smile.velocity.y = (mouseY-smile.position.y)/10;
  if(smile.bounce(asteroids)){
    background(200,23,23);
    life--;
  }
  if(life == 0){
    //your die!
    image(die,130,50);
    // textsize(20);
    text("Your dead!",width/2, 20);
    noLoop();
  }



  drawSprites();

}

function createAsteroid(type, x, y) {
  var a = createSprite(x, y);

  var img  = loadImage("../p5_play/examples/assets/asteroid"+floor(random(0,3))+".png");
  a.addImage(img);
  a.setSpeed(speed, random(360));
  // a.setSpeed(2.5-(type/2), random(360));
  a.rotationSpeed = .5;
  //a.debug = true;
  a.type = type;

  if(type == 2)
    a.scale = .6;
  if(type == 1)
    a.scale = .3;

  a.mass = 2+a.scale;
  a.setCollider("circle", 0, 0, 50);
  asteroids.add(a);
  return a;
}
