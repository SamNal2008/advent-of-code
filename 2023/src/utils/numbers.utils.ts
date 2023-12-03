type FindNumberUtil = {
  firstLetter: string,
  length: number,
}

type NumberUtil = {
  representations: string[]
} & FindNumberUtil;

type NumberUnderTen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const NUMBER_UNDER_10_MAP = new Map<NumberUnderTen, NumberUtil>([
  [1, {representations: ['one', '1'], firstLetter: 'o', length: 3}],
  [2, {representations: ['two', '2'], firstLetter: 't', length: 3}],
  [3, {representations: ['three', '3'], firstLetter: 't', length: 5}],
  [4, {representations: ['four', '4'], firstLetter: 'f', length: 4}],
  [5, {representations: ['five', '5'], firstLetter: 'f', length: 4}],
  [6, {representations: ['six', '6'], firstLetter: 's', length: 3}],
  [7, {representations: ['seven', '7'], firstLetter: 's', length: 5}],
  [8, {representations: ['eight', '8'], firstLetter: 'e', length: 5}],
  [9, {representations: ['nine', '9'], firstLetter: 'n', length: 4}]
]);

const myParseInt = (subString: string) => {
  for (const [number, values] of NUMBER_UNDER_10_MAP) {
    if (values.representations.includes(subString)) {
      return number;
    }
  }
  return NaN;
}

export const isNumberUnder10 = (subString?: string | null) => {
  if (!subString) {
    return false;
  }
  return !isNaN(myParseInt(subString));
}

export const extractNumber = (subString?: string | null) => {
  if (!isNumberUnder10(subString)) {
    throw new Error('The char is not a number under 10');
  }
  const numberUnder10AsString = subString as string;
  return myParseInt(numberUnder10AsString);
}