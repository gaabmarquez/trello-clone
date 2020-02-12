import { CONSTANTS } from '../actions';
import initialState from './initialState';

let listID = 2;
let cardId = 4;


const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      console.log('REducer', action)
      const newList = {
        title: action.payload,
        cards: [],
        id: ++listID
      };
      return [...state, newList];

      case CONSTANTS.ADD_CARD:
        console.log('CARD REDUCER ', action);
        const newCard = {
          id: ++cardId,
          text: action.payload.text,
        };
        console.log('state', state);
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
        console.log('NEW STATE', newState);
        return newState;

    default:
      return state;
  }
};

export default listReducer;
