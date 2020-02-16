import { CONSTANTS } from '../actions';
import { uuid } from 'uuidv4';

const initialState = {};

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
      return { ...state, [card.id]: card };
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

      action.payload.cards = newCards;
      return newState;
    }

    default:
      return state;
  }
};

export default cardReducer;
