import MyInput from '../components/UI/input/MyInput';
import CardsList from '../components/cards/CardsList';
import { useEffect, useState } from 'react';
import { IPhoto } from '../data/types';
import useDebounce from '../hooks/useDebounce';
import { useFetching } from '../hooks/useFetching';
import useSaveLS from '../hooks/useSaveLS';
import Unsplash from '../API/Unsplash';

const Cards = () => {
  const [list, setList] = useState<IPhoto[]>([]);
  const [search, setSearch] = useState<string>('');

  const setFetchList = async (str: string) => {
    const list = await Unsplash(str);
    setList(list);
  };

  const { fetching, isLoading } = useFetching(setFetchList);

  useEffect(() => {
    const value = localStorage.getItem('value') || 'airlines';
    setSearch(value);
    fetching(value);
    // Для имитации componentDidMount (запуска один раз) нужно передать пустой массив
    // Eslint кидает warning на зависимость от fetching
    // Это больная точка линтера с хуками. Поэтому так :(
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useSaveLS('value', search);

  const handleSearch = async (str: string) => {
    setSearch(str);
    await fetching(str);
  };

  const handleWithinDebounce = useDebounce(handleSearch);

  return (
    <div className="cards__page">
      <MyInput setSearch={handleWithinDebounce} value={search} />
      <CardsList list={list} isLoading={isLoading} />
    </div>
  );
};

export default Cards;
