import { combineReducers } from 'redux';
import listReducer from './listReducer';
import cardReducer from './cardReducer';
import archiveReducer from './archiveReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  lists: listReducer,
  cards: cardReducer,
  archived: archiveReducer,
  search: searchReducer
});

export default rootReducer;
