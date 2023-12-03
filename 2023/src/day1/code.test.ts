import { readFileSync } from 'fs';
import { analyze, analyzeOneLine } from './code';


describe('Advent of code', () => {

  it('should give me the answer', () => {
    const input = readFileSync('./src/day1/input.txt', 'utf8');
    const day1_part1 = 55172;
    const day1_part2 = 54925;
    expect(analyze(input)).toBe(day1_part2);
  });


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

  describe('Day 2 rules', () => {
    it('should find the substring containing the number', () => {
      const input = 'one';
      expect(analyze(input)).toBe(11);
    });

    it('should find the two number in the string', () => {
      const input = "onetwo";
      expect(analyze(input)).toBe(12);
    });

    it('should find the first and the last number in the string', () => {
      const input = "oneonefive\nonetwo";
      expect(analyze(input)).toBe(15 + 12);
    });
  });
});