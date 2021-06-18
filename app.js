let canvas = document.getElementById("canvas");

window.addEventListener("load", init, false);

const pixelRatio = window.devicePixelRatio || 1;
let windowWidth;
let windowHeight;
let minExtent;

let circles = new Map();
const circleRadius = 60;

function init() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
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

    let [x, y] = findNonIntersectCoords();

    let circle = new Circle(pressedKey, x, y, circleRadius);
    circles.set(pressedKey, circle);

    keyDown[event.keyCode] = true;
    repaint();
}

function findNonIntersectCoords() {

    let x = undefined
    let y = undefined

    searchLoop:
        for (let step = 0; step < 20; ++step) {

            x = circleRadius + Math.random() * (windowWidth - 2 * circleRadius)
            y = circleRadius + Math.random() * (windowHeight - 2 * circleRadius)

            for (let circle of circles.values()) {
                if (Math.abs(x - circle.x) < 2 * circleRadius || Math.abs(y - circle.y) < 2 * circleRadius) {
                    continue searchLoop;
                }
            }
        }
        return [x, y];
}

function handleKeyUp(event) {
    keyDown[event.keyCode] = false;
    let pressedKey = String.fromCharCode(event.keyCode);

    circles.delete(pressedKey);
    repaint();
}