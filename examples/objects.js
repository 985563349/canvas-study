class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  static clearAll(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  setColor(color) {
    this.color = color;
  }

  draw(ctx) {
    ctx.beginPath();

    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();

    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const circles = [];

  function drawCircle() {
    for (let i = 0; i < 40; i++) {
      let r = Math.round(15 + Math.random() * 150);
      let x = Math.round(Math.random() * canvas.width);
      let y = Math.round(Math.random() * canvas.height);

      const circle = new Circle(x, y, r, 'rgba(41, 170, 255, .3)');
      circle.draw(ctx);

      circles.push(circle);
    }
  }

  drawCircle();

  function changeColor() {
    Circle.clearAll(canvas, ctx);

    for (let i = 0; i < circles.length; i++) {
      const circle = circles[i];
      circle.setColor('rgba(251, 80, 18, .3');
      circle.draw(ctx);
    }
  }

  canvas.addEventListener('mousedown', changeColor, false);
}

main();
