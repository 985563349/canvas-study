function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.font = 'bold 96px Helvetica, Arial, sans-serif';

  // ctx.textAlign = 'center';
  // ctx.direction = 'rtl';
  // ctx.textBaseline = 'top';

  ctx.fillStyle = 'steelblue';
  ctx.fillText('Canvas', 40, 125);

  ctx.strokeStyle = '#173b79';
  ctx.strokeText('Canvas', 40, 257);
}

main();
