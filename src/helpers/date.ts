export const sumMonth = (date: Date, quantity: number): Date => {
  return new Date(new Date(date).setMonth(date.getMonth() + quantity));
};

export const subtractMonth = (date: Date, quantity: number): Date => {
  return new Date(new Date(date).setMonth(date.getMonth() - quantity));
};
