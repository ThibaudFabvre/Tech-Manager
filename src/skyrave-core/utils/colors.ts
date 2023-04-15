export const rgbToHex = (r: any, g: any, b: any) => {
  const hex = ((r << 16) | (g << 8) | b).toString(16);
  return `#${hex.padStart(6, '0')}`;
};

export const getColorFromGradient = (gradient: Array<string>, percentage: number) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradientObj = ctx.createLinearGradient(0, 0, 100, 0); // 100 is the width of the gradient
    gradient.forEach((color, index) => {
      const stop = index / (gradient.length - 1);
      gradientObj.addColorStop(stop, color);
    });
    ctx.fillStyle = gradientObj;
    ctx.fillRect(0, 0, 100, 1); // 100 is the width of the gradient
    const steps = 100;
    const colorIndex = Math.round((steps - 1) * (percentage / 100));
    const { data } = ctx.getImageData(colorIndex, 0, 1, 1);
    const hex = rgbToHex(data[0], data[1], data[2]);
    return hex;
  }
};

export const gradientArray = [
  'rgb(255, 0, 0)',
  'rgb(255, 127, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 0, 255)',
  'rgb(75, 0, 130)',
  'rgb(148, 0, 211)',
  'rgb(255, 192, 203)',
];
