var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;

var rVal;
var gVal;
var bVal;
// var col;

function setup() {
	createCanvas(480, 600);
	circleDiameter = width/NUM_CIRCLES;
	circleRadius = circleDiameter/2;

	rVal = 0;
	gVal = 255;
	bVal = 0;
	// col = 0;
}

function draw() {
	var isAlternateRow = false;

	var y = height;
	
	while (y >= 0) {
		var x;

		if (isAlternateRow) {
			x = circleRadius;
		} else {
			x = 0;
		}

		while (x <= width) {
			stroke(0);
			fill(rVal, gVal, bVal);
			
			ellipse(x, y, circleDiameter, circleDiameter);
			x = x + circleDiameter;	
			
		}
	
	y = y - circleRadius;

	isAlternateRow = !isAlternateRow

	rVal = rVal + 7;
	gVal = gVal - 2;
	bVal = bVal + 3;
	
	// col = col + 1;

	
	}
	
}