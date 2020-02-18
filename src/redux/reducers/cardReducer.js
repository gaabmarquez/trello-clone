import { CONSTANTS } from '../actions';
import { uuid } from 'uuidv4';

const initialState = {
  past: {},
  present: {},
  future: {}
};
let lastAction;

const actionsThatNotAffectState = [
  CONSTANTS.DRAGGED,
  CONSTANTS.ADD_LIST,
  CONSTANTS.EDIT_LIST
];

const cardReducer = (state = initialState, action) => {
  if (
    action.type !== CONSTANTS.UNDO_LAST_ACTION &&
    action.type !== CONSTANTS.REDO_LAST_ACTION
  ) {
    lastAction = action.type;
  }

  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const { text, listID, id } = action.payload;

      const newCard = {
        text,
        id: id,
        list: listID
      };

      return {
        ...state,
        past: { ...state.present },
        present: { ...state.present, [id]: newCard }
      };
    }
    case CONSTANTS.EDIT_CARD: {
      const { id, newText } = action.payload;
      const card = { ...state.present[id] };
      card.text = newText;

      return {
        ...state,
        past: { ...state.present },
        present: { ...state.present, [id]: card }
      };
    }
    case CONSTANTS.ARCHIVE_CARD: {
      const { card } = action.payload;

      const newPresent = { ...state.present };
      delete newPresent[card.id];

      const newState = {
        ...state,
        past: { ...state.present },
        present: newPresent
      };
      return newState;
    }
    case CONSTANTS.ARCHIVE_LIST: {
      const { cards } = action.payload;

      const newPresent = { ...state.present };
      cards.map(card => delete newPresent[card.id]);

      const newState = {
        ...state,
        past: { ...state.present },
        present: newPresent
      };
      return newState;
    }
    case CONSTANTS.DUPLICATE_CARD: {
      const { card } = action.payload;

      const newState = {
        ...state,
        past: { ...state.present },
        present: { ...state.present, [card.id]: card }
      };
      return newState;
    }

    case CONSTANTS.DUPLICATE_LIST: {
      const { cards, newId } = action.payload;
      let newCards = [];
      const newPresent = { ...state.present };

      for (const card of cards) {
        const newCard = { ...card };
        newCard.id = uuid();
        newCard.list = newId;
        newPresent[newCard.id] = newCard;
        newCards.push(newCard);
      }

      action.payload.cards = newCards;

      const newState = {
        ...state,
        past: { ...state.present },
        present: newPresent
      };
      return newState;
    }

    case CONSTANTS.UNDO_LAST_ACTION: {
      console.log(state.past);
      if (state.past && !actionsThatNotAffectState.includes(lastAction)) {
        return {
          past: undefined,
          present: { ...state.past },
          future: { ...state.present }
        };
      }
      return state;
    }

    case CONSTANTS.REDO_LAST_ACTION: {
      if (state.future && !actionsThatNotAffectState.includes(lastAction)) {
        return {
          past: { ...state.present },
          present: { ...state.future },
          future: {}
        };
      }

      return state;
    }

    default:
      return state;
  }
};

export default cardReducer;
