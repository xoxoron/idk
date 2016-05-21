var w;

function setup () {
	createCanvas(640, 360);
	w = new walker();
}

function draw() {
	background(0, 0, 0);
	w.walk();
	w.display();
}

function walker() {
	this.x = width / 2;
	this.y = height / 2;

	this.walk = function() {
		 this.x = this.x + random(-5, 5);
		 this.y = this.y + random(-5, 5);
	}
	
	this.display = function() {
		fill(255, 255, 255);
		ellipse(this.x, this.y, 50, 50);
	}
}