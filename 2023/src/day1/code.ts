import { extractNumber, isNumberUnder10, NUMBER_UNDER_10_MAP } from './utils/numbers.utils';

export const extractNumberIfPresentV2 = (index: number, line: string, initialValue?: number): number | undefined => {
  const currentChar = line[index];
  if (isNumberUnder10(currentChar)) return extractNumber(currentChar);
  for (const [, values] of NUMBER_UNDER_10_MAP) {
    if (values.firstLetter === currentChar) {
      const possibleNumber = line.substring(index, index + values.length);
      if (isNumberUnder10(possibleNumber)) {
        return extractNumber(possibleNumber);
      }
    }
  }
  return initialValue;
}

const extractNumberIfPresent = (currentChar: string, initialValue?: number): number | undefined => {
  return isNumberUnder10(currentChar) ? extractNumber(currentChar) : initialValue;
};

const computeLineResult = (leftNumberValue?: number, rightNumberValue?: number): number => {
  const leftFinalValue = leftNumberValue ?? 0;
  const rightFinalValue = rightNumberValue ?? leftFinalValue;
  return ( leftFinalValue * 10 ) + rightFinalValue;
};

export const analyzeOneLine = (line: string): number => {
  let leftNumberValue = undefined;
  let rightNumberValue = undefined;
  for (let i = 0; i < line.length; i++) {
    leftNumberValue = leftNumberValue === undefined ? extractNumberIfPresentV2(i, line, leftNumberValue) : leftNumberValue;
    rightNumberValue = extractNumberIfPresentV2(i, line, rightNumberValue);
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