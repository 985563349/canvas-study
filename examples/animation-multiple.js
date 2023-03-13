class Circle {
  constructor(x, y, radius, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;

    this.opacity = 0.05 + Math.random() * 0.5;
    this.random = 50 + Math.random() * 100;
    this.counter = 0;

    const signHelper = Math.floor(Math.random() * 2);

    if (signHelper === 1) {
      this.sign = -1;
    } else {
      this.sign = 1;
    }
  }

  draw(ctx) {
    this.counter += this.sign * this.speed;

    ctx.beginPath();
    ctx.arc(
      this.x + Math.cos(this.counter / 100) * this.random,
      this.y + Math.sin(this.counter / 100) * this.random,
      this.radius,
      0,
      Math.PI * 2,
      false
    );
    ctx.closePath();

    ctx.fillStyle = `rgba(185, 211, 238, ${this.opacity})`;
    ctx.fill();
  }
}

function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const circles = [];

  function setupCircles() {
    for (let i = 0; i < 100; i++) {
      const x = Math.round(Math.random() * 700);
      const y = Math.round(Math.random() * 700);
      const speed = 0.2 + Math.random() * 3;
      const radius = 5 + Math.random() * 100;

      const circle = new Circle(x, y, radius, speed);
      circles.push(circle);
    }

    drawAndUpdate();
  }

  setupCircles();

  function drawAndUpdate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circles.length; i++) {
      const circle = circles[i];
      circle.draw(ctx);
    }

    requestAnimationFrame(drawAndUpdate);
  }
}

main();
