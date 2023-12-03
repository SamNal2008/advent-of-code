import { extractNumber, isNumberUnder10 } from './utils/numbers.utils';

export const analyzeOneLine = (line: string) => {
  let leftNumberValue = null;
  let rightNumberValue = null;
  for (let i = 0; i < line.length; i++) {
    const currentChar = line[ i ];
    if (isNumberUnder10(currentChar) && leftNumberValue === null) {
      leftNumberValue = extractNumber(currentChar);
    }
    if (isNumberUnder10(currentChar)) {
      rightNumberValue = extractNumber(currentChar);
    }
  }
  if (leftNumberValue === null) {
    leftNumberValue = 0;
  }
  if (rightNumberValue === null) {
    rightNumberValue = leftNumberValue;
  }
  return ( leftNumberValue * 10 ) + rightNumberValue;
};

export const analyze = (input: string) => {
  const lines = input.split('\n');
  let sum = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[ i ];
    sum += analyzeOneLine(line);
  }
  return sum;
}