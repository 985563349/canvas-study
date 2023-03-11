// degrees to radians
// radians = (Math.PI / 180) * degrees

function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // ctx.arc(200, 200, 93, Math.PI / 2, Math.PI, true);
  // ctx.fillStyle = '#FF6A6A';
  // ctx.fill();

  // ctx.lineWidth = 20;
  // ctx.strokeStyle = '#FF0000';
  // ctx.stroke();

  // arc
  // ctx.arc(200, 200, 93, Math.PI / 2, Math.PI, false);
  // ctx.strokeStyle = '#FFCC00';
  // ctx.stroke();

  ctx.arc(200, 200, 93, 0, Math.PI * 2, true);
  ctx.fillStyle = '#E2FFC6';
  ctx.fill();

  ctx.lineWidth = 20;
  ctx.strokeStyle = '#66cc01';
  ctx.stroke();
}

main();
