import * as colors from '../constants/colors';

// getPrimaryColorForMediaType
// Different routes have different primary colours.
// For the /books route, red is our primary.
export const getPrimaryColorForMediaType = (mediaType) => {
  switch (mediaType) {
    case 'authors': return colors.blue;
    default: return colors.gray700;
  }
};
