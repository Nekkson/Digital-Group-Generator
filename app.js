let canvas = document.getElementById("main-frame");

window.addEventListener("load", init, false);

const pixelRatio = window.devicePixelRatio || 1;
let windowWidth;
let windowHeight;
let minExtent;

let circles = new Map();

function init() {
	windowWidth = window.innerWidth * pixelRatio;
	windowHeight = window.innerHeight * pixelRatio;
	minExtent = Math.min(windowWidth, windowHeight);

	canvas.width = windowWidth;
	canvas.height = windowHeight;

	canvas.ontouchstart = handleTouchStart;
	canvas.ontouchend = handleTouchEnd;
	canvas.ontouchmove = handleTouchMove;

	document.onkeydown = handleKeyDown;
	document.onkeyup = handleKeyUp;
}

function repaint() {
	//2D graphics context
	let ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let entry of circles) {
		let circle = entry[1];
		circle.display(ctx);
	}
}

function handleTouchStart(event) {
}

function handleTouchEnd(event) {
}

function handleTouchMove(event) {
}

let keyDown = {}

function handleKeyDown(event) {
	if (keyDown[event.keyCode]) {
		return;
	}
	let pressedKey = String.fromCharCode(event.keyCode);
	let circle = new Circle(pressedKey, Math.random() * windowWidth, Math.random() * windowHeight, 30 * pixelRatio);
	circles.set(pressedKey, circle);

	keyDown[event.keyCode] = true;
	repaint();
}

function handleKeyUp(event) {
	keyDown[event.keyCode] = false;
	let pressedKey = String.fromCharCode(event.keyCode);

	circles.delete(pressedKey);
	repaint();
}