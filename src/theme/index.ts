import { createStitches } from '@stitches/react';

import { colors, fonts, fontWeights, media, shadows, radii } from './tokens';

export { toRem } from './helpers';

export const { styled, css } = createStitches({
  theme: {
    colors,
    fonts,
    fontWeights,
    radii,
    shadows,
  },
  media,
});
