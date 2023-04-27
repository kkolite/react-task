import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../data/types';

interface IUsersState {
  cards: IPost[];
}

const initialState: IUsersState = {
  cards: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<IPost>) {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = userSlice.actions;

export default userSlice.reducer;
