import { IAirline } from "../data/types";
import Card from "./Card";
import MyLoader from "./UI/loader/MyLoader";

interface IProps {
  list: IAirline[]
}

const CardsList = ({list}: IProps) => {
  if (!list.length) return <MyLoader/>

  return (
    <div className="card__list">
      {list.map((el) => 
        <Card airline={el} key={el.icao} />
      )}
    </div>
  );
};

export default CardsList;