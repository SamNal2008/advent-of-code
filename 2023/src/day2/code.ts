// Game has the syntax : GameX: set1; set2
// Set has the syntax : X red, Y blue, Z green
// X, Y, Z are numbers
// Record looks like :
// Game1: 1 red, 2 blue, 3 green; 4 red, 5 blue, 6 green
// Game2: 7 red, 8 blue, 9 green; 10 red, 11 blue, 12 green

// We have initial state with : 12 red, 13 green, 14 blue

export enum Color {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
}

const ALL_COLORS = [Color.RED, Color.GREEN, Color.BLUE];

type ColorBySet = {
  [Color.RED]: number,
  [Color.BLUE]: number,
  [Color.GREEN]: number
};

export const extractNumberOfCubesForOneColorInSet = (set: string, color: Color): number => {
  return set.split(',')
    .filter((c) => c.includes(color))
    .at(0)?.trim()
    .split(' ')
    .map(parseInt)
    .at(0) ?? 0;
}

export const extractNumberOfCubesPerColorForOneSet = (set: string): ColorBySet => {
  return {
    [Color.BLUE]: extractNumberOfCubesForOneColorInSet(set, Color.BLUE),
    [Color.GREEN]: extractNumberOfCubesForOneColorInSet(set, Color.GREEN),
    [Color.RED]: extractNumberOfCubesForOneColorInSet(set, Color.RED),
  };
}

export const getMinCubesPerColorForSets = (sets: string): ColorBySet => {
  let initialState: ColorBySet = {
    [Color.RED]: 0,
    [Color.BLUE]: 0,
    [Color.GREEN]: 0
  };
  const allSets = sets.split(';').map((s) => s.trim());
  for (const set of allSets) {
    const cubes = extractNumberOfCubesPerColorForOneSet(set);
    ALL_COLORS.forEach((color) => {
      if (cubes[color] > initialState[color]) {
        initialState[color] = cubes[color];
      }
    });
  }
  return initialState;
}

export const computeSetPower = (colorBySet: ColorBySet) => {
  return colorBySet[Color.RED] * colorBySet[Color.BLUE] * colorBySet[Color.GREEN];
}

export const getGamePower = (games: string): number => {
  const allGames = games.split('\n').map(s => s.trim());
  let res = 0;
  allGames.map((game) => {
    const [, sets] = game.trim().split(':');
    const minCubesForSets = getMinCubesPerColorForSets(sets);
    res += computeSetPower(minCubesForSets);
  });
  return res;
}

export const verifyIfGameIsPossible = (game: string, initialState: ColorBySet): boolean => {
  const [, sets] = game.split(':').map(s => s.trim());
  const allSets = sets.split(';').map((s) => s.trim());
  let isPossible = true;
  allSets.forEach((set) => {
    const cubes = extractNumberOfCubesPerColorForOneSet(set);
    Object.entries(cubes).forEach(([color, numberOfCubes]) => {
      if (numberOfCubes > initialState[color as Color]) {
        isPossible = false;
      }
    });
  });
  return isPossible;
}

export const sumAllPossibleGames = (games: string, initialState: ColorBySet): number => {
  const gameList = games.split('\n');
  let sum = 0;
  gameList.forEach((game, index) => {
    const isGamePossible = verifyIfGameIsPossible(game, initialState);
    if (isGamePossible) {
      sum += index + 1;
    }
  });
  return sum;
}