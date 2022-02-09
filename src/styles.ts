import { globalCss } from '@stitches/react';

import { styled } from 'theme';

export const App = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '$blueGray10',
  fontFamily: '$workSans',
  fontWeight: '$medium',
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
});
