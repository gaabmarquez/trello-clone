import { createStore } from 'redux'; //applyMiddleware, compose
import rootReducer from './reducers';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
