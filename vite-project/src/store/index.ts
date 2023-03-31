import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    cards: cardReducer,
    users: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
