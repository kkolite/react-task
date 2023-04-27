import { useDebounce } from '../../../hooks';
import { fetchCards, setSearch } from '../../../store/cardSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import classes from './MyInput.module.scss';

export const MyInput = () => {
  const search = useAppSelector((state) => state.cards.search);
  const dispatch = useAppDispatch();

  const handleSearch = async (str: string) => {
    dispatch(setSearch(str));
    dispatch(fetchCards(str));
  };

  const handleWithinDebounce = useDebounce(handleSearch);

  return (
    <input
      className={classes.myInput}
      type="text"
      placeholder="Search..."
      onChange={(e) => handleWithinDebounce(e.target.value)}
      defaultValue={search}
    />
  );
};
