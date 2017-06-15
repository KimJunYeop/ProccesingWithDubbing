//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
var ghost, asterisk, cloud, small, bubbly, asterist_sec, circle, pulsing ,walk;
var cnv;
var pimage;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {

//create an animation from a sequence of numbered images
//pass the first and the last file name and it will try to find the ones in between

ghost = loadAnimation("p5_play/examples/assets/ghost_standing0001.png", "p5_play/examples/assets/ghost_standing0002.png",
"p5_play/examples/assets/ghost_standing0003.png",
"p5_play/examples/assets/ghost_standing0004.png",
"p5_play/examples/assets/ghost_standing0005.png",
"p5_play/examples/assets/ghost_standing0006.png",
"p5_play/examples/assets/ghost_standing0007.png");

//create an animation listing all the images files
asterisk = loadAnimation("p5_play/examples/assets/asterisk.png", "p5_play/examples/assets/triangle.png", "p5_play/examples/assets/square.png", "p5_play/examples/assets/cloud.png", "p5_play/examples/assets/star.png", "p5_play/examples/assets/mess.png", "p5_play/examples/assets/monster.png");

cloud = loadAnimation("p5_play/examples/assets/cloud_breathing0001.png","p5_play/examples/assets/cloud_breathing0002.png","p5_play/examples/assets/cloud_breathing0003.png","p5_play/examples/assets/cloud_breathing0004.png","p5_play/examples/assets/cloud_breathing0005.png","p5_play/examples/assets/cloud_breathing0006.png","p5_play/examples/assets/cloud_breathing0007.png","p5_play/examples/assets/cloud_breathing0008.png","p5_play/examples/assets/cloud_breathing0009.png");

small =
loadAnimation("p5_play/examples/assets/small_platform0001.png","p5_play/examples/assets/small_platform0002.png","p5_play/examples/assets/small_platform0003.png");

bubbly =
loadAnimation("p5_play/examples/assets/bubbly0001.png","p5_play/examples/assets/bubbly0002.png","p5_play/examples/assets/bubbly0003.png","p5_play/examples/assets/bubbly0004.png");

asterist_sec = loadAnimation("p5_play/examples/assets/asterisk_stretching0001.png","p5_play/examples/assets/asterisk_stretching0002.png","p5_play/examples/assets/asterisk_stretching0003.png","p5_play/examples/assets/asterisk_stretching0004.png","p5_play/examples/assets/asterisk_stretching0005.png","p5_play/examples/assets/asterisk_stretching0006.png","p5_play/examples/assets/asterisk_stretching0007.png","p5_play/examples/assets/asterisk_stretching0008.png");

circle = loadAnimation("p5_play/examples/assets/asterisk_circle0000.png","p5_play/examples/assets/asterisk_circle0001.png","p5_play/examples/assets/asterisk_circle0002.png","p5_play/examples/assets/asterisk_circle0003.png","p5_play/examples/assets/asterisk_circle0004.png","p5_play/examples/assets/asterisk_circle0005.png","p5_play/examples/assets/asterisk_circle0006.png","p5_play/examples/assets/asterisk_circle0007.png","p5_play/examples/assets/asterisk_circle0008.png")  ;

pulsing = loadAnimation("p5_play/examples/assets/cloud_pulsing0001.png","p5_play/examples/assets/cloud_pulsing0002.png","p5_play/examples/assets/cloud_pulsing0003.png","p5_play/examples/assets/cloud_pulsing0004.png","p5_play/examples/assets/cloud_pulsing0005.png","p5_play/examples/assets/cloud_pulsing0006.png","p5_play/examples/assets/cloud_pulsing0007.png");

walk = loadAnimation("p5_play/examples/assets/ghost_walk0001.png","p5_play/examples/assets/ghost_walk0002.png","p5_play/examples/assets/ghost_walk0003.png","p5_play/examples/assets/ghost_walk0004.png");
}



function setup() {
  cnv = createCanvas(1000,700);
  cnv.parent('processing_canvas');
  pimage = loadImage("p5_play/examples/assets/frame.png");

}

function draw() {
  background(255,255,255);
  image(pimage,110,20,800,600);
  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  animation(ghost, 300, 150);
  animation(asterisk, 500, 150);
  animation(cloud,700,150);
  animation(asterist_sec,300,300);
  animation(bubbly,500,300);
  animation(small,700,320);
  animation(walk,300,470);
  animation(pulsing,500,470);
  animation(circle,700,470);

}
