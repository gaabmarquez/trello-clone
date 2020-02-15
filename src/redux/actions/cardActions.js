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

export const duplicateCard = card => {
  const oldId = card.id;
  card.id = uuid();
  return {
    type: CONSTANTS.DUPLICATE_CARD,
    payload: { card, oldId }
  };
};

export const archiveCard = (card, listID) => {
  return {
    type: CONSTANTS.ARCHIVE_CARD,
    payload: { card, listID }
  };
};
