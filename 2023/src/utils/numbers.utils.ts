export const isNumberUnder10 = (char?: string | null) => {
  if (!char || char.length !== 1) {
    return false;
  }
  return !isNaN(parseInt(char));
}

export const extractNumber = (char?: string | null) => {
  if (!isNumberUnder10(char)) {
    throw new Error('The char is not a number under 10');
  }
  const numberUnder10AsString = char as string;
  return parseInt(numberUnder10AsString);
}