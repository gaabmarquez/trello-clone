import { CONSTANTS } from '../actions';
import initialState from './initialState';

let listID = 2;
let cardId = 4;

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${++listID}`
      };
      return [...state, newList];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        id: ++cardId,
        text: action.payload.text
      };
      const newState = state.map(list => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });
      return newState;
    }
    case CONSTANTS.DRAGGED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type
      } = action.payload;

      const newState = [...state];
      if (type === 'list') {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }
      //same container
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      } else {
        const startList = state.find(list => droppableIdStart === list.id);
        const endList = state.find(list => droppableIdEnd === list.id);

        const card = startList.cards.splice(droppableIndexStart, 1);
        endList.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;
    default:
      return state;
  }
};

export default listReducer;
