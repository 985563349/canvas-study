function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Translate
  // ctx.translate(50, 50);

  // ctx.beginPath();
  // ctx.arc(200, 200, 93, 0, 2 * Math.PI, true);
  // ctx.fillStyle = '#FF6A6A';
  // ctx.fill();

  // ctx.fillStyle = '#00CCFF';
  // ctx.fillRect(50, 50, 100, 100);

  // Rotate
  // ctx.rotate((45 * Math.PI) / 180);
  // ctx.font = 'bold 48px Helvetica, Arial, sans-serif';
  // ctx.fillStyle = 'steelblue';
  // ctx.fillText('Wheeeee!', 150, 0);

  // Scale
  // ctx.scale(2, 1);

  // ctx.fillStyle = '#FFCC00';
  // ctx.fillRect(50, 100, 100, 100);

  // Reset the Transform
  ctx.translate(50, 50);
  ctx.scale(2, 2);

  ctx.beginPath();
  ctx.arc(200, 200, 93, 0, Math.PI * 2, true);
  ctx.fillStyle = '#FF6A6A';
  ctx.fill();

  ctx.resetTransform();

  ctx.fillStyle = '#00CCFF';
  ctx.fillRect(50, 50, 100, 100);
}

main();
