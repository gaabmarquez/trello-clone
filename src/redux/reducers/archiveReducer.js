import { CONSTANTS } from '../actions';

const initialState = {
  past: [],
  present: {
    lists: [],
    cards: []
  },
  future: []
};

// let lastAction;
let lastActions =[];

const actionsThatAffectState = [CONSTANTS.ARCHIVE_CARD, CONSTANTS.ARCHIVE_LIST];

const archiveReducer = (state = initialState, action) => {
  if (
    action.type !== CONSTANTS.UNDO_LAST_ACTION &&
    action.type !== CONSTANTS.REDO_LAST_ACTION
  ) {
    // lastAction = action.type;
    lastActions.unshift(action.type)

  }

  switch (action.type) {
    case CONSTANTS.ARCHIVE_CARD: {
      const { card } = action.payload;

      const newPast = [...state.past];
      newPast.unshift({ ...state.present });

      const newPresent = {
        ...state.present,
        cards: [...state.present.cards, card]
      };
      const newState = {
        ...state,
        past: newPast,
        present: newPresent
      };
      return newState;
    }
    case CONSTANTS.ARCHIVE_LIST: {
      const { list, cards } = action.payload;

      const newPast = [...state.past];
      newPast.unshift({ ...state.present });

      const newPresent = {
        ...state.present,
        cards: [...state.present.cards, [...cards]],
        lists: [...state.present.cards, { ...list }]
      };
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
        actionsThatAffectState.includes(lastActions.shift())
      ) {
        console.log('LAST ACTION', lastActions[0]);
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
        actionsThatAffectState.includes(lastActions.shift())
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

export default archiveReducer;
