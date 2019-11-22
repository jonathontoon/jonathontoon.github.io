const vertexDetail = 500;
let canvas, noiseZ = 0, radius, elementWidth, elementHeight;

function updateElementDimensions() {
	const element = document.getElementById("sketch");
	elementWidth = element.clientWidth;
	elementHeight = element.clientHeight;
};

function calculateStrokeWeight() {
	if (windowWidth < 321) {
		return windowWidth * 0.1;
	} else if (windowWidth < 480) {
		return windowWidth * 0.1;
	} else if (windowWidth >= 480 && windowWidth < 960) {
		return windowWidth * 0.08;
	} else {
		return windowWidth * 0.05;
	}
};

function calculateRadius() {
	if (windowWidth < 321) {
		return windowWidth * 0.25;
	} else if (windowWidth < 480) {
		return windowWidth * 0.35;
	} else if (windowWidth >= 480 && windowWidth < 960) {
		return windowWidth * 0.2;
	} else {
		return windowWidth * 0.2;
	}
};

function createCircle(offset) {
	push();
	translate(width / 2, height / 2);
	beginShape();
		for (let i = 0; i <= vertexDetail; i++) {
			const degree = (TWO_PI / vertexDetail) * (i % vertexDetail);
			
			const noiseX = (sin(degree) + 1) * 0.4;
			const noiseY = (cos(degree) + 1) * 0.4;
			const noiseRadius = noise(
				noiseX,
				noiseY,
				noiseZ + offset
			) * 100 + (radius / 2);
			
			const posX = sin(degree) * noiseRadius;
			const posY = cos(degree) * noiseRadius;
			
			vertex(posX, posY);
		}
	endShape(CLOSE);
	pop();
};

function setup() { 
	updateElementDimensions();

	canvas = createCanvas(elementWidth, elementHeight);
	canvas.parent("sketch");
	radius = calculateRadius();

	noFill();
	noiseDetail(2);
	smooth(4);
};

function draw() {
	blendMode(BLEND);
	background(color(0, 0, 0));
	blendMode(ADD);	
	
	strokeWeight(calculateStrokeWeight());

	stroke(color(255, 0, 0));
	createCircle(1000);

	stroke(color(0, 255, 0));
	createCircle(0.4);

	stroke(color(0, 0, 255));
	createCircle(0.8);

	noiseZ += 0.005;
};

function windowResized() {
	updateElementDimensions();

	resizeCanvas(elementWidth, elementHeight);
	radius = calculateRadius();
};