import { useDebounce } from './useDebounce';

describe('UseDebounce hook', () => {
  it('Correct calls', () => {
    const mock = 'string';
    const func = jest.fn();
    const debounce = useDebounce(func);
    debounce(mock);
    setTimeout(() => expect(func).toBeCalledTimes(1), 600);
  });
});
