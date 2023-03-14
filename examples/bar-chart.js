function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // chart zone: [x, y, width, height]
  const options = {
    chartZone: [50, 50, 1000, 700],
    yAxisLabel: ['0', '100', '200', '300', '400'],
    yMax: 400,
    xAxisLabel: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: [10, 50, 200, 330, 390, 320, 220],
    barStyle: {
      width: 70,
      color: '#1abc9c',
    },
  };

  function drawBarChart(options) {
    drawAxis(options);
    drawYLabels(options);
    drawXLabels(options);
    drawData(options);
  }

  drawBarChart(options);

  function drawAxis(options) {
    const chartZone = options.chartZone;

    ctx.moveTo(chartZone[0], chartZone[1]);
    ctx.lineTo(chartZone[0], chartZone[3]);
    ctx.lineTo(chartZone[2], chartZone[3]);

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#353535';
    ctx.stroke();
  }

  function drawYLabels(options) {
    const labels = options.yAxisLabel;
    const chartZone = options.chartZone;
    const yLength = (chartZone[3] - chartZone[1]) * 0.98;
    const gap = yLength / (labels.length - 1);

    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      let offset = ctx.measureText(label).width + 20;

      // draw text
      ctx.strokeStyle = '#eaeaea';
      ctx.font = '16px serif';
      ctx.fillText(label, chartZone[0] - offset, chartZone[3] - i * gap);

      // draw dividing
      ctx.beginPath();
      ctx.moveTo(chartZone[0] - 10, chartZone[3] - i * gap);
      ctx.lineTo(chartZone[0], chartZone[3] - i * gap);
      ctx.strokeStyle = '#353535';
      ctx.stroke();

      // draw guide
      ctx.beginPath();
      ctx.moveTo(chartZone[0], chartZone[3] - i * gap);
      ctx.lineTo(chartZone[2], chartZone[3] - i * gap);
      ctx.strokeStyle = '#eaeaea';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  function drawXLabels(options) {
    const labels = options.xAxisLabel;
    const chartZone = options.chartZone;
    const xLength = (chartZone[2] - chartZone[0]) * 0.96;
    const gap = xLength / labels.length;

    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const offset = ctx.measureText(label).width;

      ctx.strokeStyle = '#eaeaea';
      ctx.font = '18px serif';
      ctx.fillText(label, chartZone[0] + (i + 1) * gap - offset, chartZone[3] + 20);

      ctx.beginPath();
      ctx.moveTo(chartZone[0] + (i + 1) * gap - offset / 2, chartZone[3]);
      ctx.lineTo(chartZone[0] + (i + 1) * gap - offset / 2, chartZone[3] + 5);
      ctx.strokeStyle = '#353535';
      ctx.stroke();

      options.offsetXLabel = offset / 2;
    }
  }

  function drawData(options) {
    const data = options.data;
    const chartZone = options.chartZone;
    const xLength = (chartZone[2] - chartZone[0]) * 0.96;
    const gap = xLength / options.xAxisLabel.length;

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const width = options.barStyle.width;
      const height = (item / options.yMax) * (chartZone[3] - chartZone[1]) * 0.98;
      const x0 = chartZone[0] + (i + 1) * gap - options.barStyle.width / 2 - options.offsetXLabel;
      const y0 = chartZone[3] - height;

      ctx.fillStyle = options.barStyle.color || '#1abc9c';
      ctx.fillRect(x0, y0, width, height);
    }
  }
}

main();
