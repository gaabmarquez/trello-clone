import { combineReducers } from 'redux';
import listReducer from './listReducer';
import cardReducer from './cardReducer';
import archiveReducer from './archiveReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  cards: cardReducer,
  lists: listReducer,
  archived: archiveReducer,
  search: searchReducer
});

export default rootReducer;
