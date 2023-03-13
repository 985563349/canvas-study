function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const image = new Image();
  image.src = '/orange.svg';

  function loadImage(e) {
    // ctx.drawImage(image, 0, 0);
    // ctx.drawImage(image, 0, 0, 50, 50);
    ctx.drawImage(image, 0, 0, 100, 100, 0, 0, 100, 100);
    // ctx.imageSmoothingEnabled = false;
  }

  image.addEventListener('load', loadImage);
}

main();
