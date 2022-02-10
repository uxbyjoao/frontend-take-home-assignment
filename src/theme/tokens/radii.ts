import { toRem } from 'theme/helpers';

const radii: Record<string, string> = {
  sm: toRem(2),
  md: toRem(4),
  lg: toRem(8),
  xl: toRem(24),
  circle: '50%',
  pill: toRem(9999),
};

export default radii;
