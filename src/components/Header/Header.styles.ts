import { styled, toRem } from 'theme';

export const HeaderWrapper = styled('header', {
  width: '100%',
  height: toRem(56),
  background: '$neutralWhite',

  '@desktop': {
    height: toRem(80),
  },
});

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  maxWidth: toRem(1440),
  padding: toRem(16),
  margin: '0 auto',

  img: {
    width: toRem(75),
    height: toRem(24),
  },

  '@desktop': {
    padding: toRem(24, 56),

    img: {
      width: toRem(100),
      height: toRem(32),
    },
  },
});
