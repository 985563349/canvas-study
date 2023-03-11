function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // ctx.moveTo(50, 130);
  // ctx.quadraticCurveTo(200, 400, 490, 100);
  // ctx.closePath();

  // ctx.lineWidth = 15;
  // ctx.strokeStyle = '#FFCC00';

  // ctx.stroke();

  // ctx.moveTo(50, 130);
  // ctx.bezierCurveTo(300, 50, 200, 400, 490, 100);
  // ctx.lineTo(490, 300);
  // ctx.lineTo(50, 300);
  // ctx.closePath();

  // ctx.lineWidth = 15;
  // ctx.strokeStyle = '#FFCC00';
  // ctx.fillStyle = '#FFDE58';

  // ctx.fill();
  // ctx.stroke();

  const data = [50, 200, 100, 100, 200, 300, 300, 100, 350, 200];
  let prevX = data[0];
  let prevY = data[1];

  ctx.moveTo(prevX, prevY);
  ctx.arc(prevX, prevY, 2, 0, 2 * Math.PI);

  for (let i = 2; i < data.length; i += 2) {
    const x = data[i];
    const y = data[i + 1];

    const c1 = [(prevX + x) / 2, prevY];
    const c2 = [(prevX + x) / 2, y];

    ctx.bezierCurveTo(c1[0], c1[1], c2[0], c2[1], x, y);
    ctx.arc(x, y, 2, 0, 2 * Math.PI);

    prevX = x;
    prevY = y;
  }

  ctx.lineWidth = 2;
  ctx.stroKeStyle = '#FFCC00';
  ctx.stroke();
}

main();
