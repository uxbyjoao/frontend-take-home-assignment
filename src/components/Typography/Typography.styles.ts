import { styled, toRem } from 'theme';

const align = {
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
};

const color = {
  brandColorPrimary: { color: '$brandColorPrimary' },
  brandColorSecondary: { color: '$brandColorSecondary' },

  blueGray10: { color: '$blueGray10' },
  blueGray50: { color: '$blueGray50' },
  blueGray300: { color: '$blueGray300' },
  blueGray400: { color: '$blueGray400' },
  blueGray600: { color: '$blueGray600' },
  blueGray900: { color: '$blueGray900' },

  neutralWhite: { color: '$neutralWhite' },
};

const variants = {
  color,
  align,
};

export const HeadingSmall = styled('span', {
  fontFamily: '$rubik',
  fontWeight: '$medium',
  fontSize: toRem(20),
  lineHeight: toRem(24),

  '@desktop': {
    fontSize: toRem(24),
    lineHeight: toRem(28.8),
  },

  variants,
});

export const HeadingMedium = styled('span', {
  fontFamily: '$rubik',
  fontWeight: '$medium',
  fontSize: toRem(24),
  lineHeight: toRem(28.8),

  '@desktop': {
    fontSize: toRem(32),
    lineHeight: toRem(38.4),
  },

  variants,
});

export const Subtitle = styled('span', {
  fontSize: toRem(18),
  lineHeight: toRem(21.6),

  '@desktop': {
    fontSize: toRem(20),
    lineHeight: toRem(24),
  },

  variants,
});

export const Caption = styled('span', {
  fontSize: toRem(12),
  lineHeight: toRem(16),

  variants,
});

export const Paragraph = styled('p', {
  fontSize: toRem(14),
  lineHeight: toRem(21),

  '@desktop': {
    fontSize: toRem(16),
    lineHeight: toRem(24),
  },

  variants,
});

export const Description = styled('span', {
  fontSize: toRem(12),
  lineHeight: toRem(18),

  '@desktop': {
    fontSize: toRem(14),
    lineHeight: toRem(21),
  },

  variants,
});
