import { extractNumber, isNumberUnder10 } from './numbers.utils';

describe('Numbers utils', () => {

  const INVALID_NUMBERS_UNDER_10 = [null, undefined, 'a', '1a', '10', 'height'];

  describe('isNumberUnder10', () => {
    const VALID_NUMBERS_UNDER_10 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const VALID_NUMBERS_AS_STRING_UNDER_10 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    it.each(VALID_NUMBERS_UNDER_10)('should return true when the value is a number : %p', (num) => {
      expect(isNumberUnder10(num)).toBeTruthy();
    });

    it.each
    (INVALID_NUMBERS_UNDER_10)
    (`should return false when the value is not a number : %s`, (value) => {
      expect(isNumberUnder10(value)).toBeFalsy();
    });

    it.each(VALID_NUMBERS_AS_STRING_UNDER_10)('should return true if the number is written as a string : %p', (numberAsString) => {
      expect(isNumberUnder10(numberAsString)).toBeTruthy();
    });
  });

  describe('extractNumber', () => {
    it.each([
      {numberAsString: '1', numberExpected: 1},
      {numberAsString: '2', numberExpected: 2},
      {numberAsString: '3', numberExpected: 3},
      {numberAsString: '4', numberExpected: 4},
      {numberAsString: '5', numberExpected: 5},
      {numberAsString: '6', numberExpected: 6},
      {numberAsString: '7', numberExpected: 7},
      {numberAsString: '8', numberExpected: 8},
      {numberAsString: '9', numberExpected: 9},
    ])('should return the number when the value is a number : $numberAsString => $numberExpected', ({numberAsString, numberExpected}) => {
      expect(extractNumber(numberAsString)).toBe(numberExpected);
    });

    it.each
    (INVALID_NUMBERS_UNDER_10)
    ('should throw an error when the value is not a number : %s', (invalidNumber) => {
      expect(() => extractNumber(invalidNumber)).toThrow('The char is not a number under 10');
    });

    it.each([
      {numberAsString: 'one', numberExpected: 1},
      {numberAsString: 'two', numberExpected: 2},
      {numberAsString: 'three', numberExpected: 3},
      {numberAsString: 'four', numberExpected: 4},
      {numberAsString: 'five', numberExpected: 5},
      {numberAsString: 'six', numberExpected: 6},
      {numberAsString: 'seven', numberExpected: 7},
      {numberAsString: 'eight', numberExpected: 8},
      {numberAsString: 'nine', numberExpected: 9},
    ])
    ('should return the number when the value is a number written as a string : $numberAsString => $numberExpected', ({numberAsString, numberExpected}) => {
      expect(extractNumber(numberAsString)).toBe(numberExpected);
    });
  });
});