/**
 * Draws an infinite spinner animation on a given canvas element.
 *
 * @param {HTMLCanvasElement} canvas - The target canvas element.
 * @param {Object} [options] - Optional configuration object.
 * @param {number} [options.entireThingSpinSpeed=0.1] - Speed at which the entire spinner rotates. Higher values make it spin faster.
 * @param {number} [options.lengthModifierSpeed=10] - Speed at which the spinner's arc length changes. Higher values make it slower.
 * @param {string} [options.strokeStyle='#e74c3c'] - The color or style to use for the spinner's stroke.
 * @param {number} [options.lineWidth=10] - The thickness of the spinner's stroke.
 * @param {CanvasLineCap} [options.lineCap='round'] - The shape used for line ends: 'butt', 'round', or 'square'.
 * @param {number} [options.arcMaxLength=80] - The maximum dynamic arc length for the sine wave. (0 ≤ arcMaxLength ≤ 100)
 */
function infiniteSpinner(canvas, {
  entireThingSpinSpeed = 0.1,
  lengthModifierSpeed = 10,
  strokeStyle = '#008bff',
  lineWidth = 10,
  lineCap = 'round',
  arcMaxLength = 80
} = {}) {
  const ctx = canvas.getContext('2d');

  // Clamp arcMaxLength to 0..100 to enforce the valid range
  arcMaxLength = Math.max(0, Math.min(arcMaxLength, 100));

  // Apply stroke styles
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = lineCap;

  // Calculate center and radius
  const x = canvas.width / 2;
  const y = canvas.height / 2;
  const radius = Math.min(canvas.width, canvas.height) / 2 - lineWidth;

  let i = 0;

  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    // The spinner's start angle. i increments over time so it "rotates"
    const startArc = i / (Math.PI * 2);

    // Use a sine wave to vary the arc length:
    //   ((sin(i / lengthModifierSpeed)+1) * 0.5) scales sin from [−1..1] to [0..1].
    //   Multiply by arcMaxLength -> range [0..arcMaxLength].
    //   Then we add (100 - arcMaxLength/2) as an offset so the arc is never too tiny or too large.
    const arcLength = ((Math.sin(i / lengthModifierSpeed) + 1) * 0.5) * arcMaxLength + ((100 - arcMaxLength) / 2);
    const endArc = startArc + (Math.PI * 2) / 100 * arcLength;

    ctx.arc(x, y, radius, startArc, endArc, false);
    ctx.stroke();

    // Advance rotation
    i += entireThingSpinSpeed;
  }, 10);
}