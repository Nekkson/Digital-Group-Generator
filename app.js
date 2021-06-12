let canvas = document.getElementById("main-frame");

window.addEventListener("load", init, false);

const pixelRatio = window.devicePixelRatio || 1;

let circle = new Circle(undefined, 410, 630, 50);


function init() {
	let screenWidth = screen.width;
	let screenHeight = screen.height;

	canvas.width = screenWidth * pixelRatio;
	canvas.height = screenHeight * pixelRatio;
	repaint();
}

function repaint() {
	let ctx = canvas.getContext("2d");
	circle.display(ctx);
}

function handleTouchStart(event) {
}

function handleTouchEnd(event) {
}

function handleTouchMove(event) {
}

