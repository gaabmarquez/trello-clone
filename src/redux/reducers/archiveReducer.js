import { CONSTANTS } from '../actions';

const initialState = {
  lists: [],
  cards: []
};

const archiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ARCHIVE_CARD: {
      const { card } = action.payload;

      const newState = { ...state };
      newState.cards = [...newState.cards, card];

      console.log('ARCHIVED', newState);
      return newState;
    }
    case CONSTANTS.ARCHIVE_LIST: {
      const { list, cards } = action.payload;
      console.log(list);

      const newState = { ...state };

      newState.cards = [...newState.cards, ...cards];
      newState.lists = [...newState.lists, list];
      console.log('NEW STATE', newState);
      return newState;
    }

    default:
      return state;
  }
};

export default archiveReducer;
