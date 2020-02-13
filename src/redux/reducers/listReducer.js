import { CONSTANTS } from '../actions';

const initialState = [
  { id: 'list-0', cards: ['card-0'], title: 'To Do' },
  { id: 'list-1', cards: ['card-1'], title: 'Doing' },
  { id: 'list-2', cards: ['card-2'], title: 'Done' }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      const { title, id } = action.payload;

      const newList = {
        title: title,
        cards: [],
        id: `list-${id}`
      };
      return [...state, newList];
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
      console.log(newState);
      return newState;
    }

    case CONSTANTS.ADD_CARD: {
      console.log(action.type, 'LIST REDUCER');
      const { listID, id } = action.payload;

      const newState = state.map(list => {
        if (list.id === listID) {
          return {
            ...list,
            cards: [...list.cards, `card-${id}`]
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
      // console.log('LISTS>>>>>>', newState);

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
