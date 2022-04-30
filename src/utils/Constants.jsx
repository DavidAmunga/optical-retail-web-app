export const BARCODE_OPTIONS = {
  CODE128_AUTO: {
    name: 'CODE128 auto',
    type: 'string',
    caps: false,
  },
  CODE128_A: {
    name: 'CODE128 A',
    type: 'string',
    caps: true,
  },
  CODE128_B: {
    name: 'CODE128 B',
    type: 'string',
    caps: false,
  },
  CODE128_C: {
    name: 'CODE128 C',
    type: 'number',
    caps: false,
  },
};
export function pad(number, width) {
  width -= number.toString().length - /\./.test(number);
  if (width > 0) {
    return new Array(width + 1).join('0') + number;
  }
  return number + ''; // always return a string
}
export function range(start, end, step, count) {
  var len = (Math.abs(end - start) + 0 * 2) / (step || 1) + 1;
  var direction = start < end ? 1 : -1;
  var startingPoint = start - direction * 0;
  var stepSize = direction * (step || 1);

  return Array(parseInt(len))
    .fill(0)
    .filter((_, index) => startingPoint + stepSize * index <= end)
    .map(function (_, index) {
      return startingPoint + stepSize * index;
    })
    .slice(0, count);
}
