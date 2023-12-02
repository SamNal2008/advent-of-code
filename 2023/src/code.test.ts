import { readFileSync } from 'fs';
import { analyze, analyzeOneLine } from './code';


describe('Advent of code', () => {
  describe('Row extraction', () => {
    it('return the concat of the only number present', () => {
      const input = '1';
      expect(analyzeOneLine(input)).toBe(11);
    });

    it('return the concat of the only number present', () => {
      const input = '2';
      expect(analyzeOneLine(input)).toBe(22);
    });

    it('return the concat of the only number present', () => {
      const input = '23';
      expect(analyzeOneLine(input)).toBe(23);
    });

    it('should return the concat of the first numbers', () => {
      const input = '123';
      expect(analyzeOneLine(input)).toBe(13);
    });

    it('should return 0 when no number is present', () => {
      const input = 'abc';
      expect(analyzeOneLine(input)).toBe(0);
    });

    it('should return 0 when no number is present', () => {
      const input = 'abc123';
      expect(analyzeOneLine(input)).toBe(13);
    });
  });

  describe('Sum of all rows', () => {
    it('should return the sum of all rows', () => {
      const input = '1\n2\n3';
      expect(analyze(input)).toBe(66);
    });
  });

  it('should give me the example of day 1', () => {
    const input = readFileSync('./src/input.txt', 'utf8');
    expect(analyze(input)).toBe(55172);
  });
});