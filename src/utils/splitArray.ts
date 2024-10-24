// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function splitArray(array: any[], n: number) {
  if (n < 2) return [array];

  const len = array.length;
  const result = [];
  let i = 0,
    size;

  if (len % n === 0) {
    size = Math.floor(len / n);
    while (i < len) {
      result.push(array.slice(i, (i += size)));
    }
  } else {
    while (i < len) {
      size = Math.ceil((len - i) / n--);
      result.push(array.slice(i, (i += size)));
    }
  }

  return result;
}
