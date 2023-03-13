import { IAirline } from '../data/types';
import Card from './Card';
import NotFound from './NotFound';
import MyLoader from './UI/loader/MyLoader';

interface IProps {
  list: IAirline[] | null;
}

const CardsList = ({ list }: IProps) => {
  if (list === null) return <MyLoader />;
  if (!list.length) return <NotFound />;

  return (
    <div className="card__list">
      {list.map((el) => (
        <Card airline={el} key={el.icao} />
      ))}
    </div>
  );
};

export default CardsList;
