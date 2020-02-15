import { CONSTANTS } from '../actions';
import { uuid } from 'uuidv4';

const initialState = {
  '0': {
    text: 'To do task',
    id: `0`,
    list: '10'
  },
  '1': {
    text: 'Doing task',
    id: `1`,
    list: '11'
  },
  '2': {
    text: 'Done task',
    id: `2`,
    list: '12'
  },
  '3': {
    text: 'TO FILTER: To do task',
    id: `3`,
    list: '10'
  },
  '4': {
    text: 'TO FILTER: Doing task',
    id: `4`,
    list: '11'
  },
  '5': {
    text: 'TO FILTER: Done task',
    id: `5`,
    list: '12'
  }
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const { text, listID, id } = action.payload;

      const newCard = {
        text,
        id: id,
        list: listID
      };
// debugger;
      return { ...state, [id]: newCard };
    }
    case CONSTANTS.EDIT_CARD: {
      const { id, newText } = action.payload;
      console.log(state[id], id);
      console.log(JSON.stringify(state));
      const card = state[id];
      card.text = newText;
      return { ...state, [id]: card };
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

      return { ...state, [id]: newCard };
    }
    case CONSTANTS.DUPLICATE_LIST: {
      const { cards, newId } = action.payload;
      let newCards = [];

      for (const card of cards) {
        const newCard = { ...card };
        newCard.id = uuid();
        newCard.list = newId;
        newCards.push(newCard);
      }

      const newState = { ...state };

      for (const card of newCards) {
        newState[card.id] = card;
      }

      // console.log(newCards[0].id, cards[0].id);
      action.payload.cards = newCards;
      return newState;
    }

    default:
      return state;
  }
};

export default cardReducer;
