	 var xPos = 0;
	 var yPos = 0;

	 var y = 45;

	 var g = 0;

	 var s = 10;

	 var x1Q = 100;
	 var y1Q = 100;
	 var x2Q = 110;
	 var y2Q = 90;
	 var x3Q = 120;
	 var y3Q = 100;
	 var x4Q = 110;
	 var y4Q = 110;
 function setup() {
	 createCanvas(400, 400);
 }


 function draw() {
	 
	 background(29, 40, 115);
      fill(255, 242, 0);
      //3rd
      quad(x1Q, y1Q, 0, x2Q, y2Q, x3Q, y3Q, x4Q, y4Q);
      //2nd
      quad(x1Q - 50, y1Q - 60, x2Q - 50, y2Q - 60, x3Q - 50, y3Q - 60, x4Q - 50, y4Q - 60);
      //6th
      quad(x1Q + 200, y1Q - 50, x2Q + 200, y2Q - 50, x3Q + 200, y3Q - 50, x4Q + 200, y4Q - 50);
      //4th
      quad(x1Q + 75, y1Q + 80, x2Q + 75, y2Q + 80, x3Q + 75, y3Q + 80, x4Q + 75, y4Q + 80);
      //1st
      quad(x1Q - 75, y1Q + 150, x2Q - 75, y2Q + 150, x3Q - 75, y3Q + 150, x4Q - 75, y4Q + 150);
      //5th
      quad(x1Q + 150, y1Q + 30, x2Q + 150, y2Q + 30, x3Q + 150, y3Q + 30, x4Q + 150, y4Q + 30);
      //7th
      quad(x1Q + 275, y1Q + 130, x2Q + 275, y2Q + 130, x3Q + 275, y3Q + 130, x4Q + 275, y4Q + 130);
      //buildings
      fill(54, 53, 53);
      rect(0, 300, 50, 100);
      rect(50, 270, 60, 130);
      rect(110, 320, 70, 80);
      rect(180, 250, 45, 150);
      rect(225, 280, 65, 120);
      rect(290, 300, 35, 100);
      rect(325, 265, 75, 135);
      //UFO
      noStroke()
      fill(0, 255, 0, 100);
      triangle(xPos - 10, y + 50 + g, xPos, y, xPos + 10, y + 50 + g);
     
      fill(69, 66, 66);
      arc(xPos, y + 5, 50, 20, PI, TWO_PI);
      arc(xPos, y, 30, 25, PI, TWO_PI);
      xPos++;
      yPos++;
      g += 0.5;
    
     
      if (xPos === 420) {
        xPos = 0;
        y = y + 50;
      }
   
      if (g === 50) {
        g = 0;
      }
}
