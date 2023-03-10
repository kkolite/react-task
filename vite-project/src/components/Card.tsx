import { Link } from "react-router-dom";
import { IAirline } from "../data/types";
import MyButton from "./UI/button/MyButton"

interface IProps {
  airline: IAirline
}

const Card = ({airline}: IProps) => {
  const fleet = airline.fleet;
  return (
    <div className="card">
      <p className="card__name">{airline.name}</p>
      { airline.logo_url ? 
      <img src={airline.logo_url} alt="logo"/> :
      <></>
      }
      <p>ICAO: {airline.icao}</p>
      <p>IATA: {airline.iata}</p>
      <p>Fleet size: {fleet.total}</p>
      <Link to={`/cards/${airline.icao.toLowerCase()}`}>
        <MyButton>About Fleet</MyButton>
      </Link>
    </div>
  );
};

export default Card;