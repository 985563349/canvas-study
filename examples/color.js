function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.rect(75, 100, 250, 150);
  // ctx.globalAlpha = 0.3;

  // ctx.fillStyle = '#FFCC00';
  // ctx.fillStyle = 'deepskyblue';
  // ctx.fillStyle = 'rgb(204, 102, 153)';
  // ctx.fillStyle = 'rgba(204, 102, 153, .5)';
  // ctx.fillStyle = 'hsl(9, 83%, 70%)';
  // ctx.fillStyle = 'hsla(100, 83%, 70%, .5)';

  // const gradient = ctx.createLinearGradient(75, 0, 325, 0);
  // gradient.addColorStop(0.1, '#DDDDDD');
  // gradient.addColorStop(0.75, '#2D7BEC');
  // gradient.addColorStop(0.9, '#31FFFF');
  // ctx.fillStyle = gradient;

  const gradient = ctx.createRadialGradient(150, 175, 0, 150, 175, 100);
  gradient.addColorStop(0, '#FFCC10');
  gradient.addColorStop(1, '#B4CB02');

  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.lineWidth = 5;
  ctx.strokeStyle = '#535353';
  ctx.stroke();
}

main();
