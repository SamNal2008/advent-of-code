import { isNumber } from './utils/numbers.utils';

export const analyzeOneLine = (line: string) => {
  let leftNumberValue = null;
  let rightNumberValue = null;
  for (let i = 0; i < line.length; i++) {
    const leftNumber = line[ i ];
    const rightNumber = line[ line.length - i - 1 ];
    if (isNumber(leftNumber) && leftNumberValue === null) {
      leftNumberValue = parseInt(leftNumber);
    }
    if (isNumber(rightNumber) && rightNumberValue === null) {
      rightNumberValue = parseInt(rightNumber);
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