import MyInput from '../components/UI/input/MyInput';
import CardsList from '../components/CardsList';
import { useEffect, useRef, useState } from 'react';
import Airlines from '../API/Airlines';
import { IAirline } from '../data/types';
import useDebounce from '../hooks/useDebounce';
import { useFetching } from '../hooks/useFetching';
import useSaveLS from '../hooks/useSaveLS';

const Cards = () => {
  const [list, setList] = useState<IAirline[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const value = localStorage.getItem('value') || 'airlines';
    setSearch(value);
    fetching(value);
  }, []);

  useSaveLS('value', search);

  const handleSearch = async (str: string) => {
    setSearch(str);
    await fetching(str);
  };

  const handleWithinDebounce = useDebounce(handleSearch);

  const setFetchList = async (str: string) => {
    const list = await Airlines.name(str || 'airlines');
    setList(list);
  };

  const { fetching, isLoading } = useFetching(setFetchList);

  return (
    <div className="cards__page">
      <MyInput setSearch={handleWithinDebounce} value={search} />
      <CardsList list={list} isLoading={isLoading} />
    </div>
  );
};

export default Cards;
