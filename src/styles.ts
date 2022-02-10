import { globalCss } from '@stitches/react';
import { toRem } from 'theme/helpers';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$workSans',
    fontSize: toRem(16),
  },

  b: {
    fontSize: 'inherit',
    fontWeight: '$semiBold',
  },

  /* Chrome, Safari, Edge, Opera */
  'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },

  /* Firefox */
  'input[type=number]': {
    '-moz-appearance': 'textfield',
  },
});
