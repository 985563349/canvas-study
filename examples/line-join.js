function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(100, 300);
  ctx.lineTo(300, 300);
  ctx.closePath();

  ctx.lineWidth = 10;
  ctx.strokeStyle = '#666666';
  ctx.lineJoin = 'round';

  // ctx.lineJoin = 'bevel';

  // ctx.lineJoin = 'miter';
  // ctx.miterLimit = 15;
  ctx.stroke();

  ctx.fillStyle = '#FFCC00';
  ctx.fill();
}

main();
