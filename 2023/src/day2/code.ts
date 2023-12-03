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

export const extractCubesForOneSet = (set: string, color: Color): number => {
  return set.split(',')
    .filter((c) => c.includes(color))
    .at(0)?.trim()
    .split(' ')
    .map(parseInt)
    .at(0) ?? 0;
  // return parseInt(num || '0');
}