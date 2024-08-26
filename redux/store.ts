import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import User from './reducers/User';
import {logger} from 'redux-logger';

export interface UserState {
  userId: number;
  firstName: string;
  lastName: string;
  isLoggedIn: boolean;
}

export interface RootState {
  user: UserState;
}

const rootReducer = combineReducers({
  user: User,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger);
  },
});

export default store;

export const persistor = persistStore(store);
