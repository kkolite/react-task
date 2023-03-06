import { IAirline } from "../data/types";
import Card from "./Card";

interface IProps {
  list: IAirline[]
}

const CardsList = ({list}: IProps) => {
  return (
    <div>
      {list.map((el) => 
        <Card airline={el} />
      )}
    </div>
  );
};

export default CardsList;