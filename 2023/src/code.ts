import { extractNumber, isNumberUnder10 } from './utils/numbers.utils';

const extractNumberIfPresent = (currentChar: string, shouldBeReplaced: boolean, initialValue?: number): number | undefined => {
  const shouldExtractNumber = isNumberUnder10(currentChar) && shouldBeReplaced;
  return shouldExtractNumber ? extractNumber(currentChar) : initialValue;
};

const computeLineResult = (leftNumberValue?: number, rightNumberValue?: number): number => {
  if (leftNumberValue === undefined) {
    return 0;
  }
  if (rightNumberValue === undefined) {
    rightNumberValue = leftNumberValue;
  }
  return ( leftNumberValue * 10 ) + rightNumberValue;
};

export const analyzeOneLine = (line: string): number => {
  let leftNumberValue = undefined;
  let rightNumberValue = undefined;
  for (let i = 0; i < line.length; i++) {
    const currentChar = line[ i ];
    leftNumberValue = extractNumberIfPresent(currentChar, leftNumberValue === undefined, leftNumberValue);
    rightNumberValue = extractNumberIfPresent(currentChar, true, rightNumberValue);
  }
  return computeLineResult(leftNumberValue, rightNumberValue);
};

export const analyze = (input: string): number => {
  const lines = input.split('\n');
  let sum = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[ i ];
    sum += analyzeOneLine(line);
  }
  return sum;
};