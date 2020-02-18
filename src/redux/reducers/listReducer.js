import { CONSTANTS } from '../actions';
import { uuid } from 'uuidv4';

const initialState = {
  past: [],
  present: [
    { id: '10', cards: [], title: 'To Do' },
    { id: '11', cards: [], title: 'Doing' },
    { id: '12', cards: [], title: 'Done' }
  ],
  future: []
};
let lastAction;

const actionsThatNotAffectState = [CONSTANTS.EDIT_CARD];

const listReducer = (state = initialState, action) => {
  if (
    action.type !== CONSTANTS.UNDO_LAST_ACTION &&
    action.type !== CONSTANTS.REDO_LAST_ACTION
  ) {
    lastAction = action.type;
  }

  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      const { title } = action.payload;
      const id = uuid();
      const newList = {
        title: title,
        cards: [],
        id
      };

      const newState = {
        ...state,
        past: [...state.present],
        present: [...state.present, newList]
      };
      return newState;
    }
    case CONSTANTS.DUPLICATE_LIST: {
      const { title, id, cards, newId } = action.payload;
      const cardsIds = cards.map(card => card.id);

      //get index of list to be copied
      const index = state.present.map(list => list.id).indexOf(id);

      const newList = {
        title: `Copy of ${title}`,
        cards: cardsIds,
        id: newId
      };
      const newPresent = [...state.present];

      newPresent.splice(index + 1, 0, newList);

      const newState = {
        ...state,
        past: [...state.present],
        present: newPresent
      };
      return newState;
    }
    case CONSTANTS.EDIT_LIST: {
      const { title, id } = action.payload;

      const newPresent = state.present.map(list => {
        if (list.id === id) {
          return {
            ...list,
            title
          };
        } else {
          return list;
        }
      });

      const newState = {
        ...state,
        past: [...state.present],
        present: newPresent
      };
      return newState;
    }

    case CONSTANTS.ARCHIVE_LIST: {
      const { list: archivedList } = action.payload;

      const newPresent = state.present.filter(
        list => list.id !== archivedList.id
      );

      const newState = {
        ...state,
        past: [...state.present],
        present: newPresent
      };
      return newState;
    }

    case CONSTANTS.ADD_CARD: {
      const { listID, id } = action.payload;

      const newPresent = state.present.map(list => {
        if (list.id === listID) {
          return {
            ...list,
            cards: [...list.cards, id]
          };
        } else {
          return list;
        }
      });

      const newState = {
        ...state,
        past: [...state.present],
        present: newPresent
      };
      return newState;
    }

    case CONSTANTS.DUPLICATE_CARD: {
      const { card, oldId } = action.payload;

      const newPresent = state.present.map(list => {
        if (list.id === card.list) {
          const index = list.cards.indexOf(oldId);
          const newCards = [...list.cards];
          newCards.splice(index + 1, 0, card.id);

          return {
            ...list,
            cards: newCards
          };
        } else {
          return list;
        }
      });

      const newState = {
        ...state,
        past: [...state.present],
        present: newPresent
      };
      return newState;
    }
    case CONSTANTS.ARCHIVE_CARD: {
      const { card } = action.payload;

      const list = state.present.find(list => list.id === card.list);
      let newCards = [...list.cards];

      newCards = newCards.filter(cardID => cardID !== card.id);

      const newPresent = state.present.map(list => {
        if (list.id === card.list) {
          return {
            ...list,
            cards: newCards
          };
        } else {
          return list;
        }
      });

      const newState = {
        ...state,
        past: [...state.present],
        present: newPresent
      };
      return newState;
    }

    case CONSTANTS.DRAGGED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type
      } = action.payload;

      let newPresent;
      if (type === 'list') {
        newPresent = [...state.present];
        const list = newPresent.splice(droppableIndexStart, 1);
        newPresent.splice(droppableIndexEnd, 0, ...list);
      } else {
        //same container
        if (droppableIdStart === droppableIdEnd) {
          const startList = state.present.find(
            list => droppableIdStart === list.id
          );
          const startListNewCards = [...startList.cards];
          const card = startListNewCards.splice(droppableIndexStart, 1);
          startListNewCards.splice(droppableIndexEnd, 0, ...card);

          newPresent = state.present.map(list => {
            if (list.id === startList.id) {
              return {
                ...startList,
                cards: startListNewCards
              };
            } else {
              return list;
            }
          });
        } else {
          const startList = state.present.find(
            list => droppableIdStart === list.id
          );
          const endList = state.present.find(
            list => droppableIdEnd === list.id
          );

          const startListNewCards = [...startList.cards];
          const endListNewCards = [...endList.cards];

          const card = startListNewCards.splice(droppableIndexStart, 1);
          endListNewCards.splice(droppableIndexEnd, 0, ...card);

          newPresent = state.present.map(list => {
            if (list.id === startList.id) {
              return {
                ...startList,
                cards: startListNewCards
              };
            } else if (list.id === endList.id) {
              return {
                ...endList,
                cards: endListNewCards
              };
            } else {
              return list;
            }
          });
        }
      }
      const newState = {
        ...state,
        past: [...state.present],
        present: newPresent
      };
      return newState;
    }

    case CONSTANTS.UNDO_LAST_ACTION: {
      if (
        state.past.length > 0 &&
        !actionsThatNotAffectState.includes(lastAction)
      ) {
        const newState = {
          past: [],
          present: [...state.past],
          future: [...state.present]
        };
        return newState;
      }
      return state;
    }

    case CONSTANTS.REDO_LAST_ACTION: {
      if (
        state.future.length > 0 &&
        !actionsThatNotAffectState.includes(lastAction)
      ) {
        const newState = {
          past: [...state.present],
          present: [...state.future],
          future: []
        };
        return newState;
      }

      return state;
    }
    default:
      return state;
  }
};

export default listReducer;
