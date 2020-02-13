import { combineReducers } from 'redux';
import listReducer from './listReducer';
import cardReducer from './cardReducer';
import archiveReducer from './archiveReducer';

const rootReducer = combineReducers({
  lists: listReducer,
  cards: cardReducer,
  archived: archiveReducer
});

export default rootReducer;
