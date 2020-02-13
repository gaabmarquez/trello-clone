import { combineReducers } from 'redux';
import listReducer from './listReducer';
import cardReducer from './cardReducers';

const rootReducer = combineReducers({
  lists: listReducer,
  cards: cardReducer
});

export default rootReducer;
 