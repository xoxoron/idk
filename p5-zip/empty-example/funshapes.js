function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	background(255);
	// rectMode(CORNER);
	translate(mouseX, mouseY, 0);
	rotateX(frameCount * .01);
	rotateY(frameCount * .01);
	box(50, 50, 50);

}
