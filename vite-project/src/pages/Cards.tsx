import MyInput from '../components/UI/input/MyInput';
import CardsList from '../components/cards/CardsList';
import { useEffect } from 'react';
import MyModal from '../components/UI/modal/MyModal';
import ModalCard from '../components/cards/ModalCard';
import { fetchCards } from '../store/cardSlice';
import { useAppDispatch, useAppSelector } from '../store/hook';

const Cards = () => {
  const search = useAppSelector((state) => state.cards.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards(search));
    // Для имитации componentDidMount (запуска один раз) нужно передать пустой массив
    // Eslint кидает warning на зависимость от fetching
    // Это больная точка линтера с хуками. Поэтому так :(
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cards__page">
      <MyModal>
        <ModalCard />
      </MyModal>
      <MyInput />
      <CardsList />
    </div>
  );
};

export default Cards;
