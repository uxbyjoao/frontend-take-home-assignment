import { styled, toRem } from 'theme';

export const Input = styled('input', {
  width: '100%',
  height: toRem(56),
  paddingLeft: toRem(4),
  fontFamily: '$rubik',
  fontSize: toRem(20),
  fontWeight: '$medium',
  lineHeight: toRem(24),
  color: '$blueGray600',
  border: '1px solid $blueGray50',
  borderRadius: '$md',
  outlineColor: '$brandColorSecondary',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left center',
  backgroundPositionX: toRem(12),
  transition: 'outline-color 175ms ease-in-out',
  willChange: 'outline-color',

  '@desktop': {
    fontSize: toRem(24),
    lineHeight: toRem(28.8),
  },

  variants: {
    icon: {
      dollar: {
        paddingLeft: toRem(44),
        backgroundImage: 'url(/icons/dollar-sign.svg)',
      },
    },
  },
});
