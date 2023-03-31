import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import Unsplash from '../API/Unsplash';
import { IPhoto } from '../data/types';

interface ICardsState {
  search: string;
  cards: IPhoto[];
  isLoading: boolean;
  error: string;
}

const initialState: ICardsState = {
  search: '',
  cards: [],
  isLoading: false,
  error: '',
};

export const fetchCards = createAsyncThunk('cards/fetchCards', async (value: string) => {
  const res = await Unsplash(value);
  return res;
});

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const { setSearch } = cardSlice.actions;

export default cardSlice.reducer;
