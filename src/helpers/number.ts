type Locale =
  | 'en-US'
  | 'de-DE'
  | 'fr-FR'
  | 'it-IT'
  | 'es-ES'
  | 'pt-PT'
  | 'pt-BR';

type Currency = {
  locale: Locale;
  symbol: 'USD' | 'EUR' | 'GBP' | 'BRL' | 'CAD';
};

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
