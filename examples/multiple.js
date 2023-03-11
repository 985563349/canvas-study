function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(160, 130);
  ctx.lineTo(75, 200);
  ctx.lineTo(150, 275);
  ctx.lineTo(250, 230);
  ctx.closePath();

  ctx.lineWidth = 5;
  ctx.strokeStyle = '#333333';
  ctx.fillStyle = '#FFCC00';

  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(450, 300);

  ctx.lineWidth = 45;
  ctx.strokeStyle = 'steelblue';

  ctx.stroke();
}

main();
