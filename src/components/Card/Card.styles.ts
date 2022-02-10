import { styled, toRem } from 'theme';

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: toRem(560),
  background: '$neutralWhite',
  boxShadow: '$level4',
  borderRadius: '$lg',

  marginBottom: toRem(64),
  padding: toRem(24, 24, 40),

  '@desktop': {
    padding: toRem(32, 40, 40),
  },
});

export const CardHeader = styled('div', {
  position: 'relative',
  paddingLeft: toRem(80),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  height: toRem(64),

  img: { position: 'absolute', left: 0 },
});

export const CardBody = styled('div', {
  marginTop: toRem(16),

  '@desktop': {
    marginTop: toRem(24),
  },
});

export const CardFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: toRem(32),
});
