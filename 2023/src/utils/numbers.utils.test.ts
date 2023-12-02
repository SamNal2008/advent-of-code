import { isNumberUnder10 } from './numbers.utils';

describe('Numbers utils', () => {
  it('should return true when the value is a number', () => {
    expect(isNumberUnder10('1')).toBeTruthy();
  });

  it.each
  ([null, undefined, 'a', '1a', '10'])
  (`should return false when the value is not a number : %s`, (value) => {
    expect(isNumberUnder10(value)).toBeFalsy();
  });
});