import { IAirline, IPhoto } from '../data/types';
import Card from './Card';
import NotFound from './NotFound';
import MyLoader from './UI/loader/MyLoader';

interface IProps {
  list: IPhoto[];
  isLoading: boolean;
}

const CardsList = ({ list, isLoading }: IProps) => {
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
