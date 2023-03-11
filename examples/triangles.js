function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // ctx.beginPath();
  // ctx.moveTo(100, 100);
  // ctx.lineTo(100, 300);
  // ctx.lineTo(300, 300);
  // ctx.closePath();

  // ctx.lineWidth = 10;
  // ctx.strokeStyle = '#666666';
  // ctx.stroke();

  // ctx.fillStyle = '#FFCC00';
  // ctx.fill();

  // equilateral triangle
  const height = 200 * Math.cos(Math.PI / 6); // or use: length * Math.cos(30)

  ctx.beginPath();
  ctx.moveTo(100, 300);
  ctx.lineTo(300, 300);
  ctx.lineTo(200, 300 - height);
  ctx.closePath();

  ctx.lineWidth = 10;
  ctx.strokeStyle = '#666666';
  ctx.stroke();

  ctx.fillStyle = '#FFCC00';
  ctx.fill();
}

main();
