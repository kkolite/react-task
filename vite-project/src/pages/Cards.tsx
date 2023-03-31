import MyInput from '../components/UI/input/MyInput';
import CardsList from '../components/cards/CardsList';
import { useEffect, useState } from 'react';
import { IPhoto } from '../data/types';
import useDebounce from '../hooks/useDebounce';
import { useFetching } from '../hooks/useFetching';
import useSaveLS from '../hooks/useSaveLS';
import Unsplash from '../API/Unsplash';
import MyModal from '../components/UI/modal/MyModal';
import ModalCard from '../components/cards/ModalCard';

const Cards = () => {
  const [list, setList] = useState<IPhoto[]>([]);
  const [search, setSearch] = useState<string>('');
  const [visible, setViseble] = useState<boolean>(false);
  const [modal, setModal] = useState<IPhoto | null>(null);

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
    // Ментор разрешил заткнуть линтер на строчке ниже (чтобы не писать костыль)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useSaveLS('value', search);

  const handleSearch = async (str: string) => {
    setSearch(str);
    await fetching(str);
  };

  const handleWithinDebounce = useDebounce(handleSearch);

  const handleCardClick = (card: IPhoto) => {
    setModal(card);
    setViseble(true);
  };

  return (
    <div className="cards__page">
      <MyModal visible={visible} setVisible={setViseble}>
        <ModalCard card={modal} />
      </MyModal>
      <MyInput setSearch={handleWithinDebounce} value={search} />
      <CardsList list={list} isLoading={isLoading} setCard={handleCardClick} />
    </div>
  );
};

export default Cards;
