function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // ctx.beginPath();
  // ctx.rect(75, 100, 250, 150);
  // ctx.closePath();

  // ctx.lineWidth = 10;
  // ctx.strokeStyle = '#666666';
  // ctx.stroke();

  // ctx.fillStyle = '#51DCFF';
  // ctx.fill();

  // quick drawing rectangle
  ctx.strokeStyle = '#FF3399';
  ctx.strokeRect(300, 50, 200, 200);

  ctx.fillStyle = '#00CCFF';
  ctx.fillRect(50, 50, 200, 200);
}

main();
