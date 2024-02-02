export const truncateTrailingZeros = (input: string): string => {
  if (!input.includes(".")) {
    return input;
  }

  let result = input;

  while (result.endsWith("0")) {
    result = result.slice(0, -1);
  }

  if (result.endsWith(".")) {
    result = result.slice(0, -1);
  }

  return result;
};
