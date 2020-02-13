import { CONSTANTS } from '../actions';

const initialState = {
  'card-0': {
    text: 'To do task',
    id: `card-0`,
    list: 'list-0'
  },
  'card-1': {
    text: 'Doing task',
    id: `card-1`,
    list: 'list-1'
  },
  'card-2': {
    text: 'Done task',
    id: `card-2`,
    list: 'list-2'
  }
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const { text, listID, id } = action.payload;

      const newCard = {
        text,
        id: `card-${id}`,
        list: listID
      };

      return { ...state, [`card-${id}`]: newCard };
    }
    case CONSTANTS.EDIT_CARD: {
      const { id, newText } = action.payload;
      const card = state[id];
      card.text = newText;
      return { ...state, [`card-${id}`]: card };
    }
    case CONSTANTS.ARCHIVE_CARD: {
      const { card } = action.payload;
      const newState = state;
      delete newState[card.id];

      return newState;
    }
    case CONSTANTS.ARCHIVE_LIST: {
      const { cards } = action.payload;

      const newState = state;
      cards.map(card => delete newState[card.id]);
      console.log('CARDS',cards);
      return newState;
    }
    default:
      return state;
  }
};

export default cardReducer;
