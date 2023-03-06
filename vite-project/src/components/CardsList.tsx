import { IAirline } from "../data/types";
import Card from "./Card";

interface IProps {
  list: IAirline[]
}

const CardsList = ({list}: IProps) => {
  return (
    <div>
      {list.map((el, index) => 
        <Card airline={el} key={el.icao} />
      )}
    </div>
  );
};

export default CardsList;