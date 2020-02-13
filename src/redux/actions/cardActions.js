import { CONSTANTS } from '.';
import { uuid } from 'uuidv4';

export const addCard = (listID, text) => {
  const id = uuid();

  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID, id }
  };
};

export const editCard = (id, newText) => {
  return {
    type: CONSTANTS.EDIT_CARD,
    payload: { id, newText }
  };
};

export const deleteCard = (id, listID) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: { id, listID }
  };
};
