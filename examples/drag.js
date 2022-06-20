function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  let draggable = false;
  let target = null;
  let mousePos = null;

  const images = [
    {
      id: 'gallery_1',
      x: 0,
      y: 0,
      width: 100,
      height: 115,
      src: 'https://mdn.mozillademos.org/files/5399/gallery_1.jpg',
    },
    {
      id: 'gallery_4',
      x: 200,
      y: 100,
      width: 100,
      height: 115,
      src: 'https://mdn.mozillademos.org/files/5405/gallery_4.jpg',
    },
  ];

  const draw = (function () {
    const cache = {};

    return function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      images.forEach(({ id, x, y, width, height, src }) => {
        if (cache[id]) {
          ctx.drawImage(cache[id], x, y);
          return;
        }
        const img = new Image(width, height);
        img.onload = () => {
          ctx.drawImage(img, x, y);
          cache[id] = img;
        };
        img.src = src;
      });
    };
  })();

  function isIntersect(point, image) {
    return (
      point.x > image.x &&
      point.x < image.x + image.width &&
      point.y > image.y &&
      point.y < image.y + image.height
    );
  }

  canvas.addEventListener('mousedown', (e) => {
    const pos = {
      x: e.clientX - canvas.offsetLeft,
      y: e.clientY - canvas.offsetTop,
    };
    images.forEach((image) => {
      if (isIntersect(pos, image)) {
        mousePos = pos;
        draggable = true;
        target = image;
      }
    });
  });

  canvas.addEventListener('mousemove', (e) => {
    if (draggable === false) return;
    const pos = {
      x: e.clientX - canvas.offsetLeft,
      y: e.clientY - canvas.offsetTop,
    };
    target.x += pos.x - mousePos.x;
    target.y += pos.y - mousePos.y;
    mousePos = pos;
    draw();
  });

  canvas.addEventListener('mouseup', () => {
    draggable = false;
    target = null;
    mousePos = null;
  });

  draw();
}

main();
