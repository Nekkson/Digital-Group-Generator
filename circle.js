class Circle {
	constructor(touchId, x = 0, y = 0, radius = 30, color = new Color()) {
		this.touchId = touchId;
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}

	display(ctx) {
		ctx.fillStyle = this.color.toCSS();
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		ctx.fill();
	}
}