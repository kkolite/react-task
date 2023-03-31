import MyInput from '../components/UI/input/MyInput';
import CardsList from '../components/cards/CardsList';
import { useEffect, useState } from 'react';
import { IPhoto } from '../data/types';
import useDebounce from '../hooks/useDebounce';
import MyModal from '../components/UI/modal/MyModal';
import ModalCard from '../components/cards/ModalCard';
import { setSearch, fetchCards } from '../store/cardSlice';
import { useAppDispatch, useAppSelector } from '../store/hook';

const Cards = () => {
  const search = useAppSelector((state) => state.cards.search);
  const list = useAppSelector((state) => state.cards.cards);
  const isLoading = useAppSelector((state) => state.cards.isLoading);
  const [visible, setViseble] = useState<boolean>(false);
  const [modal, setModal] = useState<IPhoto | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards(search));
    // Для имитации componentDidMount (запуска один раз) нужно передать пустой массив
    // Eslint кидает warning на зависимость от fetching
    // Это больная точка линтера с хуками. Поэтому так :(
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = async (str: string) => {
    dispatch(setSearch(str));
    dispatch(fetchCards(str));
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
