export const toRem = (...px: number[]): string => {
  return px.map((p) => `${p / 16}rem`).join(' ');
};
