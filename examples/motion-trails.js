function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  let motionTrailLength = 10;
  let positions = [];

  function storeLastPosition(x, y) {
    positions.push({ x, y });

    if (positions.length > motionTrailLength) {
      positions.shift();
    }
  }

  let x = -100;
  let y = 170;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < positions.length; i++) {
      const ratio = (i + 1) / positions.length;
      drawCircle(positions[i].x, positions[i].y, ratio);
    }

    drawCircle(x, y, 'source');
    storeLastPosition(x, y);

    if (x > 600) {
      x = -100;
    }
    x += 3;

    requestAnimationFrame(draw);
  }

  draw();

  function drawCircle(x, y, r) {
    if (r === 'source') {
      r = 1;
    } else {
      r /= 4;
    }

    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2, true);
    ctx.fillStyle = `rgba(204, 102, 153, ${r})`;
    ctx.fill();
  }
}

main();
