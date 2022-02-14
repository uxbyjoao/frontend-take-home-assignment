import { styled, toRem } from 'theme';

const Button = styled('button', {
  position: 'absolute',
  background: 'none',
  border: 'none',
  backgroundImage: 'url(/icons/arrow.svg)',
  backgroundPositionY: 'center',
  backgroundRepeat: 'no-repeat',
  width: toRem(24),
  height: toRem(24),
  cursor: 'pointer',
});

export const MonthInputWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const DecrementButton = styled(Button, {
  left: toRem(20),
});

export const IncrementButton = styled(Button, {
  right: toRem(20),
  transform: 'rotate(180deg)',
});

export const InputValueContainer = styled('div', {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  top: toRem(7.5),
  bottom: toRem(6.5),

  '@desktop': {
    top: toRem(4),
    bottom: toRem(4),
  },
});
