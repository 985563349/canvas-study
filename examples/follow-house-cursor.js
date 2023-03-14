function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const canvasPos = getPosition(canvas);
  let mouseX = 0;
  let mouseY = 0;

  function setMousePosition(e) {
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY - canvasPos.y;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 50, 0, 2 * Math.PI, true);
    ctx.fillStyle = '#FF6A6A';
    ctx.fill();
  }

  canvas.addEventListener('mousemove', setMousePosition, false);

  function getPosition(el) {
    let x = 0;
    let y = 0;

    while (el) {
      x += el.offsetLeft - el.scrollLeft + el.clientLeft;
      y += el.offsetTop - el.scrollTop + el.clientTop;
      el = el.offsetParent;
    }

    return { x, y };
  }
}

main();
