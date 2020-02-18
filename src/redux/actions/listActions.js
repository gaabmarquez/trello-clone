import { CONSTANTS } from '.';
import { uuid } from 'uuidv4';

export const addList = title => {
  const id = uuid();
  return {
    type: CONSTANTS.ADD_LIST,
    payload: { title, id }
  };
};

export const duplicateList = (id, title, cards) => {
  const newId = uuid();
  return {
    type: CONSTANTS.DUPLICATE_LIST,
    payload: { id, title, cards, newId }
  };
};

export const editList = (id, title) => {
  return {
    type: CONSTANTS.EDIT_LIST,
    payload: { title, id }
  };
};

export const archiveList = (list, cards) => {
  return {
    type: CONSTANTS.ARCHIVE_LIST,
    payload: { list, cards }
  };
};

export const undoLastAction = () => {
  return {
    type: CONSTANTS.UNDO_LAST_ACTION
  };
};

export const redoLastAction = () => {
  return {
    type: CONSTANTS.REDO_LAST_ACTION
  };
};
export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: CONSTANTS.DRAGGED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type
    }
  };
};
