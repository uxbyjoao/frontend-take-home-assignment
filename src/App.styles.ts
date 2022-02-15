import { styled, toRem } from 'theme';

export const App = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '$blueGray10',
  fontFamily: '$workSans',
  fontWeight: '$medium',
});

export const Title = styled('div', {
  display: 'flex',
  margin: toRem(32, 16, 24),

  '@desktop': {
    margin: toRem(48, 0, 24),
  },
});

export const CalculationFields = styled('div', {
  display: 'grid',
  gap: toRem(16),
  gridTemplateColumns: '1fr',

  label: {
    display: 'flex',
    gap: 4,
    flexDirection: 'column',
  },

  '@desktop': {
    gridTemplateColumns: toRem(272, 192),
  },
});

export const CalculationDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: toRem(24),
  border: '1px solid $blueGray50',
  borderRadius: '$lg',
  overflow: 'hidden',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: toRem(24),

    '@desktop': {
      padding: toRem(24, 32, 16),
    },
  },

  'div + div': {
    background: '$blueGray10',
    padding: toRem(24, 32),

    '> span': {
      textAlign: 'center',
    },

    '@desktop': {
      '> span': {
        textAlign: 'left',
      },
    },
  },

  '@desktop': {
    gridColumn: '1 / span 2',
  },
});

export const ConfirmButton = styled('button', {
  width: '100%',
  maxWidth: toRem(320),
  padding: toRem(18),
  background: '$brandColorPrimary',
  color: '$neutralWhite',
  border: 'none',
  borderRadius: '$pill',
});
