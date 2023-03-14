function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // get current size of the canvas
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * devicePixelRatio;
  canvas.height = rect.height * devicePixelRatio;

  ctx.scale(devicePixelRatio, devicePixelRatio);

  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';

  function draw() {
    ctx.beginPath();
    ctx.arc(200, 200, 93, 0, 2 * Math.PI, true);
    ctx.fillStyle = '#E2FFC6';
    ctx.fill();

    ctx.lineWidth = 20;
    ctx.strokeStyle = '#66CC01';
    ctx.stroke();
  }

  draw();
}

main();
