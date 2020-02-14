import { CONSTANTS } from '../actions';

const initialState = '';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.FILTER_CARDS: {
      const { text } = action.payload;

      const newState = text;

      return newState;
    }

    default:
      return state;
  }
};

export default searchReducer;
