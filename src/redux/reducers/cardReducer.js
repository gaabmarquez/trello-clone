import { CONSTANTS } from '../actions';
import { uuid } from 'uuidv4';

const initialState = {
  past: [],
  present: {},
  future: []
};
// let lastAction;
let lastActions = [];

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
    // lastAction = action.type;
    lastActions.unshift(action.type);
  }

  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const { text, listID, id } = action.payload;

      const newCard = {
        text,
        id: id,
        list: listID
      };

      const newPast = [...state.past];
      newPast.unshift({ ...state.present });
      const newState = {
        ...state,
        past: newPast,
        present: { ...state.present, [id]: newCard }
      };
      return newState;
    }
    case CONSTANTS.EDIT_CARD: {
      const { id, newText } = action.payload;
      const card = { ...state.present[id] };
      card.text = newText;

      const newPast = [...state.past];
      newPast.unshift({ ...state.present });
      const newState = {
        ...state,
        past: newPast,
        present: { ...state.present, [id]: card }
      };
      return newState;
    }
    case CONSTANTS.ARCHIVE_CARD: {
      const { card } = action.payload;

      const newPresent = { ...state.present };
      delete newPresent[card.id];

      const newPast = [...state.past];
      newPast.unshift({ ...state.present });
      const newState = {
        ...state,
        past: newPast,
        present: newPresent
      };
      return newState;
    }
    case CONSTANTS.ARCHIVE_LIST: {
      const { cards } = action.payload;

      const newPresent = { ...state.present };
      cards.map(card => delete newPresent[card.id]);

      const newPast = [...state.past];
      newPast.unshift({ ...state.present });
      const newState = {
        ...state,
        past: newPast,
        present: newPresent
      };
      return newState;
    }
    case CONSTANTS.DUPLICATE_CARD: {
      const { card } = action.payload;

      const newPast = [...state.past];
      newPast.unshift({ ...state.present });
      const newState = {
        ...state,
        past: newPast,
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
      // return newState;
      const newPast = [...state.past];
      newPast.unshift({ ...state.present });
      const newState = {
        ...state,
        past: newPast,
        present: newPresent
      };
      return newState;
    }

    case CONSTANTS.UNDO_LAST_ACTION: {
      if (
        state.past.length > 0 &&
        !actionsThatNotAffectState.includes(lastActions.shift())
      ) {
        const newPresent = state.past.shift();
        const newFuture = [...state.future];
        newFuture.unshift({ ...state.present });

        const newState = {
          past: [...state.past],
          present: newPresent,
          future: newFuture
        };
        return newState;
      }
      return state;
    }

    case CONSTANTS.REDO_LAST_ACTION: {
      if (
        state.future.length > 0 &&
        !actionsThatNotAffectState.includes(lastActions.shift())
      ) {
        const newPresent = state.future.shift();

        const newState = {
          past: [...state.past, state.present],
          present: newPresent,
          future: [...state.future]
        };
        return newState;
      }

      return state;
    }

    default:
      return state;
  }
};

export default cardReducer;
