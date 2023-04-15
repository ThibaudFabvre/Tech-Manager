export const arrayToString = (array: Array<any>) => {
  return array.reduce((prev, curr, index) => {
    return prev + curr + (index + 1 !== array.length ? ',' : '');
  }, '');
};
