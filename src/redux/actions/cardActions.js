import { CONSTANTS } from '.';

const addCard = (listId, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listId }
  };
};

export default addCard;
