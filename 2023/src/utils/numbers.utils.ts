
const NUMBER_UNDER_10_MAP = new Map<number, string[]>([
  [0, ['zero', '0']],
  [1, ['one', '1']],
  [2, ['two', '2']],
  [3, ['three', '3']],
  [4, ['four', '4']],
  [5, ['five', '5']],
  [6, ['six', '6']],
  [7, ['seven', '7']],
  [8, ['eight', '8']],
  [9, ['nine', '9']],
]);

const myParseInt = (char: string) => {
  for (const [number, values] of NUMBER_UNDER_10_MAP) {
    if (values.includes(char)) {
      return number;
    }
  }
  return NaN;
}

export const isNumberUnder10 = (char?: string | null) => {
  if (!char) {
    return false;
  }
  return !isNaN(myParseInt(char));
}

export const extractNumber = (char?: string | null) => {
  if (!isNumberUnder10(char)) {
    throw new Error('The char is not a number under 10');
  }
  const numberUnder10AsString = char as string;
  return myParseInt(numberUnder10AsString);
}