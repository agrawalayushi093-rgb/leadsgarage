export function scatterBubbles(width, height, textWidth, limit) {
  const outerGap = width < 600 ? 6 : 16;
  const textGap = width < 600 ? 12 : 28;
  const sideWidth = Math.max(1, (width - textWidth) / 2 - textGap - outerGap);
  const maxSize = Math.min(100, sideWidth * .7, height * .18);
  const travel = height + 2 * maxSize;
  const perSide = Math.min(Math.floor(limit / 2), Math.max(6, Math.floor(sideWidth * height / 6500)));
  const placed = [];
  let seed = 7319;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  for (let index = 0; index < perSide * 2; index++) {
    const side = index % 2;
    const diameter = maxSize * (.35 + .65 * random());
    const origin = side === 0 ? outerGap : width - outerGap - sideWidth;
    for (let attempt = 0; attempt < 350; attempt++) {
      const left = origin + random() * Math.max(0, sideWidth - diameter);
      const phase = random();
      const centerX = left + diameter / 2;
      const centerY = ((-travel * phase + diameter / 2) % travel + travel) % travel;
      const collides = placed.some(other => {
        const distanceY = Math.abs(centerY - other.centerY);
        const clearance = (diameter + other.diameter) / 2 + 16;
        return Math.abs(centerX - other.centerX) < clearance && Math.min(distanceY, travel - distanceY) < clearance;
      });
      if (collides) continue;
      placed.push({ left, diameter, phase, centerX, centerY, travel, maxSize, blur: [0, 0, 2.5, 0, 4, 1][index % 6] });
      break;
    }
  }
  return placed;
}
