document.addEventListener('DOMContentLoaded', () => {
  // Initialize the canvas
  const canvas = document.getElementById('collaboration-canvas');
  const ctx = canvas.getContext('2d');

  // Set the canvas size to the size of the window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize the draw state
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;
  let lineWidth = 1;

  // Add a mousedown event listener to the canvas
  canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
  });

  // Add a mousemove event listener to the canvas
  canvas.addEventListener('mousemove', (event) => {
    if (isDrawing) {
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
      [lastX, lastY] = [event.offsetX, event.offsetY];
      hue++;
      if (hue >= 360) {
        hue = 0;
      }
      if (lineWidth >= 50) {
        lineWidth = 1;
      } else {
        lineWidth++;
      }
    }
  });

  // Add a mouseup event listener to the canvas
  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
  });

  // Add a mouseout event listener to the canvas
  canvas.addEventListener('mouseout', () => {
    isDrawing = false;
  });

  // Add a click event listener to the eraser button
  document.getElementById('eraser-button').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
});