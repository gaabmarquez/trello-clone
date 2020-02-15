import { createStore } from 'redux';
import rootReducer from './reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'trello-clone',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState) {
  let store = createStore(persistedReducer, initialState);
  let persistor = persistStore(store);
  return { store, persistor };
}

