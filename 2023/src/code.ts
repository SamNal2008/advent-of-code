import { extractNumber, isNumberUnder10 } from './utils/numbers.utils';

function extractLeftNumberIfPresent(currentChar: string, leftNumberValue?: number): any {
  if (isNumberUnder10(currentChar) && leftNumberValue === undefined) {
    leftNumberValue = extractNumber(currentChar);
  }
  return leftNumberValue;
}

function extractRightNumberIfPresent(currentChar: string, rightNumberValue?: number): any {
  if (isNumberUnder10(currentChar)) {
    rightNumberValue = extractNumber(currentChar);
  }
  return rightNumberValue;
}

const computeLineResult = (leftNumberValue?: number, rightNumberValue?: number): number => {
  if (leftNumberValue === undefined) {
    return 0;
  }
  if (rightNumberValue === undefined) {
    rightNumberValue = leftNumberValue;
  }
  return ( leftNumberValue * 10 ) + rightNumberValue;
}

export const analyzeOneLine = (line: string) => {
  let leftNumberValue = undefined;
  let rightNumberValue = undefined;
  for (let i = 0; i < line.length; i++) {
    const currentChar = line[ i ];
    leftNumberValue = extractLeftNumberIfPresent(currentChar, leftNumberValue);
    rightNumberValue = extractRightNumberIfPresent(currentChar, rightNumberValue);
  }
  return computeLineResult(leftNumberValue, rightNumberValue);
};

export const analyze = (input: string) => {
  const lines = input.split('\n');
  let sum = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[ i ];
    sum += analyzeOneLine(line);
  }
  return sum;
};