import { IAirline } from "../data/types";

interface IProps {
  airline: IAirline
}

const Card = ({airline}: IProps) => {
  return (
    <div>
      {airline.name}, {airline.iata}
    </div>
  );
};

export default Card;