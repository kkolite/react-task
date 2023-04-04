import { mockValue } from '../../tests/mocks';
import cardReducer, { setVisible, setSearch, setModal } from '../cardSlice';

const initialState = {
  search: '',
  cards: [],
  isLoading: false,
  error: '',
  modal: null,
  isVisible: false,
};

describe('Card Slice', () => {
  it('should return default state', () => {
    const result = cardReducer(initialState, { type: '' });
    expect(result.cards).toEqual([]);
  });

  it('should set visible', () => {
    const action = { type: setVisible.type, payload: true };
    const result = cardReducer(initialState, action);
    expect(result.isVisible).toBeTruthy();
  });

  it('should set search', () => {
    const search = 'Test';
    const action = { type: setSearch.type, payload: search };
    const result = cardReducer(initialState, action);
    expect(result.search).toEqual(search);
  });

  it('shoul set modal', () => {
    const action = { type: setModal.type, payload: mockValue };
    const result = cardReducer(initialState, action);
    expect(result.modal?.likes).toEqual(100);
  });
});
