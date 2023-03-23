import MyInput from '../components/UI/input/MyInput';
import CardsList from '../components/CardsList';
import { useEffect, useState } from 'react';
import Airlines from '../API/Airlines';
import { IAirline } from '../data/types';
import useDebounce from '../hooks/useDebounce';

const Cards = () => {
  const [list, setList] = useState<IAirline[]>([]);
  const [search, setSearch] = useState<string>('');
  //const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const value = localStorage.getItem('value') || 'airlines';
    setSearch(value);
    setFetchList(value);
  }, []);

  const handleSearch = async (str: string) => {
    setSearch(str);
    localStorage.setItem('value', str);
    await setFetchList(str);
  };

  const handleWithinDebounce = useDebounce(handleSearch);

  const setFetchList = async (str: string) => {
    const list = await Airlines.name(str || 'airlines');
    setList(list);
  };

  return (
    <div className="cards__page">
      <MyInput setSearch={handleWithinDebounce} value={search} />
      <CardsList list={list} />
    </div>
  );
};

export default Cards;
