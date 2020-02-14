import { CONSTANTS } from '.';
// import { uuid } from 'uuidv4';

export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID }
  };
};

export const editCard = (id, newText) => {
  return {
    type: CONSTANTS.EDIT_CARD,
    payload: { id, newText }
  };
};

export const duplicateCard = card => {
  return {
    type: CONSTANTS.DUPLICATE_CARD,
    payload: { card }
  };
};

export const archiveCard = (card, listID) => {
  return {
    type: CONSTANTS.ARCHIVE_CARD,
    payload: { card, listID }
  };
};
