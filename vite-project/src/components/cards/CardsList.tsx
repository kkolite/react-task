import { IPhoto } from '../../data/types';
import { Card } from './Card';
import { MyLoader, NotFound } from '../UI';

interface IProps {
  list: IPhoto[];
  isLoading: boolean;
  setCard: (card: IPhoto) => void;
}

export const CardsList = ({ list, isLoading, setCard }: IProps) => {
  if (isLoading) return <MyLoader />;
  if (!list.length) return <NotFound />;

  return (
    <div className="card__list">
      {list.map((el) => (
        <Card photo={el} key={el.id} setCard={() => setCard(el)} />
      ))}
    </div>
  );
};
