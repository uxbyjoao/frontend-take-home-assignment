import { Locale } from 'types/locale';
import { Currency } from 'types/currency';

export const currency = (value: number, currency?: Currency): string => {
  const { locale = 'en-US', symbol = 'USD' } = currency || {};

  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: symbol,
  }).format(value);
};

export const formatNumberToLocaleString = (
  value: number,
  locale?: Locale
): string => {
  return Intl.NumberFormat(locale || 'en-US').format(value);
};

export const sanitizeStringToNumber = (value: string): number => {
  return +value.replace(/[^0-9]/g, '');
};
