export const isNumberUnder10 = (char?: string | null) => {
  if (!char || char.length !== 1) {
    return false;
  }
  return !isNaN(parseInt(char));
}