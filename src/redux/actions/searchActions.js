import { CONSTANTS } from '.';

export const filterCards = text => {
  return {
    type: CONSTANTS.FILTER_CARDS,
    payload: { text }
  };
};
