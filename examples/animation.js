function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  let x = -500;

  function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // color in the background
    ctx.fillStyle = '#F8F8F8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw the circle
    ctx.beginPath();

    const radius = 175;
    ctx.arc(x, 225, radius, 0, Math.PI * 2, false);
    ctx.closePath();

    ctx.fillStyle = '#FFCC00';
    ctx.fill();

    ctx.lineWidth = 10;
    ctx.strokeStyle = '#DCB001';
    ctx.stroke();

    x += 5;

    if (x > 1000) {
      x = -500;
    }

    requestAnimationFrame(drawCircle);
  }

  drawCircle();
}

main();
