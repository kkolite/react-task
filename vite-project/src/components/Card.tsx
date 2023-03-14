import { Link } from 'react-router-dom';
import { IAirline } from '../data/types';
import MyButton from './UI/button/MyButton';

interface IProps {
  airline: IAirline;
}

const Card = ({ airline }: IProps) => {
  const fleet = airline.fleet;
  return (
    <div className="card">
      <h3 className="card__name">{airline.name}</h3>
      <div className="card__img-box">
        {airline.logo_url ? <img src={airline.logo_url} alt="logo" /> : <p>No logo</p>}
      </div>
      <div className="card__info">
        <p>ICAO: {airline.icao}</p>
        <p>IATA: {airline.iata}</p>
        <p>Fleet size: {fleet.total}</p>
      </div>
      <Link to={`/cards/${airline.icao.toLowerCase()}`}>
        <MyButton disabled={true} title="Link disabled :(">About Fleet</MyButton>
      </Link>
    </div>
  );
};

export default Card;
