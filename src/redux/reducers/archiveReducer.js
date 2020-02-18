import { CONSTANTS } from '../actions';

const initialState = {
  past: {},
  present: {
    lists: [],
    cards: []
  },
  future: {}
};

let lastAction;

const actionsThatAffectState = [CONSTANTS.ARCHIVE_CARD, CONSTANTS.ARCHIVE_LIST];

const archiveReducer = (state = initialState, action) => {
  if (
    action.type !== CONSTANTS.UNDO_LAST_ACTION &&
    action.type !== CONSTANTS.REDO_LAST_ACTION
  ) {
    lastAction = action.type;
  }

  switch (action.type) {
    case CONSTANTS.ARCHIVE_CARD: {
      const { card } = action.payload;

      const newPresent = {
        ...state.present,
        cards: [...state.present.cards, card]
      };
      const newState = {
        ...state,
        past: { ...state.present },
        present: newPresent
      };
      return newState;
    }
    case CONSTANTS.ARCHIVE_LIST: {
      const { list, cards } = action.payload;

      const newPresent = {
        ...state.present,
        cards: [...state.present.cards, ...cards],
        lists: [...state.present.lists, { ...list }]
      };
      const newState = {
        ...state,
        past: { ...state.present },
        present: newPresent
      };
      return newState;
    }

    case CONSTANTS.UNDO_LAST_ACTION: {
      if (
        state.past &&
        actionsThatAffectState.includes(lastAction)
      ) {
        return {
          past: {},
          present: { ...state.past },
          future: { ...state.present }
        };
      }
      return state;
    }

    case CONSTANTS.REDO_LAST_ACTION: {
      if (
        state.future &&
        actionsThatAffectState.includes(lastAction)
      ) {
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

export default archiveReducer;
