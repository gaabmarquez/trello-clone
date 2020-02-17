import { createStore, compose } from 'redux';

import rootReducer from './reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'trello-clone',
  storage
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState) {
  let store = createStore(persistedReducer, initialState, composeEnhancers());
  let persistor = persistStore(store);
  return { store, persistor };
}
