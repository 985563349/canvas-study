function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const image = new Image();
  image.src = '/sprites.png';
  image.addEventListener('load', animate, false);

  let shift = 0;
  let currentFrame = 0;
  const totalFrame = 24;
  const frameWidth = 300;
  const frameHeight = 300;

  function animate() {
    ctx.clearRect(120, 25, 300, 300);
    ctx.drawImage(image, shift, 0, frameWidth, frameHeight, 120, 25, frameWidth, frameHeight);

    shift += frameWidth + 1;

    if (currentFrame === totalFrame) {
      shift = 0;
      currentFrame = 0;
    }

    currentFrame++;

    requestAnimationFrame(animate);
  }
}

main();
