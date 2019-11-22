 const sketch = (p) => {

	let darkModeEnabled = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

	if (window.matchMedia) {
		window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
			console.log(e);
			darkModeEnabled = e.matches;
		});
	}

	const vertexDetail = 500;
	let canvas, noiseZ = 0, radius, elementWidth, elementHeight;

	const updateElementDimensions = () => {
		const element = document.getElementById("sketch");
		elementWidth = element.clientWidth;
		elementHeight = element.clientHeight;
	};

	const calculateStrokeWeight = () => {
		if (p.windowWidth < 321) {
			return p.windowWidth * 0.1;
		} else if (p.windowWidth < 480) {
			return p.windowWidth * 0.1;
		} else if (p.windowWidth >= 480 && p.windowWidth < 960) {
			return p.windowWidth * 0.08;
		} else {
			return p.windowWidth * 0.05;
		}
	};

	const calculateRadius = () => {
		if (p.windowWidth < 321) {
			return p.windowWidth * 0.25;
		} else if (p.windowWidth < 480) {
			return p.windowWidth * 0.35;
		} else if (p.windowWidth >= 480 && p.windowWidth < 960) {
			return p.windowWidth * 0.2;
		} else {
			return p.windowWidth * 0.2;
		}
	};

	const createCircle = (offset) => {
		p.push();
		p.translate(p.width / 2, p.height / 2);
		p.beginShape();
			for (let i = 0; i <= vertexDetail; i++) {
				const degree = (p.TWO_PI / vertexDetail) * (i % vertexDetail);
				
				const noiseX = (p.sin(degree) + 1) * 0.4;
				const noiseY = (p.cos(degree) + 1) * 0.4;
				const noiseRadius = p.noise(
					noiseX,
					noiseY,
					noiseZ + offset
				) * 100 + (radius / 2);
				
				const posX = p.sin(degree) * noiseRadius;
				const posY = p.cos(degree) * noiseRadius;
				
				p.vertex(posX, posY);
			}
		p.endShape(p.CLOSE);
		p.pop();
	};

	p.setup = () => { 
		updateElementDimensions();

		canvas = p.createCanvas(elementWidth, elementHeight);
		canvas.parent("sketch");
		radius = calculateRadius();

		// if (darkModeEnabled) {
		// 	p.background(p.color(0, 0, 0));
		// 	p.blendMode(p.ADD);
		// } else {
		// 	p.background(p.color(255, 255, 255));
		// 	p.blendMode(p.MULTIPLY);
		// }

		p.noFill();
		p.noiseDetail(2);
		p.smooth(4);
	};

	p.draw = () => {
		p.blendMode(p.BLEND);
		if (darkModeEnabled) {
			p.background(p.color(0, 0, 0));
			p.blendMode(p.ADD);	
		} else {
			p.background(p.color(255, 255, 255));
			p.blendMode(p.MULTIPLY);	
		}
		
		p.strokeWeight(calculateStrokeWeight());

		p.stroke(p.color(255, 0, 0));
		createCircle(1000);

		p.stroke(p.color(0, 255, 0));
		createCircle(0.4);

		p.stroke(p.color(0, 0, 255));
		createCircle(0.8);

		noiseZ += 0.005;
	};

	p.windowResized = () => {
		updateElementDimensions();

		p.resizeCanvas(elementWidth, elementHeight);
		radius = calculateRadius();
	};
};

export default sketch;