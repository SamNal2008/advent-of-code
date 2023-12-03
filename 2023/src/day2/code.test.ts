import {
  Color, computeSetPower,
  extractNumberOfCubesForOneColorInSet,
  extractNumberOfCubesPerColorForOneSet, getGamePower, getMinCubesPerColorForSets, sumAllPossibleGames,
  verifyIfGameIsPossible,
} from './code';
import { readFileSync } from 'fs';


describe('Day 2', () => {

  describe('extractCubesForOneSet', () => {
    it.each([2, 3, 4])('should return the number of red cubes (%p) for one game', (numberOfRed: number) => {
      const set = `2 blue, ${numberOfRed} red`;
      expect(extractNumberOfCubesForOneColorInSet(set, Color.RED)).toBe(numberOfRed);
    });

    it('should return the number of red cubes for one set', () => {
      const set = '2 red, 3 blue, 4 green';
      expect(extractNumberOfCubesForOneColorInSet(set, Color.RED)).toBe(2);
    });

    it('should return 0 if no green cubes', () => {
      const set = '2 red, 3 blue';
      expect(extractNumberOfCubesForOneColorInSet(set, Color.GREEN)).toBe(0);
    });

    it('should return the exact number of cubes for each color', () => {
      const set = '2 red, 3 blue, 4 green';
      expect(extractNumberOfCubesForOneColorInSet(set, Color.RED)).toBe(2);
      expect(extractNumberOfCubesForOneColorInSet(set, Color.BLUE)).toBe(3);
      expect(extractNumberOfCubesForOneColorInSet(set, Color.GREEN)).toBe(4);
    });
  });

  describe('extractNumberOfCubesForOneSet', () => {
    it('should extract the right number of cubes for each color in one set', () => {
      const set = '2 red, 3 blue, 4 green';
      expect(extractNumberOfCubesPerColorForOneSet(set)).toEqual({
        [ Color.RED ]: 2,
        [ Color.BLUE ]: 3,
        [ Color.GREEN ]: 4,
      });
    });
  });

  describe('verifyIfGameIsPossible', () => {

    const initialState = {
      [ Color.RED ]: 12,
      [ Color.BLUE ]: 13,
      [ Color.GREEN ]: 14,
    };

    it('should return true if the game is possible', () => {
      const game = 'Game1: 1 red, 2 blue, 3 green; 4 red, 5 blue, 6 green';
      expect(verifyIfGameIsPossible(game, initialState)).toBeTruthy();
    });

    it('should return false if the game is not possible', () => {
      const game = 'Game1: 1 red, 2 blue, 3 green; 4 red, 5 blue, 15 green';
      expect(verifyIfGameIsPossible(game, initialState)).toBeFalsy();
    });
  });

  describe('sumAllPossibleGames', () => {
    it('should return the sum of all possible games', () => {
      const games = 'Game1: 1 red, 2 blue, 3 green; 4 red, 5 blue, 6 green\n'
        + 'Game2: 7 red, 8 blue, 9 green; 10 red, 11 blue, 12 green';
      const initialState = {
        [ Color.RED ]: 12,
        [ Color.BLUE ]: 13,
        [ Color.GREEN ]: 14,
      };
      expect(sumAllPossibleGames(games, initialState)).toBe(3);
    });

    it('should give me the answer', () => {
      const input = readFileSync('./src/day2/input.txt', 'utf8');
      const initialState = {
        [ Color.RED ]: 12,
        [ Color.BLUE ]: 14,
        [ Color.GREEN ]: 13,
      };
      expect(sumAllPossibleGames(input, initialState)).toBe(0);
    });
  });

  describe('Getting the second stars', () => {
    describe('getMinCubesForOneSet', () => {
      it('should return the number of cubes for one set', () => {
        const set = '2 red, 3 blue, 4 green';
        expect(getMinCubesPerColorForSets(set)).toEqual({
          [ Color.RED ]: 2,
          [ Color.BLUE ]: 3,
          [ Color.GREEN ]: 4,
        });
      });

      it('should return the minimum number of cubes between two set', () => {
        const set = '2 red, 3 blue, 4 green; 1 red, 4 blue, 3 green';
        expect(getMinCubesPerColorForSets(set)).toEqual({
          [ Color.RED ]: 2,
          [ Color.BLUE ]: 4,
          [ Color.GREEN ]: 4,
        });
      });
    });

    it('should compute the power for one set', () => {
      const res = computeSetPower({
        [Color.GREEN]: 4,
        [Color.RED]: 2,
        [Color.BLUE]: 6
      });
      expect(res).toEqual(48);
    });

    it('should compute the power for one game', () => {
      const game = 'Game1: 1 red, 2 blue, 3 green; 4 red, 5 blue, 6 green';
      expect(getGamePower(game)).toBe(4 * 5 * 6);
    });

    it('should compute the power for several games', () => {
      const games = 'Game1: 2 red, 2 blue, 3 green' + '\n'
        + 'Game2: 7 red, 8 blue, 9 green; 10 red, 11 blue, 12 green';

      expect(getGamePower(games)).toBe(2 * 2 * 3 + 10 * 11 * 12);
    });

    it('should give me the response for the second stars', () => {
      const input = readFileSync('./src/day2/input.txt', 'utf8');
      expect(getGamePower(input)).toBe(0);
    });
  });
});