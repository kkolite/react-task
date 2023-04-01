import { MyInput, MyModal } from '../components/UI';
import { CardsList, ModalCard } from '../components/cards';
import { useEffect } from 'react';
import { fetchCards } from '../store/cardSlice';
import { useAppDispatch, useAppSelector } from '../store/hook';

export const Cards = () => {
  const search = useAppSelector((state) => state.cards.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards(search));
    // Для имитации componentDidMount (запуска один раз) нужно передать пустой массив
    // Eslint кидает warning на зависимость от fetching
    // Это больная точка линтера с хуками. Поэтому так :(
    // Ментор разрешил заткнуть линтер на строчке ниже (чтобы не писать костыль)
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
