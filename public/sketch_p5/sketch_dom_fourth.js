function setup() {
	var cnv = createCanvas(710, 400, WEBGL);
  cnv.parent('processing_canvas');
}

function draw() {
	background(100);
	noStroke();

	push();
	translate(-300, 200);
	rotateY(1.25);
	rotateX(-0.9);
	box(100);
	pop();

	noFill();
	stroke(255);
	push();
	translate(500, height*0.35, -200);
	sphere(300);
	pop();
}
