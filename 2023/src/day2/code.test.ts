import { Color, extractCubesForOneSet } from './code';


describe('Day 2', () => {
  it.each([2, 3, 4])('should return the number of red cubes (%p) for one game', (numberOfRed: number) => {
    const set = `2 blue, ${numberOfRed} red`;
    expect(extractCubesForOneSet(set, Color.RED)).toBe(numberOfRed);
  });

  it('should return the number of red cubes for one set', () => {
    const set = '2 red, 3 blue, 4 green';
    expect(extractCubesForOneSet(set, Color.RED)).toBe(2);
  });

  it('should return 0 if no green cubes', () => {
    const set = '2 red, 3 blue';
    expect(extractCubesForOneSet(set, Color.GREEN)).toBe(0);
  });

  it('should return the exact number of cubes for each color', () => {
    const set = '2 red, 3 blue, 4 green';
    expect(extractCubesForOneSet(set, Color.RED)).toBe(2);
    expect(extractCubesForOneSet(set, Color.BLUE)).toBe(3);
    expect(extractCubesForOneSet(set, Color.GREEN)).toBe(4);
  });
});