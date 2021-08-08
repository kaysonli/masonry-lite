export function calcPositions({ columns = 2, gap = 7, elements }) {
  if (!elements || !elements.length) {
    return [];
  }
  const y = [];
  const positions = [];
  elements.forEach((item, index) => {
    if (y.length < columns) {
      y.push(item.offsetHeight);
      positions.push({
        left: (index % columns) * (item.offsetWidth + gap),
        top: 0
      });
    } else {
      const min = Math.min(...y);
      const idx = y.indexOf(min);
      y.splice(idx, 1, min + gap + item.offsetHeight);
      positions.push({
        left: idx * (item.offsetWidth + gap),
        top: min + gap
      });
    }
  });
  return { positions, containerHeight: positions[positions.length - 1].top + elements[elements.length - 1].offsetHeight };
}