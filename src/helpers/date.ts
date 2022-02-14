import { Locale } from 'types/locale';

export const sumMonth = (date: Date, quantity: number): Date => {
  return new Date(new Date(date).setMonth(date.getMonth() + quantity));
};

export const subtractMonth = (date: Date, quantity: number): Date => {
  return new Date(new Date(date).setMonth(date.getMonth() - quantity));
};

export const getMonthLongName = (date: Date, locale?: Locale): string => {
  return date.toLocaleString(locale || 'en-US', { month: 'long' });
};

export const getMonthsFromNow = (date: Date): number => {
  const now = new Date();

  const months =
    (date.getFullYear() - now.getFullYear()) * 12 +
    date.getMonth() -
    now.getMonth();

  return months;
};
