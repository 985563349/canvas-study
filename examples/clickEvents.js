function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const circles = [
    {
      id: 'red',
      x: 100,
      y: 100,
      radius: 50,
      color: 'rgb(255,0,0)',
    },
    {
      id: 'green',
      x: 300,
      y: 100,
      radius: 50,
      color: 'rgb(0,255,0)',
    },
  ];

  // 方案一：计算点击位置是否与图形相交

  // circles.forEach((circle) => {
  //   ctx.beginPath();
  //   ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
  //   ctx.fillStyle = circle.color;
  //   ctx.fill();
  // });

  // function isIntersect(point, circle) {
  //   return Math.sqrt((point.x - circle.x) ** 2 + (point.y - circle.y) ** 2) < circle.radius;
  // }

  // canvas.addEventListener('click', (e) => {
  //   const mousePos = {
  //     x: e.clientX - canvas.offsetLeft,
  //     y: e.clientY - canvas.offsetTop,
  //   };
  //   circles.forEach((circle) => {
  //     if (isIntersect(mousePos, circle)) {
  //       console.log(circle.id);
  //     }
  //   });
  // });

  /**
   * 方案二：模拟命中区域
   * 思路：在内存中创建一个画布，它和视图中的画布具有几乎相同的绘制形状，但是每个形状都有唯一的颜色。
   * 获取点击区域下的像素并找到具有相同颜色的形状
   */

  const hitCanvas = document.createElement('canvas');
  const hitCtx = hitCanvas.getContext('2d');

  function getRandomColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  }

  const colorsHash = {};

  circles.forEach((circle) => {
    while (true) {
      const colorKey = getRandomColor();
      if (!colorsHash[colorKey]) {
        circle.colorKey = colorKey;
        colorsHash[colorKey] = circle;
        return;
      }
    }
  });

  circles.forEach((circle) => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = circle.color;
    ctx.fill();

    hitCtx.beginPath();
    hitCtx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
    hitCtx.fillStyle = circle.colorKey;
    hitCtx.fill();
  });

  canvas.addEventListener('click', (e) => {
    const mousePos = {
      x: e.clientX - canvas.offsetLeft,
      y: e.clientY - canvas.offsetTop,
    };

    // 获取光标下像素
    const pixel = hitCtx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
    const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
    const shape = colorsHash[color];
    if (shape) {
      console.log(shape.id);
    }
  });
}

main();
