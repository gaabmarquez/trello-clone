import { CONSTANTS } from '../actions';
import { uuid } from 'uuidv4';

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
  },
  'card-3': {
    text: 'TO FILTER: To do task',
    id: `card-3`,
    list: 'list-0'
  },
  'card-4': {
    text: 'TO FILTER: Doing task',
    id: `card-4`,
    list: 'list-1'
  },
  'card-5': {
    text: 'TO FILTER: Done task',
    id: `card-5`,
    list: 'list-2'
  }
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const { text, listID } = action.payload;
      const id = uuid();

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
      return newState;
    }
    case CONSTANTS.DUPLICATE_CARD: {
      const { card } = action.payload;
      const id = uuid();
      card.id = id;
      const newCard = { ...card };

      return { ...state, [`card-${id}`]: newCard };
    }
    case CONSTANTS.DUPLICATE_LIST: {

      const { cards } = action.payload;
      const newCards = cards.map(card => {
        card.id = uuid();
        return card;
      });
      const newState = { ...state };

      for (const card of newCards) {
        newState[card.id] = card;
      }
      action.payload.cards = newCards;
      return newState;
    }

    default:
      return state;
  }
};

export default cardReducer;
