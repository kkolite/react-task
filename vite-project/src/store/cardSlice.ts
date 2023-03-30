import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Unsplash from '../API/Unsplash';

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (value: string) => {
    const res = await Unsplash(value);
    return res;
  }
)

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    search: '',
    cards: [],
    isLoading: false,
    error: '',
  },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: {
    [fetchCards.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCards.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cards = action.payload;
    },
    [fetchCards.rejected]: (state, action) => {
      state.isLoading = false;
    },
  }
})

export const { setSearch } = cardSlice.actions;

export default cardSlice.reducer;
