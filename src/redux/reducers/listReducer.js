import { CONSTANTS } from '../actions';
import { uuid } from 'uuidv4';

const initialState = [
  { id: '10', cards: ['0', '3'], title: 'To Do' },
  { id: '11', cards: ['1', '4'], title: 'Doing' },
  { id: '12', cards: ['2', '5'], title: 'Done' }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      const { title } = action.payload;
      const id = uuid();
      const newList = {
        title: title,
        cards: [],
        id
      };
      return [...state, newList];
    }
    case CONSTANTS.DUPLICATE_LIST: {
      const { title, id, cards, newId } = action.payload;
      const cardsIds = cards.map(card => card.id);

      //get index of list to be copied
      const index = state.map(list => list.id).indexOf(id);

      const newList = {
        title: title,
        cards: cardsIds,
        id: newId
      };
      const newState = [...state];

      newState.splice(index, 0, newList);
      return newState;
    }
    case CONSTANTS.EDIT_LIST: {
      const { title, id } = action.payload;

      const newState = state.map(list => {
        if (list.id === id) {
          return {
            ...list,
            title
          };
        } else {
          return list;
        }
      });
      return newState;
    }

    case CONSTANTS.ARCHIVE_LIST: {
      const { list: archivedList } = action.payload;

      const newState = state.filter(list => list.id !== archivedList.id);
      return newState;
    }

    case CONSTANTS.ADD_CARD: {
      const { listID, id } = action.payload;

      const newState = state.map(list => {
        if (list.id === listID) {
          return {
            ...list,
            cards: [...list.cards, id]
          };
        } else {
          return list;
        }
      });

      return newState;
    }

    case CONSTANTS.DUPLICATE_CARD: {
      const { card } = action.payload;

      const newState = state.map(list => {
        if (list.id === card.list) {
          return {
            ...list,
            cards: [...list.cards, card.id]
          };
        } else {
          return list;
        }
      });

      return newState;
    }
    case CONSTANTS.ARCHIVE_CARD: {
      const { card } = action.payload;

      const newState = [...state];
      const list = newState.find(list => list.id === card.list);
      list.cards = list.cards.filter(cardID => cardID !== card.id);

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
