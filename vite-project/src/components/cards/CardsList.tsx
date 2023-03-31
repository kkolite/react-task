import Card from './Card';
import NotFound from '../UI/NotFound';
import MyLoader from '../UI/loader/MyLoader';
import { useAppSelector } from '../../store/hook';

const CardsList = () => {
  const list = useAppSelector((state) => state.cards.cards);
  const isLoading = useAppSelector((state) => state.cards.isLoading);

  if (isLoading) return <MyLoader />;
  if (!list.length) return <NotFound />;

  return (
    <div className="card__list">
      {list.map((el) => (
        <Card photo={el} key={el.id} />
      ))}
    </div>
  );
};

export default CardsList;
