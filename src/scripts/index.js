/*
	Adapted from this initial codepen https://codepen.io/roborich/pen/wRMKaK
*/

(() => {
	"use strict";
	
	/*
		Variables
	*/

	const _faceRules = [
		[1, 0, 2],
		[1, 2, 0],
		[3, 2, 1],
		[5, 2, 3],
		[0, 2, 5],
		[1, 3, 4]
	];

	let _canvasBuffer = undefined;

	let _faceSize = undefined;
	let _cube = undefined;

	/*
		Functions
	*/

	const _generateFace = ([ruleR, ruleG, ruleB]) => {
		const imageSrc = new Uint8ClampedArray(_faceSize * _faceSize * 4);

		for (let i = 0; i < imageSrc.length; i += 4) {
			const [r, g, b, a] = [i, i + 1, i + 2, i + 3];
			const pixelI = i / 4;
			const col = pixelI  % _faceSize;
			const row = Math.floor(pixelI / _faceSize);
			const ruleMap = [0, col, row, 0xFF, 0xFF - row, 0xFF - col];

			imageSrc[r] = ruleMap[ruleR];
			imageSrc[g] = ruleMap[ruleG];
			imageSrc[b] = ruleMap[ruleB];
			imageSrc[a] = 130;
		}

		const imageData = new ImageData(imageSrc, _faceSize, _faceSize);
		_canvasBuffer.putImageData(imageData, 0, 0);
		
		const image = new Image(_faceSize, _faceSize);
		image.src = canvas.toDataURL("image/png");

		return image;
	};

	const _handleDOMContentLoaded = () => {
		_canvasBuffer = document.getElementById("canvas").getContext("2d");
		_cube = document.getElementById("cube");

		const sizeCSSVariable = window.getComputedStyle(document.documentElement).getPropertyValue("--face-size");
		_faceSize = parseInt(sizeCSSVariable.replace("px", ""));
	};

	const _handleWindowLoad = () => {
		_faceRules.map(_generateFace).forEach(function (img, i) {
			img.classList.add(`face-${i}`);
			_cube.appendChild(img);
		});	
	};

	/*
		Event Listeners
	*/

	document.addEventListener("DOMContentLoaded", _handleDOMContentLoaded, false);
	window.addEventListener("load", _handleWindowLoad, false);

})();