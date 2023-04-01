import { Card } from './Card';
import { NotFound, MyLoader } from '../UI';
import { useAppSelector } from '../../store/hook';

export const CardsList = () => {
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
