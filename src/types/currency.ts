import { Locale } from 'types/locale';

export type Currency = {
  locale: Locale;
  symbol: 'USD' | 'EUR' | 'GBP' | 'BRL' | 'CAD';
};
