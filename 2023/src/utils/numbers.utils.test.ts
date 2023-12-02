import { extractNumber, isNumberUnder10 } from './numbers.utils';

describe('Numbers utils', () => {

  const INVALID_NUMBERS_UNDER_10 = [null, undefined, 'a', '1a', '10'];

  describe('isNumberUnder10', () => {
    it('should return true when the value is a number', () => {
      expect(isNumberUnder10('1')).toBeTruthy();
    });

    it.each
    (INVALID_NUMBERS_UNDER_10)
    (`should return false when the value is not a number : %s`, (value) => {
      expect(isNumberUnder10(value)).toBeFalsy();
    });
  });

  describe('extractNumber', () => {
    it('should return the number when the value is a number', () => {
      expect(extractNumber('1')).toBe(1);
    });

    it.each
    (INVALID_NUMBERS_UNDER_10)
    ('should throw an error when the value is not a number : %s', (invalidNumber) => {
      expect(() => extractNumber(invalidNumber)).toThrow('The char is not a number under 10');
    });
  });
});